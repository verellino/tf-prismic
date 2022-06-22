<template>
  <div class="featured-blogs">
    <div class="container px-4 md:px-10 py-12">
      <h2 class="h1 mb-6">Featured Articles</h2>
      <ul class="grid grid-cols-12 gap-y-8 md:gap-y-1 md:gap-x-1">
        <li v-for="article in limitArticles" :key="article.id" class="col-span-12 md:col-span-4">
          <ArticleListItemWithImg :article="article" />
        </li>
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
    },
    limit: 8
  },
  computed:{
    limitArticles(){
      return this.limit ? this.articles.slice(0,this.limit) : this.articles
    }
  }
}
</script>

<style>
.featured-grid__ul li{
  @apply w-full h-full col-span-1 md:col-span-4;
}
.featured-grid__ul li:nth-child(n+7) .article-img {
  display: none;
}
.featured-grid__ul li:nth-child(n+7) .excerpt {
  display: none;
}
.featured-grid__ul li:nth-child(n+7) .blog-card {
  @apply w-full;
}

.featured-grid__ul li:nth-child(n+7) {
  @apply w-full h-full col-span-1 md:col-span-3 md:row-span-1;
}
</style>
