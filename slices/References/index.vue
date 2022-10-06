<template>
  <section class="mx-0 md:px-6 sm:ml-4 pt-8 break-words">
    <h3 class="h2 mb-7 text-maroon">Referensi</h3>
    <PrismicRichText
      v-if="$prismic.asText(slice.primary.references)"
      :field="slice.primary.references"
      class="references-wrapper"
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
