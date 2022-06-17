<template>
  <div class="pt-20">
    <div>
      <Bounded class="pb-0 text-center">
        <p class="blue-primary mb-2 uppercase font-semibold">
          {{ article.data.section }}
        </p>
        <h1 class="mb-3 font-semibold text-slate-800 sm:text-2xl">
          {{article.data.title}}
        </h1>
        <p class="blog-details-span">
          {{ formattedDate }}
        </p>
      </Bounded>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3">
      <div class="col-span-1 sm:col-span-2">
        <article>
          <SliceZone :slices="article.data.slices" :components="components" />
        </article>
        <Bounded>
          <NuxtLink to="/" class="font-semibold tracking-tight text-slate-400">
            &larr; Back to articles
          </NuxtLink>
        </Bounded>
      </div>
      <!-- Right Blogs Section  -->
      <div class="col-span-1">
        <Bounded v-if="latestArticles.length">
          <div>
            <div class="w-full">
              <h2 class="pl-10">
                Latest articles
              </h2>
              <ul class="grid grid-cols-1 gap-y-2">
                  <BlogArticleListItem
                  v-for="article in latestArticles"
                  :key="article.id"
                  :article="article"
                />
              </ul>
            </div>
            <HorizontalDivider class="w-full" />
            <div class="w-full mt-6">
              <h3 class="pl-10 blue-primary ">
                {{ article.data.category }}
              </h3>
              <ul class="grid grid-cols-1 gap-2">
                  <BlogArticleListItem
                  v-for="article in categoryPosts"
                  :key="article.id"
                  :article="article"
                />
              </ul>
            </div>
          </div>
        </Bounded>
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

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'numeric',
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

    const { results: categoryPosts } = await $prismic.api.query([
      $prismic.predicates.at("my.article.categories", categoryId)
    ])
      
    await store.dispatch('prismic/load')
    store.commit('layout/setWithHeaderProfile', false)
    store.commit('layout/setWithHeaderDivider', false)
    store.commit('layout/setWithFooterSignUpForm', true)
    return {
      article,
      latestArticles,
      similarArticles,
      categoryPosts
    }
  },
  data () {
    return { components }
  },
  head () {
    return {
      title: `${this.article.data.title} | ${this.$store.state.prismic.settings.data.name}`
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
