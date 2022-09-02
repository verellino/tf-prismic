<!-- Blogs / Featured w/ Img Blog -->
<template>
  <div class="featured-blogs">
    <div class="container px-4 py-12 md:px-10">
      <h2 class="h1 mb-6">Artikel Unggulan</h2>
      <ul
        class="featured-grid__ul grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-x-4"
      >
        <ArticleGridItemWithImg
          v-for="article in gridArticles"
          :key="article.id"
          class="col-span-4 md:col-span-2"
          :article="article"
        />
      </ul>
      <hr class="my-4 h-px w-full border-0 bg-slate-100" />
      <ul class="mt-4 flex flex-col justify-start md:flex-row">
        <ArticleGridItemWithImg
          v-for="article in rowArticles"
          :key="article.id"
          :article="article"
          class="featured-grid__ul-row py-4 sm:w-1/4 sm:py-0"
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
  },
  data() {
    return {
      limit: 3,
    };
  },
  computed: {
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
.featured-grid__ul li {
  @apply h-full w-full;
}
.featured-grid__ul li:nth-child(1) {
  @apply md:col-span-2 md:row-span-4 md:pr-4;
}
.featured-grid__ul li:nth-child(2) {
  @apply md:col-span-2 md:row-span-2;
}
.featured-grid__ul li:nth-child(3) {
  @apply md:col-span-2 md:row-span-2 md:pt-8;
  border-top: 1px white solid;
}
.featured-grid__ul li:nth-child(n + 2) .article-img {
  display: none;
}
.featured-grid__ul .article-img {
  aspect-ratio: 16/9;
  @apply max-h-64 overflow-hidden pb-10;
}

@media only screen and (min-width: 768px) {
  .featured-grid__ul li:nth-child(1) {
    border-right: 1px white solid;
  }
  featured-grid__ul-row .excerpt {
    font-size: 12px;
  }
}
</style>