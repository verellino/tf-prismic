<template>
  <section>
    <!-- <section class="relative">
      <h2 class="pt-6 text-center">Tren Terkini</h2>
      <BlogsSwiper :articles="heroArticles" />
    </section>
    <BlogsAllArticles :articles="articles" /> -->
    <div class="container px-4 py-8">
      <h1 class="section-title pb-8 text-center">Semua Artikel</h1>
      <client-only>
        <ul class="flex flex-col sm:flex-row sm:px-4 sm:pt-4">
          <div class="w-full sm:w-1/3 sm:px-4 sm:pr-8">
            <span class="h3 link_underline section-title">
              Ekonomi
              <span
                ><img
                  src="~assets/images/chevron_right.svg"
                  class="inline-block h-6 chevron-color"
              /></span>
            </span>
            <ArticleCategoryListItem
              v-for="article in articlesEco"
              :key="article.id"
              :article="article"
            />
            <nuxt-link to="/sector/economy" class="text-center text-sm text-gray-500 link_underline">
              Semua artikel Ekonomi &rarr;
            </nuxt-link>
          </div>
          <div class="mt-4 w-full sm:mt-0 sm:w-1/3 sm:px-4 sm:pr-8">
            <span class="h3 link_underline section-title">
              Pemerintahan
              <span
                ><img
                  src="~assets/images/chevron_right.svg"
                  class="inline-block h-6 chevron-color"
              /></span>
            </span>
            <ArticleCategoryListItem
              v-for="article in articlesGov"
              :key="article.id"
              :article="article"
            />
            <nuxt-link to="/sector/government" class="text-center text-sm text-gray-500 link_underline">
              Semua artikel Pemerintahan &rarr;
            </nuxt-link>
          </div>
          <div class="mt-4 w-full sm:mt-0 sm:w-1/3 sm:px-4">
            <span class="h3 link_underline section-title">
              Teknologi
              <span
                ><img
                  src="~assets/images/chevron_right.svg"
                  class="inline-block h-6 chevron-color"
              /></span>
            </span>
            <ArticleCategoryListItem
              v-for="article in articlesTech"
              :key="article.id"
              :article="article"
            />
            <nuxt-link to="/sector/technology" class="text-center text-sm text-gray-500 link_underline">
              Semua artikel Teknologi &rarr;
            </nuxt-link>
          </div>
        </ul>
      </client-only>
    </div>
  </section>
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
        pageSize: 10,
      }
    );
    // const { results: heroArticles } = await $prismic.api.query(
    //   $prismic.predicate.at("my.article.hero-slider", true),
    //   {
    //     orderings: `[${[
    //       { field: "my.article.publishDate", direction: "desc" },
    //       { field: "document.first_publication_date", direction: "desc" },
    //     ]
    //       .map(({ field, direction }) => `${field} ${direction}`)
    //       .join(", ")}]`,
    //     pageSize: 9,
    //   }
    const { results: articlesEco } = await $prismic.api.query(
      $prismic.predicate.at("my.article.section", "Ekonomi"),
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
      $prismic.predicate.at("my.article.section", "Pemerintahan"),
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
      $prismic.predicate.at("my.article.section", "Teknologi"),
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
      articles,
      articlesEco,
      articlesGov,
      articlesTech
    };
  },
  computed: {
    navigation() {
      return this.$store.state.prismic.navigation;
    },
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
};
</script>