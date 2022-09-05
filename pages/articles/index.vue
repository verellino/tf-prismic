<template>
  <div>
    <section class="relative">
      <h2 class="pt-6 text-center">Tren Terkini</h2>
      <BlogsSwiper :articles="articles" />
    </section>
    <BlogsAllArticles :articles="articles" />
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
    return {
      articles
    };
  }
};
</script>