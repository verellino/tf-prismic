<template>
  <div>
    <div class="pt-24 text-center">
      <h1 class="m-0">Berita</h1>
    </div>
    <client-only>
    <BlogsArticleMainGrid v-if="featuredArticles" :articles="featuredArticles" />
    <BlogsLatestGrid :articles="articles" />
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
    await store.dispatch("prismic/load");
    return {
      articles,
      featuredArticles,
    };
  },
  data() {
    return { components };
  },
};
</script>