<template>
  <div class="border-b-2  border-gray-200">
    <div class="container py-20">
      <h2 class="text-center uppercase">Latest Articles</h2>
      <ul class="flex p-8">
        <LatestArticleGridItem
          v-for="article in articles"
          :key="article.id"
          :article="article"
          class="col-span-1"
        />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>