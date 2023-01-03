<template>
  <div class="featured-blogs">
    <div class="container px-4 md:px-12 py-12">
      <ul class="grid grid-cols-1 sm:grid-cols-3 p-4">
        <ArticleGridItemWithImg
          v-for="article in articles.slice(0,3)"
          :key="article.id"
          :article="article"
          class="col-span-1 p-2"
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