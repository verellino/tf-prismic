<!-- Blogs / More Blogs -->
<template>
  <div class="featured-blogs">
    <div class="container py-12">
      <h2 class="text-center text-serif section-title">Baca artikel selanjutnya</h2>
      <ul class="flex flex-col p-8 md:flex-row justify-evenly">
        <ArticleGridItemWithImg
          v-for="article in articles.slice(0, 3)"
          :key="article.id"
          :article="article"
          class="sm:w-1/3 sm:pr-8"
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
