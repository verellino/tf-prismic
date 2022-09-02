<!-- Blogs / More Blogs -->
<template>
  <div class="featured-blogs">
    <div class="container py-12">
      <h2 class="text-center">Baca artikel selanjutnya</h2>
      <ul class="flex flex-col p-8 md:flex-row">
        <ArticleGridItem
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
  },
};
</script>
