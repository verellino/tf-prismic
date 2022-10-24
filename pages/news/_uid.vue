<template>
  <div>
    <div class="mx-4 pt-8 sm:mx-14">
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
      <div v-else class="pt-8">
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3">
      <div class="col-span-1 sm:col-span-2">
        <div class="p-4 sm:px-12 sm:ml-12 pt-0">
          <div class="pb-0">
            <p class="mt-2 mb-2 text-sm font-semibold uppercase">
              {{ article.data.section }} <span v-if="article.data.category">| {{ article.data.category }}</span>
            </p>
            <h1 class="text-maroon mb-4 text-2xl sm:text-3xl sm:leading-10">
              {{ article.data.title }}
            </h1>
            <p class="text-sm">
              <span class="p-2 bg-black text-white rounded-md mr-1">{{ article.data.writer }} / {{ article.data.editor }}</span> {{ formattedDate }}. {{ article.data.minsRead }}.
            </p>
          </div>
        </div>
        <article style="hyphens: auto">
          <SliceZone :slices="article.data.slices" :components="components" />
          <div class="p-4 md:px-8 sm:ml-8">
            <div class="mr-32 text-left text-sm font-serif text-slate-600">
              <!-- Tags -->
              <span class="mt-2 block">
                Keywords:  
                <span v-for="(t, index) in article.tags" class="mr-1">
                  <!-- <span v-if="index != article.tags.length - 1">{{t}},</span> -->
                  <span class="bg-gray-200 rounded-md py-1 px-2 text-sm">{{t}}</span>
                </span>
              </span>
            </div>
          </div>
        </article>
        
        <div class="p-4 sm:px-12 sm:ml-12">
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
          <NuxtLink to="/" class="tracking-tight text-slate-400">
            &larr; Kembali halaman utama
          </NuxtLink>
        </Bounded>
      </div>
      <!-- Right Blogs Section  -->
      <div class="col-span-1 border-blogs-left__desktop">
        <div v-if="latestArticles.length" class="">
          <div class="w-full px-4">
            <h2 class="section-title">Berita Terbaru</h2>
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
      <BlogsMoreNews :articles="similarArticles" />
    </div>
  </div>
</template>

<script>
import { components } from '~/slices'

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

export default {
  async asyncData ({ $prismic, store, params }) {
    const article = await $prismic.api.getByUID('news', params.uid)
 
    const { results: latestArticles } = await $prismic.api.query(
      $prismic.predicate.at('document.type', 'news'),
      {
        orderings: `[${[
          { field: "my.news.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 16,
      }
    )

    const { results: similarArticles } = await $prismic.api.query(
     $prismic.predicate.at('document.type', 'news'),
     {
      pageSize: 3
     }
      // $prismic.predicate.similar(article.id, 3)
    )
      
    await store.dispatch('prismic/load')
    store.commit('layout/setWithHeaderProfile', false)
    store.commit('layout/setWithHeaderDivider', false)
    store.commit('layout/setWithFooterSignUpForm', true)
    return {
      article,
      latestArticles,
      similarArticles
    }
  },
  data () {
    return { components,
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
    }
  },
  head () {
    return {
      title: `${this.article.data.title} | Innovating Indonesia`
    }
  },
  computed: {
    formattedDate () {
      const date = this.$prismic.asDate(this.article.data.publishDate || this.article.first_publication_date)

      return dateFormatter.format(date)
    }
  },

}
</script>
