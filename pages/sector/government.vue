<template>
  <div>
    <div class="pt-24 text-center">
        <h1>Government</h1>
    </div>
    <BlogsArticleMainGrid :articles="articles" />
    <BlogsFeaturedBlog :articles="articles" />
    <BlogsLatestGrid :articles="articles" />
  </div>
</template>

<script>
import { components } from '~/slices'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'numeric',
  day: 'numeric',
  year: 'numeric'
})

export default {
  async asyncData ({ $prismic, store, params }) {
    const { results: articles } = await $prismic.api.query(
      $prismic.predicate.at('my.article.section', 'Government' ),
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
      articles
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
