<!-- Blogs / Category Grid -->
<template>
  <div>
    <div class="container px-4 py-12 md:px-20">
      <!-- <h2 class="section-title mb-6 ml-4 capitalize">Semua Artikel</h2> -->
      <div>
        <ul class="flex flex-col">
          <TrainingItem
            v-for="article in articles"
            :key="article.id"
            :article="article"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>
