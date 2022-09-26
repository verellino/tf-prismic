<template>
  <div>
    <div class="pt-24 text-center">
      <h1 class="m-0 section-title">Berita</h1>
    </div>
    <client-only>
      <BlogsNewsThreeCol
        :articlesEco="articlesEco"
        :articlesGov="articlesGov"
        :articlesTech="articlesTech"
      />
    </client-only>
  </div>
</template>

<script>
import { components } from "~/slices";

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default {
  async asyncData({ $prismic, store }) {
    const { results: articles } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "news"),
      {
        orderings: `[${[
          { field: "my.news.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 100,
      }
    );

    const { results: featuredArticles } = await $prismic.api.query(
      $prismic.predicate.at("my.news.featured", true),
      {
        orderings: `[${[
          { field: "my.news.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 7,
      }
    );
    const { results: articlesEco } = await $prismic.api.query(
      $prismic.predicate.at("my.news.section", "Ekonomi"),
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
      $prismic.predicate.at("my.news.section", "Pemerintahan"),
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
      $prismic.predicate.at("my.news.section", "Teknologi"),
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
    await store.dispatch("prismic/load");
    return {
      articles,
      featuredArticles,
      articlesEco,
      articlesGov,
      articlesTech,
    };
  },
  data() {
    return { components };
  },
};
</script>