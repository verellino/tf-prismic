<template>
  <div class="pt-22">
    <div>
      <div v-if="featuredImage" class="article-main-image w-full mb-8 relative overflow-hidden">
        <PrismicImage
          v-if="featuredImage.url"
          :field="featuredImage"
          class="object-cover object-center"
        />
      </div>
    </div>
    <div>
      <div class="pb-0 text-center">
        <p class="mb-2 uppercase font-semibold text-sm">
          {{ article.data.section }}
        </p>
        <h1 class="mb-3 font-semibold blue-primary sm:text-2xl">
          {{article.data.title}}
        </h1>
        <p class="blog-details-span text-xs">
          {{ formattedDate }} | {{ article.data.writer }} | {{article.data.minsRead}}
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3">
      <div class="col-span-1 sm:col-span-2">
        <article>
          <SliceZone :slices="article.data.slices" :components="components" />
        </article>
        
        <div class="p-4 md:pl-12">
          <p>Bagikan artikel ini:</p>
          <ul class="flex mt-2">
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
            &larr; Kembali ke semua artikel
          </NuxtLink>
        </Bounded>
      </div>
      <!-- Right Blogs Section  -->
      <div class="col-span-1">
        <div v-if="latestArticles.length" class="py-8 md:py-10 lg:py-12">
          <div class="w-full">
            <h2 class="pl-4">
              Artikel Terbaru
            </h2>
            <ul class="grid grid-cols-1 gap-y-2">
                <ArticleBlogsListItem
                v-for="article in latestArticles"
                :key="article.id"
                :article="article"
              />
            </ul>
          </div>
          <HorizontalDivider class="w-full" />
          <div class="w-full mt-6">
            <h3 class="font-serif pl-4 blue-primary ">
              {{ article.data.category }}
            </h3>
            <ul class="grid grid-cols-1 gap-2">
                <ArticleBlogsListItem
                v-for="article in categoryPosts"
                :key="article.id"
                :article="article"
              />
            </ul>
            <nuxt-link :to="categoryLink" class="pl-4 tracking-tight text-xs text-slate-400">
              {{ article.data.category }} &rarr;
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- More Blogs Bottom Section  -->
    <div>
      <BlogsMoreBlogs :articles="similarArticles" />
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
  data () {
    return { 
      components,
      sharing: {
        url: '',
        title: '',
        description: '',
        quote: '',
        hashtags: '',
        twitterUser: 'transforming_futures'
      },
       networks: [
        { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: '#333333' },
        { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
        { network: 'line', name: 'Line', icon: 'fab fah fa-lg fa-line', color: '#00c300' },
        { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah fa-lg fa-linkedin', color: '#007bb5' },
        { network: 'messenger', name: 'Messenger', icon: 'fab fah fa-lg fa-facebook-messenger', color: '#0084ff' },
        { network: 'pinterest', name: 'Pinterest', icon: 'fab fah fa-lg fa-pinterest', color: '#bd081c' },
        { network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc' },
        { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
      ]
    }
  },
  async asyncData ({ $prismic, store, params }) {
    const article = await $prismic.api.getByUID('article', params.uid)
 
    const { results: latestArticles } = await $prismic.api.query(
      $prismic.predicate.at('document.type', 'article'),
      {
        orderings: `[${[
          { field: 'my.article.publishDate', direction: 'desc' },
          { field: 'document.first_publication_date', direction: 'desc' }
        ].map(({ field, direction }) => `${field} ${direction}`).join(', ')}]`,
        pageSize: 3
      }
    )

    const { results: similarArticles } = await $prismic.api.query(
      $prismic.predicate.similar(article.id, 3),
      {
        orderings: `[${[
          { field: 'my.article.publishDate', direction: 'desc' },
          { field: 'document.first_publication_date', direction: 'desc' }
        ].map(({ field, direction }) => `${field} ${direction}`).join(', ')}]`,
        pageSize: 3
      }
    )

    
    const categoryId = article.data.categories.id
    const categoryLink = "/category/"+categoryId

    const { results: categoryPosts } = await $prismic.api.query([
      $prismic.predicates.at("my.article.categories", categoryId)
    ])
    
    // this.sharing.url = this.$route.path,
    // this.description = await article.data.description,
    // this.quote = await article.data.description,
    // this.hashtags = await article.data.hashtags,

    await store.dispatch('prismic/load')
    return {
      article,
      latestArticles,
      similarArticles,
      categoryLink,
      categoryPosts,
    }
  },
  head () {
    return {
      title: `${this.article.data.title} | ${this.$store.state.prismic.settings.data.name}`,
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
        content: this.article.data.tags ? this.article.data.tags.toString() : "",
      },
      {
        name: "twitter:data2",
        content: this.article.data.tags ? this.article.data.tags.toString() : "",
      },
        
      ]
    }
  },
  computed: {
    formattedDate () {
      const date = this.$prismic.asDate(this.article.data.publishDate || this.article.first_publication_date)

      return dateFormatter.format(date)
    },
    featuredImage () {
      if (this.article.data.mainImage.url) {
        return this.article.data.mainImage
      }

      const imageSlice = this.article.data.slices.find(slice => slice.slice_type === 'image')
      if (imageSlice && imageSlice.primary.image.url) {
        return imageSlice.primary.image
      }
      return null
    },
    excerpt () {
      const text = this.article.data.slices
        .filter(slice => slice.slice_type === 'text')
        .map(slice => this.$prismic.asText(slice.primary.text))
        .join(' ')
      const excerpt = text.substring(0, 80)
      if (text.length > 80) {
        return excerpt.substring(0, excerpt.lastIndexOf(' ')) + '…'
      } else {
        return excerpt
      }
    }
    
  },
  mounted() {
    this.sharing.url = "https://transformingfutures.com" + this.$nuxt.$route.path
    this.sharing.title = this.article.data.title + " - "
  }
}
</script>

<style scoped>
.article-main-image{
  aspect-ratio: 16/9;
  max-height: 40vh;
}
</style>