<template>
  <div class="pt-32">
    <div class="pt-24 text-center">
        <h1></h1>
    </div>
    <BlogsArticleMainGrid :articles="articles.slice(0,7)" />
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
      $prismic.predicate.at('my.article.categories', params.id ),
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
      // title: `${this.article.data.title} | ${this.$store.state.prismic.settings.data.name}`
    }
  },
  computed: {
    formattedDate () {
      // const date = this.$prismic.asDate(this.article.data.publishDate || this.article.first_publication_date)

      // return dateFormatter.format(date)
    }
  },

}
</script>
