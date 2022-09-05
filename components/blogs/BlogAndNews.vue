<!-- Blogs / Category Grid -->
<template>
  <div>
    <div class="container px-4 py-12 md:px-10">
      <div class="gird-cols-2 grid gap-8 md:grid-cols-3">
        <!-- Left Category Section -->
        <div
          class="align-start border-blogs-right__desktop col-span-2 flex flex-col md:px-4"
        >
          <h2 class="h1 col-span-2 mb-4 capitalize">Artikel Terbaru</h2>
          <ul
            class="artikel_terbaru-grid__ul grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            <ArticleGridItemWithImg
              v-for="article in articles"
              :key="article.id"
              :article="article"
            />
          </ul>
          <nuxt-link to="/articles" class="col-span-2 mt-4 text-center text-sm">Lihat semua artikel...</nuxt-link>
        </div>
        <!-- Right Section  -->
        <div
          class="align-start col-span-2 flex flex-col justify-start md:col-span-1"
        >
          <h2 class="mb-6 sm:pl-4 capitalize">Berita Terbaru</h2>
          <ul class="sm:px-4 rounded-md bg-gray-100 border-x border-y border-slate-200">
            <ArticleListItem
              v-for="article in news"
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
    news: {
      type: Array,
    },
  },
};
</script>

<style>
.artikel_terbaru-grid__ul li:nth-child(1) {
  @apply md:col-span-2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.artikel_terbaru-grid__ul li:nth-child(4) {
  @apply md:col-span-2;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.artikel_terbaru-grid__ul li:nth-child(7) {
  @apply md:col-span-2;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.artikel_terbaru-grid__ul li:nth-child(10) {
  @apply md:col-span-2;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.artikel_terbaru-grid__ul li:nth-child(2) {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.artikel_terbaru-grid__ul .article-img {
  aspect-ratio: 16/9;
  @apply max-h-64 overflow-hidden;
}
</style>