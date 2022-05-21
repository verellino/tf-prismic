<template>
  <div>
    <div class="container px-4 md:px-auto py-20">
      <div class="grid gird-cols-2 md:grid-cols-3 gap-4">
        <!-- Left Category Section -->
        <div class="flex flex-col justify-center align-start md:p-10 col-span-2">
          <h2 class="h1">Category</h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 category-grid__ul border-blogs-right">
            <ArticleListItemWithImg
              v-for="article in articles"
              :key="article.id"
              :article="article"
            />
          </ul>
        </div>
        <!-- Right Section  -->
        <div
          class="flex flex-col justify-start align-start md:p-10 col-span-2 md:col-span-1"
        >
          <h2>Lorem ipsum</h2>
          <ul>
            <ArticleListItem
              v-for="article in articles"
              :key="article.id"
              :article="article"
              class="border-blogs-bottom"
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