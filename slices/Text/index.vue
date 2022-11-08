<template>
  <section class="px-4 mx-0 md:px-12 sm:ml-12">
    <PrismicRichText
      v-if="$prismic.asText(slice.primary.text)"
      class="article-text sm:max-w-4xl mx-auto"
      :field="slice.primary.text"
      wrapper="div"
    />
  </section>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>

<style scoped>
.article-text {    
  white-space: pre-wrap;
  user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
}
@media (min-width: 600px) {
  .article-text p {
    @apply text-xl;
  }
}
</style>
