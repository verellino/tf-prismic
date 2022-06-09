<template>
  <div>
    <div class="container px-4 md:px-auto">
      <div class="grid gird-cols-2 md:grid-cols-3 gap-4">
        <!-- Left Category Section -->
        <div class="flex flex-col align-start md:py-10 md:px-4 col-span-3">
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 category-grid__ul">
            <ArticleListItemWithImg
              v-for="article in articles.slice(0,4)"
              :key="article.id"
              :article="article"
            />
          </ul>
        </div>
        <!-- Right Section  -->
        <div class="flex flex-col align-start md:py-10 md:px-4 col-span-3">
          <ul class="flex">
            <ArticleGridItem
              v-for="article in articles.slice(0,3)"
              :key="article.id"
              :article="article"
              class="col-span-1"
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

<style scoped>
.category-grid__ul li:nth-child(1) {
  @apply flex flex-col justify-center p-10 col-span-1 md:col-span-2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.category-grid__ul li:nth-child(2) {
  @apply flex flex-col justify-center p-10 col-span-1;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.category-grid__ul li:nth-child(3) {
  @apply flex flex-col justify-center p-10 col-span-1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.category-grid__ul li:nth-child(4) {
  @apply flex flex-col justify-center p-10 col-span-1 md:col-span-2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>