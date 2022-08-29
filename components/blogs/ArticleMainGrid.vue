<template>
  <div class="article-main-grid">
    <div class="container px-4 py-12 md:px-10">
      <h2 class="mb-6">Artikel Terbaru</h2>
      <ul
        class="article-main-grid__ul grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-x-4"
      >
        <ArticleGridItemWithImg
          v-for="article in gridArticles"
          :key="article.id"
          class="col-span-4 md:col-span-2"
          :article="article"
        />
      </ul>
      <hr class="my-4 h-px w-full border-0 bg-gray-300" />
      <ul class="mt-4 flex flex-col justify-evenly md:flex-row">
        <ArticleGridItem
          v-for="article in rowArticles"
          :key="article.id"
          :article="article"
          class="py-4 md:py-0"
        />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
    limit: 8,
  },
  computed: {
    limitArticles() {
      return this.limit ? this.articles.slice(0, this.limit) : this.articles;
    },
    gridArticles() {
      return this.limit ? this.articles.slice(0, this.limit) : this.articles;
    },
    rowArticles() {
      return this.limit ? this.articles.slice(4, 7) : this.articles;
    },
  },
};
</script>

<style>
.article-main-grid__ul li {
  @apply h-full w-full;
}
.article-main-grid__ul li:nth-child(1) {
  @apply md:col-span-2 md:row-span-4 md:pr-4;
}
.article-main-grid__ul li:nth-child(2) {
  @apply md:col-span-2 md:row-span-2;
}
.article-main-grid__ul li:nth-child(3) {
  @apply md:col-span-2 md:row-span-2 md:pt-8;
  border-top: 1px lightgrey solid;
}
.article-main-grid__ul li:nth-child(n + 2) .article-img {
  display: none;
}
.article-main-grid__ul .article-img {
  aspect-ratio: 16/9;
  @apply max-h-64 overflow-hidden pb-10;
}

@media only screen and (min-width: 768px) {
  .article-main-grid__ul li:nth-child(1) {
    border-right: 1px lightgrey solid;
  }
}
</style>