<template>
  <div>
    <div class="container px-4 md:px-12 py-12">
      <h2 class="h1 capitalize mb-6 ml-4">Kategori</h2>
      <div class="grid gird-cols-2 md:grid-cols-3 gap-8">
        
        <!-- Left Category Section -->
        <div class="flex flex-col align-start md:px-4 col-span-2 border-blogs-right__desktop">
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 category-grid__ul">
            <ArticleGridItemWithImg
              v-for="article in articles.slice(0,3)"
              :key="article.id"
              :article="article"
            />
          </ul>
        </div>
        <!-- Right Section  -->
        <div
          class="flex flex-col justify-start align-start md:px-4 col-span-2 md:col-span-1"
        >
          <ul>
            <ArticleListItem
              v-for="article in articles.slice(4,8)"
              :key="article.id"
              :article="article"
              class="border-blogs-bottom pb-2 mb-2"
            />
          </ul>
        </div>
      </div>
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
.category-grid__ul li:nth-child(1){
  @apply md:col-span-2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.category-grid__ul li:nth-child(2){
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.category-grid__ul li:nth-child(n+2) .article-img {
  display: none;
}
.category-grid__ul .article-img {
  aspect-ratio: 16/9;
  @apply max-h-64 overflow-hidden pb-10;
}
</style>