<!-- Blogs / Category Grid -->
<template>
  <div>
    <div class="container px-4 py-12 md:px-10">
      <h2 class="h1 mb-6 ml-4 capitalize">Kategori</h2>
      <!-- <div class="flex justify-start space-x-2 p-4">
        <ul v-for="cat in categories">
          <button @click="toggle($event)" class="uppercase mr-2 inline-block py-1 px-2 rounded-md active:font-semibold active:border-blue-100  active:bg-blue-50 hover:bg-blue-100 transition duration-200 text-xxs font-medium tracking-wide;">
            {{cat.uid}}
          </button>
        </ul>
      </div> -->
      <div class="gird-cols-2 grid gap-8 md:grid-cols-3">
        <!-- Left Category Section -->
        <div
          class="align-start border-blogs-right__desktop col-span-2 flex flex-col md:px-4"
        >
          <ul class="category-grid__ul grid grid-cols-1 gap-8 md:grid-cols-2">
            <ArticleGridItemWithImg
              v-for="article in articles.slice(0, 3)"
              :key="article.id"
              :article="article"
            />
          </ul>
        </div>
        <!-- Right Section  -->
        <div
          class="align-start col-span-2 flex flex-col justify-start md:col-span-1 md:px-4"
        >
          <ul>
            <ArticleListItem
              v-for="article in articles.slice(4, 8)"
              :key="article.id"
              :article="article"
              class="border-blogs-bottom mb-2 pb-2"
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
      required: true,
    },
    categories: {
      type: Array,
    },
  },
};
</script>

<style>
.category-grid__ul li:nth-child(1) {
  @apply md:col-span-2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.category-grid__ul li:nth-child(2) {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.category-grid__ul li:nth-child(n + 2) .article-img {
  display: none;
}
.category-grid__ul .article-img {
  aspect-ratio: 16/9;
  @apply max-h-64 overflow-hidden pb-10;
}
</style>
