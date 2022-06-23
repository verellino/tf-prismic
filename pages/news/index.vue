<template>
  <div>
    <div class="pt-24 text-center">
        <h1 class="m-0">News</h1>
    </div>
    <BlogsArticleMainGrid :articles="articles.slice(0,7)" />
    <BlogsFeaturedBlog :articles="articles" />
    <BlogsLatestGrid :articles="articles" />
    <BlogsThreeCol :articles="articles" />
    {{section}}
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
  async asyncData ({ $prismic, store}) {
    const { results: articles } = await $prismic.api.query(
      $prismic.predicate.at('document.type', "news"),
      {
        orderings: `[${[
          { field: 'my.news.publishDate', direction: 'desc' },
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
}
</script>
