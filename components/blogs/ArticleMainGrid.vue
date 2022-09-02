<!-- Blogs / Article Main Grid -->
<template>
  <div class="article-main-grid">
    <div class="container px-4 py-12 sm:px-10">
      <ul
        class="article-main-grid__ul grid grid-cols-1 gap-y-8 sm:grid-cols-4 sm:gap-x-4"
      >
        <ArticleGridItemWithImg
          v-for="article in gridArticles"
          :key="article.id"
          class="col-span-4 sm:col-span-2"
          :article="article"
        />
      </ul>
      <hr class="my-4 hidden h-px w-full border-0 bg-gray-300 sm:block" />
      <ul class="mt-4 flex flex-col justify-evenly sm:flex-row">
        <ArticleGridItem
          v-for="article in rowArticles"
          :key="article.id"
          :article="article"
          class="py-4 sm:py-0"
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
      return this.articles.slice(0, 3);
    },
    rowArticles() {
      return this.articles.slice(4, 7);
    },
  },
};
</script>

<style>
.article-main-grid__ul li {
  @apply h-full w-full;
}
.article-main-grid__ul li:nth-child(1) {
  @apply sm:col-span-2 sm:row-span-4 sm:pr-4;
}
.article-main-grid__ul li:nth-child(2) {
  @apply sm:col-span-2 sm:row-span-2;
}
.article-main-grid__ul li:nth-child(3) {
  @apply sm:col-span-2 sm:row-span-2 sm:pt-8;
}
.article-main-grid__ul li:nth-child(n + 2) .article-img {
  display: none;
}
.article-main-grid__ul .article-img {
  aspect-ratio: 16/9;
  @apply max-h-64 overflow-hidden pb-10;
}

@media only screen and (min-width: 768px) {
  .article-main-grid__ul li {
    border-bottom: none;
  }
  .article-main-grid__ul li:nth-child(1) {
    border-right: 1px lightgrey solid;
  }
  .article-main-grid__ul li:nth-child(3) {
    border-top: 1px lightgrey solid;
  }
}
</style>