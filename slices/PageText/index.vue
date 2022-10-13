<template>
  <section class="px-4 mx-0 md:px-8 sm:mx-8">
    <PrismicRichText
      v-if="$prismic.asText(slice.primary.text)"
      class="article-text"
      :field="slice.primary.text"
      wrapper="div"
    />
  </section>
</template>


<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "PageText",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
