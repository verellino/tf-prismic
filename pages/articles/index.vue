<template>
  <div>
      <client-only>
    <section class="relative">
      <h2 class="pt-6 text-center">Tren Terkini</h2>
      <BlogsSwiper :articles="heroArticles" />
    </section>
    <BlogsAllArticles :articles="articles" />
    </client-only>
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
    return {
      articles,
      heroArticles
    };
  },
};
</script>