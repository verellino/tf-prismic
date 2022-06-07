<template>
  <div class="featured-blogs">
    <div class="container py-20">
      <h2 class="text-center">More articles like this</h2>
      <ul class="flex p-8">
        <ArticleGridItem
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
    }
  }
}
</script>