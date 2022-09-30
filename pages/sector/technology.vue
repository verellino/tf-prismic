<template>
  <div>
    <div class="pt-24 text-center section-title">
        <h1>Teknologi</h1>
    </div>
     <div>
    <client-only>
      <div class="container px-4 py-8 md:px-10">
        <div class="gird-cols-2 grid gap-8 md:grid-cols-3">
          <!-- Left Category Section -->
          <div
            class="align-start border-blogs-right__desktop col-span-2 flex flex-col sm:pr-8"
          >
            <h2 class="section-title mb-6">Artikel Terbaru</h2>
            <div v-for="(cat, key) in categories" class="my-4">
              <h3 class="mb-4 section-title">{{key}}</h3>
              <ul
                class="tech_terbaru-grid__ul grid grid-cols-1 gap-8 sm:grid-cols-2"
              >
                <ArticleGridItemWithImg
                  v-for="article in cat"
                  :key="article.id"
                  :article="article"
                />
              </ul>
            </div>
          </div>
          <!-- Right Section  -->
          <div
            class="align-start col-span-2 flex flex-col justify-start md:col-span-1"
          >
            <h2 class="section-title">Berita Terbaru</h2>
            <ul class="">
              <ArticleBeritaListItem
                v-for="article in news"
                :key="article.id"
                :article="article"
              />
            </ul>
          </div>
        </div>
      </div>
    </client-only>
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
    const { results: articles } = await $prismic.api.query(
      $prismic.predicate.at('my.article.section', 'Teknologi' ),
      {
        orderings: `[${[
          { field: 'my.article.publishDate', direction: 'desc' },
          { field: 'document.first_publication_date', direction: 'desc' }
        ].map(({ field, direction }) => `${field} ${direction}`).join(', ')}]`,
        pageSize: 100
      }
    )

    let categories = articles.reduce((r, a) => {
    r[a.data.category] = [...r[a.data.category] || [], a];
    return r;
    }, {});
    const { results: news } = await $prismic.api.query(
      $prismic.predicate.at("my.news.section", "Teknologi"),
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
      news,
      categories
    }
  },
  methods: {
    getCategoryTitle: function(c) { 
      return Object.keys(c)
    }
  },
  data () {
    return { components }
  },
  head () {
    return {
      title: `Sektor Teknologi | Innovating Indonesia`
    }
  },
}
</script>

<style scoped>
.tech_terbaru-grid__ul .article-img {
  aspect-ratio: 16/9;
  @apply max-h-64 overflow-hidden;
}
.tech_terbaru-grid__ul li:first-child {
  @apply col-span-2
}
.tech_terbaru-grid__ul li:nth-child(odd) {
  border-right: none;
}
.tech_terbaru-grid__ul li:nth-child(n + 2) .article-img {
  display: none;
}
</style>