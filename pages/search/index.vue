<template>
  <main class="container pt-8 col-start-2 col-end-12 px-4 sm:px-10">
    <h1 class="section-title text-center">Pencarian</h1>
    <client-only>
    <div class="mb-16 mt-8 Search">
      <h2 class="h3">
        Hasil untuk:
        {{searchterm}}
      </h2>
      <div class="w-1/12 mt-2 border-b-4 border-red-800"></div>
    </div>
 
    <div v-if="result.length > 0" class="grid grid-cols-12 row-gap-16 md:col-gap-16">
      <ul v-for="article in result" :key="article.id" class="col-span-12 md:col-span-4">
        <ArticleGridItemWithImg :article="article" />
      </ul>
 
      <!-- <div class="flex col-span-12 mt-16 loadmore">
        <button
          class="px-8 py-2 mx-auto text-lg text-center border-2 border-black border-solid cursor-pointer dark-mode:border-white hover:border-accent-dark"
          @click="loadMoreResults()"
          v-if="result.length % 9 === 0 && !nonewposts"
        >Load more results</button>
      </div> -->
    </div>
 
    <div v-else class="text-xl font-semibold">Maaf, tidak menemukan artikel dengan kata: {{searchterm}}</div>
 
    <div class="w-2/3 mx-auto my-16 md:w-1/2 searchform">
      <div class="mb-4">
        <div class="text-2xl">Ulangi pencarian</div>
        <div class="w-1/12 mt-2 border-b-4 border-red-800"></div>
      </div>
      <GlobalsSearchForm :currentinput="searchterm" />
    </div>
    </client-only>
  </main>
</template>
 
<script>
 
export default {
  name: 'Search',
  data() {
    return {
      currentpage: 1,
      nonewposts: false
    }
  },
  async asyncData({ $prismic, store, error, query }) {
      // Query for keyword
      const searchresult = await $prismic.api.query(
        [
          $prismic.predicates.at('document.type', 'article'),
          $prismic.predicates.fulltext('document', query.search)
        ],
        { orderings: '[document.first_publication_date desc]', pageSize: 9 }
      )
 
      // Returns data to be used in template
      await store.dispatch("prismic/load");
      return {
        result: searchresult.results,
        searchterm: query.search
      }
  },
  methods: {
    // async loadMoreResults() {
    //   try {
    //     // Query other page for search
    //     const searchresult = await this.$prismic.api.query(
    //       [
    //         this.$prismic.predicates.at('document.type', 'article'),
    //         this.$prismic.predicates.fulltext('document', this.searchterm)
    //       ],
    //       {
    //         orderings: '[document.first_publication_date desc]',
    //         pageSize: 9,
    //         page: this.currentpage + 1
    //       }
    //     )
 
    //     if (searchresult.results.length > 0) {
    //       // Merge with the other posts
    //       this.result = this.result.concat(searchresult.results)
    //     } else {
    //       // No more new posts
    //       this.nonewposts = true
    //     }
 
    //     // Save current page
    //     this.currentpage++
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }
  }
}
</script>