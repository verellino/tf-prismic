<template>
  <div>
    <div class="container px-4 md:px-12 py-12">
      <div class="grid gird-cols-2 md:grid-cols-3 gap-8">
        
        <!-- Left Category Section -->
        <div class="flex flex-col align-start md:py-10 md:px-4 col-span-2">
          <h2 class="h1 capitalize mb-6">Category</h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 category-grid__ul">
            <ArticleListItemWithImg
              v-for="article in articles.slice(0,4)"
              :key="article.id"
              :article="article"
            />
          </ul>
        </div>
        <!-- Right Section  -->
        <div
          class="flex flex-col justify-start align-start md:py-10 md:px-4 col-span-2 md:col-span-1"
        >
          <h2 class="mb-6">Lorem ipsum</h2>
          <ul>
            <ArticleListItem
              v-for="article in articles.slice(5,8)"
              :key="article.id"
              :article="article"
              class="border-blogs-bottom mb-2"
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
</style>