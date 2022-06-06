<template>
  <div class="pt-32">
    <div>
      <Bounded class="pb-0 text-center">
        <PrismicText
          :field="article.data.title"
          wrapper="h1"
          class="mb-3 text-6xl font-semibold tracking-tighter text-slate-800 md:text-4xl"
        />
        <p class="blog-details-span">
          {{ formatDate(article) }}
        </p>
      </Bounded>
    </div>
    <div class="grid grid-cols-3">
      <div class="col-span-2 ">
        <article>
          <SliceZone :slices="article.data.slices" :components="components" />
        </article>
        <Bounded>
          <NuxtLink to="/" class="font-semibold tracking-tight text-slate-400">
            &larr; Back to articles
          </NuxtLink>
        </Bounded>
      </div>
      <div class="col-span-1">
        <Bounded v-if="latestArticles.length">
          <h2>
            Latest articles
          </h2>
          <div class="grid grid-cols-1 gap-8 md:gap-24">
            <HorizontalDivider />
            <div class="w-full">
              <ul class="grid grid-cols-1 gap-8">
                  <ArticleListItem
                  v-for="article in latestArticles"
                  :key="article.id"
                  :article="article"
                  class="border-blogs-bottom"
                />
              </ul>
            </div>
          </div>
        </Bounded>
      </div>
    </div>
  </div>
</template>

<script>
import { components } from '~/slices'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

export default {
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
      
    await store.dispatch('prismic/load')
    store.commit('layout/setWithHeaderProfile', false)
    store.commit('layout/setWithHeaderDivider', false)
    store.commit('layout/setWithFooterSignUpForm', true)
    return {
      article,
      latestArticles
    }
  },
  data () {
    return { components }
  },
  head () {
    return {
      title: `${this.$prismic.asText(this.article.data.title)} | ${this.$prismic.asText(this.$store.state.prismic.settings.data.name)}`
    }
  },
  methods: {
    formatDate (article) {
      const date = this.$prismic.asDate(article.data.publishDate || article.first_publication_date)

      return dateFormatter.format(date)
    }
  }
}
</script>
