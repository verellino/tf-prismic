<template>
  <Bounded as="section" class="font-serif ml-8 pt-0">
    <h3 class="h2 mb-7">Daftar Pustaka</h3>
    <PrismicRichText
      v-if="$prismic.asText(slice.primary.references)"
      :field="slice.primary.references"
      class="references-wrapper"
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

<style>
.references-wrapper p {
  @apply text-sm
}
.references-wrapper p a {
  @apply italic text-primary text-sm
}
.references-wrapper p a:hover {
  @apply text-dark-blue
}
</style>
