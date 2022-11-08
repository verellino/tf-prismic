<template>
   <section class="px-4 mx-0 md:px-12 sm:ml-12">
    <div
      v-if="$prismic.asText(slice.primary.quote)"
      class="text-lg leading-relaxed border-l-4 pl-4 border-red-800"
    >
      <span class="text-2xl text-red-800">&ldquo;</span>
      {{ $prismic.asText(slice.primary.quote) }}
      <span class="text-2xl text-red-800">&rdquo;</span>
      <template v-if="slice.primary.source">
        &mdash; {{ slice.primary.source }}
      </template>
    </div>
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
