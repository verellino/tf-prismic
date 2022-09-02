<!-- Blogs / Latest Grid -->
<template>
  <div class="border-b-2 border-gray-200">
    <div class="container px-4 py-12 md:px-10">
      <h2 class="mb-4 text-center">Artikel Terbaru</h2>
      <ul class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <ArticleLatestArticleGridItem
          v-for="article in articles.slice(0, 3)"
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
      required: true,
    },
    limit: 3,
  },
};
</script>
