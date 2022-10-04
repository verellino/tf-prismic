<template>
  <div>
    <div class="mx-4 pt-28 sm:mx-14">
      <div
        v-if="featuredImage"
        class="article-main-image relative mb-8 w-full overflow-hidden rounded-md"
      >
        <PrismicImage
          v-if="featuredImage.url"
          :field="featuredImage"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3">
      <div class="col-span-1 sm:col-span-2">
        <div>
          <div class="pb-0 text-center">
            <p class="mt-2 mb-2 text-sm font-semibold uppercase">
              {{ article.data.section }} <span v-if="article.data.category">| {{ article.data.category }}</span>
            </p>
            <h1 class="text-maroon mx-3 mb-3 text-2xl">
              {{ article.data.title }}
            </h1>
            <p class="md:ml-8">
              {{ formattedDate }} | {{ article.data.minsRead }}
            </p>
          </div>
        </div>
        <article style="hyphens: auto">
          <SliceZone :slices="article.data.slices" :components="components" />
          <div class="p-4 md:px-6 sm:ml-4">
            <div class="mr-32 text-left text-xs">
              <p>
                Penulis: {{ article.data.writer }}
              </p>
              <p>
                Editor: {{ article.data.editor }}
              </p>
            </div>
          </div>
        </article>
        
        <div class="p-4 sm:px-6 sm:ml-4">
          <p>Bagikan artikel ini:</p>
          <ul class="mt-2 flex">
            <ShareNetwork
              v-for="network in networks"
              :network="network.network"
              :key="network.network"
              :url="sharing.url"
              :title="sharing.title"
              :description="sharing.description"
              :quote="sharing.quote"
              :hashtags="sharing.hashtags"
              :twitterUser="sharing.twitterUser"
              class="mr-4 md:mr-8"
            >
              <i :class="network.icon"></i>
            </ShareNetwork>
          </ul>
        </div>

        <Bounded>
          <NuxtLink to="/articles" class="tracking-tight text-slate-400">
            &larr; Kembali ke semua artikel
          </NuxtLink>
        </Bounded>
      </div>
      <!-- Right Blogs Section  -->
      <div class="col-span-1 border-blogs-left__desktop">
        <div v-if="latestArticles.length" class="">
          <div class="w-full px-4">
            <h2 class="section-title">Artikel Terbaru</h2>
            <ul class="grid grid-cols-1 gap-y-2">
              <ArticleBlogsListItem
                v-for="article in latestArticles"
                :key="article.id"
                :article="article"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="h-px w-full border-0 bg-slate-200 mt-8">
    <!-- More Blogs Bottom Section  -->
    <div>
      <BlogsMoreBlogs :articles="similarArticles" />
    </div>
  </div>
</template>

<script>
import { components } from "~/slices";

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default {
  data() {
    return {
      components,
      sharing: {
        url: "",
        title: "",
        description: "",
        quote: "",
        hashtags: "",
        twitterUser: "",
      },
      networks: [
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: "fab fah fa-lg fa-whatsapp",
          color: "#333333",
        },
        {
          network: "telegram",
          name: "Telegram",
          icon: "fab fah fa-lg fa-telegram-plane",
          color: "#0088cc",
        },
        {
          network: "twitter",
          name: "Twitter",
          icon: "fab fah fa-lg fa-twitter",
          color: "#1da1f2",
        },
        {
          network: "facebook",
          name: "Facebook",
          icon: "fab fah fa-lg fa-facebook-f",
          color: "#1877f2",
        },
        {
          network: "email",
          name: "Email",
          icon: "far fah fa-lg fa-envelope",
          color: "#333333",
        },
        {
          network: "linkedin",
          name: "LinkedIn",
          icon: "fab fah fa-lg fa-linkedin",
          color: "#007bb5",
        },
      ],
    };
  },
  async asyncData({ $prismic, store, params }) {
    const article = await $prismic.api.getByUID("article", params.uid);

    const { results: latestArticles } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "article"),
      {
        orderings: `[${[
          { field: "my.article.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 8,
      }
    );

    const { results: similarArticles } = await $prismic.api.query(
      $prismic.predicate.similar(article.id, 3),
      {
        orderings: `[${[
          { field: "my.article.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 3,
      }
    );

    const categoryId = article.data.categories.id;
    const categoryLink = "/category/" + categoryId;

    const { results: categoryPosts } = await $prismic.api.query([
      $prismic.predicates.at("my.article.categories", categoryId),
    ]);

    // this.sharing.url = this.$route.path,
    // this.description = await article.data.description,
    // this.quote = await article.data.description,
    // this.hashtags = await article.data.hashtags,

    await store.dispatch("prismic/load");
    return {
      article,
      latestArticles,
      similarArticles,
      categoryLink,
      categoryPosts,
    };
  },
  head() {
    return {
      title: `${this.article.data.title} | Innovating Indonesia`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.data.description,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.article.data.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.article.data.description,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://transformingfutures.com${this.$route.path}`,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: `https://transformingfutures.com${this.$route.path}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.data.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.data.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.article.data.image,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.article.data.image,
        },
        {
          property: "article:tag",
          content: this.article.data.tags
            ? this.article.data.tags.toString()
            : "",
        },
        {
          name: "twitter:data2",
          content: this.article.data.tags
            ? this.article.data.tags.toString()
            : "",
        },
      ],
    };
  },
  computed: {
    formattedDate() {
      const date = this.$prismic.asDate(
        this.article.data.publishDate || this.article.first_publication_date
      );

      return dateFormatter.format(date);
    },
    featuredImage() {
      if (this.article.data.mainImage.url) {
        return this.article.data.mainImage;
      }

      const imageSlice = this.article.data.slices.find(
        (slice) => slice.slice_type === "image"
      );
      if (imageSlice && imageSlice.primary.image.url) {
        return imageSlice.primary.image;
      }
      return null;
    },
    excerpt() {
      const text = this.article.data.slices
        .filter((slice) => slice.slice_type === "text")
        .map((slice) => this.$prismic.asText(slice.primary.text))
        .join(" ");
      const excerpt = text.substring(0, 250);
      if (text.length > 250) {
        return excerpt.substring(0, excerpt.lastIndexOf(" "));
      } else {
        return excerpt;
      }
    },
  },
  mounted() {
    this.sharing.url =
      "https://transformingfutures.com" + this.$nuxt.$route.path;
    this.sharing.title = this.article.data.title + " - ";
  },
};
</script>

<style scoped>
.article-main-image {
  aspect-ratio: 16/9;
  max-height: 45vh;
}
</style>