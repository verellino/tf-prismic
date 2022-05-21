<template>
  <div class="featured-blogs">
    <div class="container px-4 md:px-auto py-20">
      <h2 class="h1">Featured Articles</h2>
      <ul class="grid grid-cols-1 md:grid-cols-4 gap-4 featured-grid__ul">
        <ArticleListItemWithImg
          v-for="article in articles"
          :key="article.id"
          :article="article"
          class="border-blogs-bottom"
        />
        <ArticleListItem
          v-for="article in articles"
          :key="article.id"
          :article="article"
          class="border-blogs-bottom"
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
    }
  }
}
</script>

<style>
.featured-grid__ul li:nth-child(1) {
  @apply w-full h-full col-span-1 md:col-span-2 md:row-span-2;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.featured-grid__ul li:nth-child(2) {
  @apply w-full h-full col-span-1 md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.featured-grid__ul li:nth-child(3) {
  @apply w-full h-full col-span-1 md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.featured-grid__ul li:nth-child(n+2) .article-img {
  display: none;
}
.featured-grid__ul li:nth-child(n+4) {
  @apply w-full h-full col-span-1 md:row-span-1;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
