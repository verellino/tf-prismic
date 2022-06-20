<template>
  <div>
    <div class="container px-4 md:px-10 py-12">
      <ul class="grid grid-cols-1 md:grid-cols-12 gap-8 featured-grid__ul">
        <ArticleListItemWithImg
          v-for="article in limitArticles"
          :key="article.id"
          :article="article"
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
