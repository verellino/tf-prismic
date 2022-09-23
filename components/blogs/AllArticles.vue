<!-- Blogs / Category Grid -->
<template>
  <div>
    <div class="container px-4 py-12 md:px-10">
      <h2 class="mb-6 ml-4 capitalize section-title">Semua Artikel</h2>
      <div>
        <ul class="all-articles-grid__ul grid grid-cols-1 gap-4 sm:grid-cols-3">
          <ArticleGridItemWithImg
            v-for="article in articles"
            :key="article.id"
            :article="article"
            class="col-span-1"
          />
        </ul>
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
.all-articles-grid__ul li:nth-child(1) {
  @apply sm:col-span-2;
}
.all-articles-grid__ul li:nth-child(n + 3) .article-img {
  display: none;
}
.all-articles-grid__ul li {
  @apply sm:p-4;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.all-articles-grid__ul .article-img {
  aspect-ratio: 16/9;
  @apply max-h-64 overflow-hidden;
}
</style>