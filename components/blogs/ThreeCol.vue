<template>
  <div class="featured-blogs">
    <div class="container px-4 md:px-12 py-12">
      <ul class="flex flex-col sm:flex-row p-4">
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