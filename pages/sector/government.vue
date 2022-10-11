<template>
  <div>
    <div class="pt-8 text-center section-title">
        <h1>Pemerintahan</h1>
    </div>
     <client-only>
      <BlogsBlogAndNews :articles="articles" :news="news" />
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
      $prismic.predicate.at('my.article.section', 'Pemerintahan' ),
      {
        orderings: `[${[
          { field: 'my.article.publishDate', direction: 'desc' },
          { field: 'document.first_publication_date', direction: 'desc' }
        ].map(({ field, direction }) => `${field} ${direction}`).join(', ')}]`,
        pageSize: 100
      }
    )
    const { results: news } = await $prismic.api.query(
      $prismic.predicate.at("my.news.section", "Pemerintahan"),
      {
        orderings: `[${[
          { field: "my.article.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`
      }
    );
    await store.dispatch('prismic/load')
    return {
      articles,
      news
    }
  },
  data () {
    return { components }
  },
  head () {
    return {
      title: `Sektor Pemerintahan | Innovating Indonesia`
    }
  },
}
</script>
