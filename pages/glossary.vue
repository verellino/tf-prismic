<template>
  <div class="pt-20 glossary-section">
    <div class="container py-12 text-center">
      <h1 class="section-title">Glossary</h1>
    </div>
    <div class="mx-auto flex items-start">
      <div class="w-1/4 p-8 pt-0">
        <h2 class="h4 uppercase font-semibold">Section</h2>
        <div v-for="g in glossary" :key="g.id">
            <a :href="`#${g.uid}`" class="hover:underline hover:underline-offset-2">
              <span class="mb-4 text-sm">{{ g.data.title }}</span>
            </a>
          </div>
      </div>
      <!-- Right Column -->
      <div class="w-2/3">
        <!-- Glossary Grid by Letter -->
        <div>
          <div v-for="g in glossary" :key="g.id" class="glossary-item pb-8">
            <h3 class="h4 mb-2 pt-4 -mt-4" :id="g.uid">{{ g.data.title }}</h3>
            <p class="text-sm">{{ $prismic.asText(g.data.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    const { results: glossary } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "glossary"),
      { orderings: "[my.glossary.title]" }
    );
    const titles = glossary.map((obj) => obj.data.title);
    const desc = glossary.map((obj) => obj.data.description);
    function convertToSlug(Text) {
      return Text.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }
    const getSections = titles.reduce((acc, word) => {
      let firstLetter = word[0].toLocaleUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = {
          title: firstLetter,
          data: [word],
          uid: convertToSlug(word),
        };
      } else {
        acc[firstLetter].data.push(word);
      }
      return acc;
    }, {});

    return {
      glossary,
      getSections,
      titles,
      desc,
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
  layout: 'default'
};
</script>

<style>
.glossary-section{
  scroll-behavior: smooth;
}
</style>