<template>
  <div>
    <section class="relative pt-20">
      <BlogsSwiper :articles="heroArticles" />
    </section>
    <BlogsHomeBlogAndNews :articles="articles.slice(0, 10)" :news="news" :events="events" :programs="programs" />
    <!-- <BlogsFeaturedwImgBlog :articles="featuredArticles" /> -->
    <!-- <BlogsCategoryGrid :articles="articles" :categories="categories" /> -->
    <HomeSectionsFeaturedBlogs :articles="featuredArticles" />
    <HomeSectionsCategoryThreeCol
      :articlesEco="articlesEco.slice(0, 4)"
      :articlesGov="articlesGov.slice(0, 4)"
      :articlesTech="articlesTech.slice(0, 4)"
    />
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
    const { results: articlesEco } = await $prismic.api.query(
      $prismic.predicate.at("my.article.section", "Ekonomi"),
      {
        orderings: `[${[
          { field: "my.article.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 4,
      }
    );
    const { results: articlesGov } = await $prismic.api.query(
      $prismic.predicate.at("my.article.section", "Pemerintahan"),
      {
        orderings: `[${[
          { field: "my.article.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 4,
      }
    );
    const { results: articlesTech } = await $prismic.api.query(
      $prismic.predicate.at("my.article.section", "Teknologi"),
      {
        orderings: `[${[
          { field: "my.article.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 4,
      }
    );
    const { results: events } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "events"),
      {
        orderings: `[${[
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 8,
      }
    );
    const { results: programs } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "training"),
      {
        orderings: `[${[
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 8,
      }
    );
    await store.dispatch("prismic/load");
    return {
      articles,
      featuredArticles,
      heroArticles,
      categories,
      news,
      articlesEco,
      articlesGov,
      articlesTech,
      events,
      programs
    };
  },
  head() {
    return {
      title: "Innovating Indonesia",
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