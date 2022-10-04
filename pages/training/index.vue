<template>
  <div>
    <div class="pt-24 text-center">
      <h1 class="section-title m-0">Training</h1>
    </div>
    <client-only>
      <TrainingGrid :articles="articles" />
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
      $prismic.predicate.at("document.type", "training"),
      {
        orderings: `[${[
          { field: "my.training.publishDate", direction: "desc" },
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
};
</script>
