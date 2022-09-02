<template>
  <div class="pt-10">
    <div class="pt-24 text-center">
      <h1>{{ articles[0].data.category }}</h1>
    </div>
    <BlogsArticleMainGrid :articles="articles.slice(0, 7)" />
    <BlogsFeaturedBlog :articles="articles.slice(0, 3)" />
    <BlogsLatestGrid :articles="articles" />
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
    await store.dispatch("prismic/load");
    return {
      articles,
    };
  },
  data() {
    return { components };
  },
  head() {
    return {
      title: `${this.articles[0].data.category} | ${this.$store.state.prismic.settings.data.name}`,
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