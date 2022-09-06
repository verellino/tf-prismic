<template>
  <div>
    <section class="relative">
      <h2 class="pt-6 text-center">Tren Terkini</h2>
      <BlogsSwiper :articles="heroArticles" />
    </section>
    <BlogsFeaturedwImgBlog :articles="featuredArticles" />
    <!-- <BlogsCategoryGrid :articles="articles" :categories="categories" /> -->
    <BlogsBlogAndNews :articles="articles.slice(0,10)" :news="news" />
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
          .join(", ")}]`
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
        pageSize: 7,
      }
    );
    const { results: heroArticles } = await $prismic.api.query(
      $prismic.predicate.at("my.article.hero-slider", true),
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
      heroArticles,
      categories,
      news
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