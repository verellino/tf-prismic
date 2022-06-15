<template>
  <div class="border-b-2  border-gray-200">
    <div class="container py-12">
      <h2 class="text-center uppercase">Latest Articles</h2>
      <ul class="flex p-4">
        <LatestArticleGridItem
          v-for="article in articles.slice(0,3)"
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
    },
    limit: 3
  }
}
</script>