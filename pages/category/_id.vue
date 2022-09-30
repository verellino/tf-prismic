<template>
  <div class="pt-24">
    <div class="section-title text-center">
      <h1>{{ articles[0].data.category }}</h1>
    </div>
    <client-only>
      <BlogsBlogAndNews :articles="articles" :news=:"news" />
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
  async asyncData({ $prismic, store, params }) {
    const { results: articles } = await $prismic.api.query(
      $prismic.predicate.at("my.article.categories", params.id),
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
    const { results: news } = await $prismic.api.query(
      $prismic.predicate.at("my.news.category", params.id),
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
    console.log(params.id)
    await store.dispatch("prismic/load");
    return {
      articles,
      news
    };
  },
  data() {
    return { components };
  },
  head() {
    return {
      title: `${this.articles[0].data.category} | Innovating Indonesia`,
    };
  },
  computed: {
    formattedDate() {
      // const date = this.$prismic.asDate(this.article.data.publishDate || this.article.first_publication_date)
      // return dateFormatter.format(date)
    },
  },
};
</script>