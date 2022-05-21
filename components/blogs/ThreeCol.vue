<template>
  <div class="featured-blogs">
    <div class="container py-20">
      <ul class="grid grid-cols-3 gap-4 text-center">
        <ArticleListItemWithImg
          v-for="article in articles"
          :key="article.id"
          :article="article"
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