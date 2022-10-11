<template>
  <section class="mx-0 md:px-8 sm:ml-8">
    <PrismicRichText
      v-if="$prismic.asText(slice.primary.text)"
      class="article-text"
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
}
</style>
