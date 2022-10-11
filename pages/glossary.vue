<template>
  <div class="pt-20 glossary-section">
    <div class="container py-12 text-center">
      <h1 class="section-title">Glossarium</h1>
    </div>
    <div class="mx-auto flex flex-col sm:flex-row items-start">
      <div class="w-full sm:w-1/4 p-4 sm:py-2 sm:px-16 pt-0 sticky top-8 sm:top-2 bg-white shadow sm:shadow-none">
        <h2 class="h4 uppercase font-semibold">Section</h2>
        <div class="flex sm:flex-col flex-row overflow-x-scroll sm:overflow-auto">
          <div v-for="g in getLetters" :key="g.id" class="p-4 sm:p-0 hover:text-red-800 active:text-red-800">
            <a :href="`#${g.group}`" class="hover:underline hover:underline-offset-2">
              <span class="mb-4 text-sm font-semibold">{{ g.group }}</span>
            </a>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div class="w-full sm:w-2/3">
        <!-- Glossary Grid by Letter -->
        <div class="px-4 sm:px-0">
          <div v-for="g in getLetters" :key="g.id" class="glossary-item pb-2">
            <h2 :id="g.group" class="pb-4 font-semibold">{{g.group}}</h2>
            <div v-for="w in g.children" :key="w.id" class="glossary-item pb-8">
              <h3 class="h4 mb-2 pt-4 -mt-4" :id="g.uid">{{ w.data.title }}</h3>
              <p class="text-sm">{{ $prismic.asText(w.data.description) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, store }) {
    const { results: glossary1 } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "glossary"),
      { orderings: "[my.glossary.title]", pageSize: 100, }
    );
    const { results: glossary2 } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "glossary"),
      { orderings: "[my.glossary.title]", pageSize: 100, page: 2, }
    );
    const { results: glossary3 } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "glossary"),
      { orderings: "[my.glossary.title]", pageSize: 100, page: 3, }
    );
    const { results: glossary4 } = await $prismic.api.query(
      $prismic.predicate.at("document.type", "glossary"),
      { orderings: "[my.glossary.title]", pageSize: 100, page: 4, }
    );
    const glossary = glossary1.concat(glossary2, glossary3);
    let firstLetters = glossary.reduce((r, e) => {
      // get first letter of name of current element
      let group = e.data.title[0];
      // if there is no property in accumulator with this letter create it
      if(!r[group]) r[group] = {group, children: [e]}
      // if there is push current element to children array for that letter
      else r[group].children.push(e);
      // return accumulator
      return r;
    }, {})
    let getLetters = Object.values(firstLetters)
    await store.dispatch("prismic/load");
    return {
      glossary,
      // getSections
      getLetters
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