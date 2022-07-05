<template>
  <div class="featured-blogs">
    <div class="container px-4 md:px-10 py-12">
      <h2 class="h1 mb-6">Featured Articles</h2>
      <ul class="grid grid-cols-4 gap-y-8 md:gap-x-4 featured-grid__ul">
        <ArticleGridItemWithImg v-for="article in gridArticles" :key="article.id" class="md:col-span-2 col-span-4" :article="article" />  
      </ul>
      <hr class="my-4 w-full h-px border-0 bg-slate-100">
      <ul class="mt-4 flex justify-evenly">
        <ArticleGridItemWithImg v-for="article in rowArticles" :key="article.id" :article="article" />  
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      limit: 3,
    }
  },
  computed:{
    gridArticles(){
      return this.limit ? this.articles.slice(0,this.limit) : this.articles
    },
    rowArticles(){
      return this.limit ? this.articles.slice(4,7) : this.articles
    }
}
}
</script>

<style>
.featured-grid__ul li{
  @apply w-full h-full;
}
.featured-grid__ul li:nth-child(1) {
  @apply col-span-2 row-span-4 pr-4;
  border-right: 1px white solid;
}
.featured-grid__ul li:nth-child(2) {
  @apply col-span-2 row-span-2;
}
.featured-grid__ul li:nth-child(3) {
  @apply col-span-2 row-span-2 pt-8;
  border-top: 1px white solid;
}
.featured-grid__ul li:nth-child(n+2) .article-img {
  display: none;
}
.featured-grid__ul .article-img {
  aspect-ratio: 16/9;
  @apply max-h-64 overflow-hidden pb-10;
}
</style>
