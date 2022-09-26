<!-- Blogs / Category Grid -->
<template>
  <div>
    <div class="container px-4 py-12 md:px-10">
      <!-- <h2 class="section-title mb-6 ml-4 capitalize">Semua Artikel</h2> -->
      <div>
        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <EventsEventItem
            v-for="article in articles"
            :key="article.id"
            :article="article"
            class="col-span-1"
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
