<template>
  <div>
    <section class="relative">
      <h2 class="pt-6 text-center">Tren Terkini</h2>
      <BlogsSwiper :articles="articles" />
    </section>
    <BlogsFeaturedwImgBlog :articles="featuredArticles" />
    <!-- <BlogsLatestGrid :articles="articles" /> -->
    <!-- <BlogsCategoryGrid :articles="articles" :categories="categories" /> -->
    <BlogsBlogAndNews :articles="articles" :news="news" />
    <section>
      <div class="container py-12 text-center">
        <h2>Mitra</h2>
        <div class="my-8 flex w-full flex-wrap justify-evenly">
          <div class="m-8 h-20 w-20 rounded-full bg-neutral-500 md:mr-6"></div>
          <div class="m-8 h-20 w-20 rounded-full bg-neutral-500 md:mr-6"></div>
          <div class="m-8 h-20 w-20 rounded-full bg-neutral-500 md:mr-6"></div>
          <div class="m-8 h-20 w-20 rounded-full bg-neutral-500 md:mr-6"></div>
          <div class="m-8 h-20 w-20 rounded-full bg-neutral-500 md:mr-6"></div>
          <div class="m-8 h-20 w-20 rounded-full bg-neutral-500 md:mr-6"></div>
        </div>
      </div>
    </section>
    <section>
      <!-- Contact Form  -->
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, store }) {
    const { results: articles } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "article"),
      {
        orderings: `[${[
          { field: "my.article.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 100,
      }
    );
    const { results: featuredArticles } = await $prismic.api.query(
      $prismic.predicate.at("my.article.featured", true),
      {
        orderings: `[${[
          { field: "my.article.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 9,
      }
    );

    const { results: categories } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "category")
    );
    const { results: news } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "news"),
      {
        orderings: `[${[
          { field: "my.news.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 10,
      }
    );

    await store.dispatch("prismic/load");
    return {
      articles,
      featuredArticles,
      categories,
      news,
    };
  },
  head() {
    return {
      title: this.$prismic.asText(this.$store.state.prismic.settings.data.name),
    };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 749px) {
  .hero-banner {
    /* height: 40vh; */
  }
}
</style>