<template>
  <div class="border-blogs-bottom">
    <div class="container px-4 py-8">
      <ul class="flex flex-col sm:flex-row sm:px-4 sm:pt-4">
        <div class="w-full sm:w-1/3 sm:px-4 sm:pr-8">
          <span class="h3 link_underline section-title">
            Ekonomi
            <span
              ><img
                src="~assets/images/chevron_right.svg"
                class="inline-block h-6 chevron-color"
            /></span>
          </span>
          <ArticleCategoryListItem
            v-for="article in articlesEco"
            :key="article.id"
            :article="article"
          />
        </div>
        <div class="mt-4 w-full sm:mt-0 sm:w-1/3 sm:px-4 sm:pr-8">
          <span class="h3 link_underline section-title">
            Pemerintahan
            <span
              ><img
                src="~assets/images/chevron_right.svg"
                class="inline-block h-6 chevron-color"
            /></span>
          </span>
          <ArticleCategoryListItem
            v-for="article in articlesGov"
            :key="article.id"
            :article="article"
          />
        </div>
        <div class="mt-4 w-full sm:mt-0 sm:w-1/3 sm:px-4">
          <span class="h3 link_underline section-title">
            Teknologi
            <span
              ><img
                src="~assets/images/chevron_right.svg"
                class="inline-block h-6 chevron-color"
            /></span>
          </span>
          <ArticleCategoryListItem
            v-for="article in articlesTech"
            :key="article.id"
            :article="article"
          />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articlesEco: {
      type: Array,
      required: true,
    },
    articlesGov: {
      type: Array,
      required: true,
    },
    articlesTech: {
      type: Array,
      required: true,
    },
  },
};
</script>