<!-- Blogs / Category Grid -->
<template>
  <div>
    <client-only>
      <div class="container px-4 py-8 md:px-10">
        <div class="gird-cols-2 grid gap-8 md:grid-cols-3">
          <!-- Left Category Section -->
          <div
            class="align-start border-blogs-right__desktop col-span-2 flex flex-col sm:pr-8"
          >
            <!-- <h2 class="section-title mb-6">Artikel Terbaru</h2> -->
            <ul v-if="articles"
              class="artikel_terbaru-grid__ul grid grid-cols-1 gap-8 sm:grid-cols-2 mt-2"
            >
              <ArticleGridItemNoImg
                v-for="article in articles"
                :key="article.id"
                :article="article"
              />
            </ul>
            <ul v-else>
              <p>Kontent belum tersedia.</p>
            </ul>
            <!-- <div class="col-span-2 mt-8 text-center">
              <nuxt-link to="/articles" class="link_underline text-sm"
                >Lihat semua artikel...</nuxt-link
              >
            </div> -->
          </div>
          <!-- Right Section  -->
          <div
            class="align-start col-span-2 flex flex-col justify-start md:col-span-1"
          >
            <h2 class="section-title">Berita Terbaru</h2>
            <ul v-if="news">
              <ArticleBeritaListItem
                v-for="article in news"
                :key="article.id"
                :article="article"
              />
            </ul>
            <ul v-else>
              <p>Kontent belum tersedia.</p>
            </ul>
          </div>
        </div>
      </div>
    </client-only>
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
    }
  },
};
</script>

<style>
/* .artikel_terbaru-grid__ul li:nth-child(1) {
  @apply md:col-span-2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
} */
.artikel_terbaru-grid__ul .article-img {
  aspect-ratio: 16/9;
  @apply max-h-64 overflow-hidden;
}
.artikel_terbaru-grid__ul li:nth-child(odd) {
  border-right: none;
}
.artikel_terbaru-grid__ul li:nth-child(n + 3) .article-img {
  display: none;
}
</style>