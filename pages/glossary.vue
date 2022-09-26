<template>
  <div class="pt-20">
    <div class="container py-12 text-center">
      <h1 class="section-title">Glossary</h1>
    </div>
    <div class="mx-auto flex items-start">
      <div class="w-1/4 p-8 pt-0">
        <h2 class="h4 uppercase">Section</h2>
        <p
          v-for="t in getSections"
          :key="t.id"
          class="pb-4 hover:underline hover:underline-offset-8"
        >
          <a :href="`#${t.uid}`">
            {{ t.title }}
          </a>
        </p>
      </div>
      <!-- Right Column -->
      <div class="w-2/3">
        <!-- Glossary Grid by Letter -->
        <div>
          <div v-for="g in glossary" :key="g.id" class="glossary-item pb-8">
            <h3 class="h4 mb-2" :id="g.uid">{{ g.data.title }}</h3>
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
};
</script>

<style></style>