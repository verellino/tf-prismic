<template>
  <div class="border-b-2  border-gray-200">
    <div class="container px-4 md:px-10 py-12">
      <h2 class="text-center  mb-4">Artikel Terbaru</h2>
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ArticleLatestArticleGridItem
          v-for="article in articles.slice(0,3)"
          :key="article.id"
          :article="article"
          class="col-span-1"
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
    limit: 3
  }
}
</script>