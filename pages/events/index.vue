<template>
  <div>
    <div class="pt-24 text-center">
      <h1 class="section-title m-0">Events</h1>
    </div>
    <client-only>
      <EventsEventGrid :articles="articles" />
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
      $prismic.predicate.at("document.type", "events"),
      {
        orderings: `[${[
          { field: "my.events.publishDate", direction: "desc" },
          { field: "document.first_publication_date", direction: "desc" },
        ]
          .map(({ field, direction }) => `${field} ${direction}`)
          .join(", ")}]`,
        pageSize: 100,
      }
    );
    return {
      articles,
    };
  },
  data() {
    return { components };
  },
};
</script>