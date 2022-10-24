<template>
  <section class="flex justify-center items-center flex-col h-screen">
    <h1 class="section-title">Coming soon!</h1>
    <nuxt-link to="/" class="text-xs link_underline pt-4 text-slate-600">Kembali ke beranda</nuxt-link>
  </section>
</template>

<script>
export default {
  async asyncData({ $prismic, store }) {
    await store.dispatch("prismic/load");
  },
  head() {
    return {
      title: "Coming soon!",
    };
  },
};
</script>

<style>

</style>