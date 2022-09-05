<template>
  <li>
    <div class="relative py-2">
    <PrismicLink :field="article" tab-index="-1">
      <div
        v-if="featuredImage"
        class="article-img relative max-h-56 w-full overflow-hidden rounded-md py-4 px-1"
      >
        <PrismicImage
          v-if="featuredImage.url"
          :field="featuredImage"
          class="h-full w-full rounded-md object-cover object-center"
        />
      </div>
      <!-- <div v-if="!!featuredImage" class="sm:h-20"></div> -->
      <p class="blue-primary mb-2 text-xxs">
        <nuxt-link to="/" class="category-span">{{
          article.data.section
        }}</nuxt-link>
      </p>
      <div>
        <div class="blog-card flex flex-col justify-between">
          <div>
            <Heading as="h3" class="h4">
              {{ article.data.title }}
            </Heading>
            <p v-if="excerpt" class="excerpt">
              {{ excerpt }}
            </p>
          </div>
          <a href="#" class="mt-4 text-xxs">
            <div class="article-details-bottom-span">
              <span class="">{{ article.data.writer }} | </span>
              <span class="ml-1">{{ formattedDate }} | </span>
              <span class="ml-1">{{ article.data.minsRead }}</span>
            </div>
          </a>
        </div>
      </div>
    </PrismicLink>
    </div>
  </div>
  <hr class="my-2 sm:hidden h-px w-full border-0 bg-gray-300" />
  </li>
</template>

<script>
const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
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
    formattedDate() {
      const date = this.$prismic.asDate(
        this.article.data.publishDate || this.article.first_publication_date
      );

      return dateFormatter.format(date);
    },
    excerpt() {
      const text = this.article.data.slices
        .filter((slice) => slice.slice_type === "text")
        .map((slice) => this.$prismic.asText(slice.primary.text))
        .join(" ");
      const excerpt = text.substring(0, 160);
      if (text.length > 160) {
        return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
      } else {
        return excerpt;
      }
    },
  },
};
</script>