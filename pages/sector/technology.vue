<template>
  <div>
    <div class="pt-24 text-center">
        <h1>Technology</h1>
    </div>
    <client-only>
    <BlogsArticleMainGrid :articles="articles.slice(0,7)" />
    <BlogsFeaturedBlog :articles="articles" />
    <BlogsLatestGrid :articles="articles" />
    </client-only>
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
    const { results: articles } = await $prismic.api.query(
      $prismic.predicate.at('my.article.section', 'Technology' ),
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
      title: `${this.articles.section} | Innovating Indonesia`
    }
  },
}
</script>
