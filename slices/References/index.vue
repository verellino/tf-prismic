<template>
  <section class="px-4 mx-0 md:px-12 sm:ml-12 pt-8 break-words">
    <h3 class="mb-7 text-lg text-maroon">Referensi</h3>
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
  @apply text-xs font-serif text-slate-600
}
.references-wrapper p a {
  @apply italic text-primary text-xs font-serif
}
.references-wrapper p a:hover {
  @apply text-dark-blue
}
</style>
