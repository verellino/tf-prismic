<template>
  <div>
    <div class="pt-8 text-center">
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
    const { results: articlesEco } = await $prismic.api.query(
      $prismic.predicate.at("my.news.section", "Ekonomi"),
      {
        orderings: `[${[
          { field: "my.article.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 10,
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
        pageSize: 10,
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
        pageSize: 10,
      }
    );
    await store.dispatch("prismic/load");
    return {
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