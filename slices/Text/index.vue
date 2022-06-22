<template>
  <Bounded as="section">
    <PrismicRichText
      v-if="$prismic.asText(slice.primary.text)"
      class="article-text mx-auto"
      :field="slice.primary.text"
      wrapper="div"
    />
  </Bounded>
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
  max-width: 40em;
  white-space: pre-wrap;
}
</style>
