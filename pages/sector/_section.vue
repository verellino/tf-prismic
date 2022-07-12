<template>
  <div>
    <h1 class="text-center">{{ articles.section }}</h1>
    <BlogsArticleMainGrid :articles="articles.slice(0,7)" />
    <BlogsFeaturedBlog :articles="articles" />
    <BlogsLatestGrid :articles="articles" />
    <BlogsThreeCol :articles="articles" />
    {{section}}
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
    const section = params.section
    const { results: articles } = await $prismic.api.query(
      $prismic.predicate.at('my.article.section', params.section ),
      {
        orderings: `[${[
          { field: 'my.article.publishDate', direction: 'desc' },
          { field: 'document.first_publication_date', direction: 'desc' }
        ].map(({ field, direction }) => `${field} ${direction}`).join(', ')}]`,
        pageSize: 100
      }
    )
    await store.dispatch('prismic/load')
    return {
      articles, section
    }
  },
  data () {
    return { components }
  },
  head () {
    return {
      title: `${this.articles.section} | ${this.$prismic.asText(this.$store.state.prismic.settings.data.name)}`
    }
  },
}
</script>
