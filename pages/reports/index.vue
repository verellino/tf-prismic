<template>
  <section>
    <!-- <section class="relative">
      <h2 class="pt-6 text-center">Tren Terkini</h2>
      <BlogsSwiper :articles="heroArticles" />
    </section>
    <BlogsAllArticles :articles="articles" /> -->
    <div class="container px-4 py-8">
      <h1 class="section-title pb-8 text-center">Semua Laporan</h1>
        <!-- <client-only v-if="reports">
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
                v-for="article in reportEco"
                :key="article.id"
                :article="article"
                />
                <nuxt-link to="/sector/economy" class="text-center text-sm text-gray-500 link_underline">
                Semua report Ekonomi &rarr;
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
                v-for="article in reportGov"
                :key="article.id"
                :article="article"
                />
                <nuxt-link to="/sector/government" class="text-center text-sm text-gray-500 link_underline">
                Semua report Pemerintahan &rarr;
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
                v-for="article in reportTech"
                :key="article.id"
                :article="article"
                />
                <nuxt-link to="/sector/teknologi" class="text-center text-sm text-gray-500 link_underline">
                Semua report Teknologi &rarr;
                </nuxt-link>
            </div>
            </ul>
        </client-only> -->
        <div class="flex h-full justify-center items-center">
            <span class="text-center">Laman ini belum memiliki konten</span>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $prismic, store }) {
    try {
        const { results: reports } = await $prismic.api.query(
        $prismic.predicate.at("document.type", "report"),
        {
            orderings: `[${[
            { field: "my.article.publishDate", direction: "desc" },
            { field: "document.first_publication_date", direction: "desc" },
            ]
            .map(({ field, direction }) => `${field} ${direction}`)
            .join(", ")}]`,
        }
        )
        const { results: reportEco } = await $prismic.api.query(
        $prismic.predicate.at("my.report.section", "Economy"),
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
        const { results: reportGov } = await $prismic.api.query(
        $prismic.predicate.at("my.report.section", "Government"),
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
        const { results: reportTech } = await $prismic.api.query(
        $prismic.predicate.at("my.report.section", "Technology"),
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
        reports,
        reportEco,
        reportGov,
        reportTech
        };
    } catch(e) {
        // do something with `e` here...
        console.log(error)
        // then rethrow error
        throw e
    }
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