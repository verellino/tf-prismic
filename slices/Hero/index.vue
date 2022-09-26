<template>
  <section class="pages--hero-image relative bg-maroon text-white">
    <figure class="absolute inset-0">
      <PrismicImage
        v-if="slice.primary.backgroundImage.url"
        :field="slice.primary.backgroundImage"
        class="pointer-events-none h-full w-full select-none object-cover opacity-40"
      />
    </figure>
    <Bounded y-padding="lg" class="relative">
      <div class="grid justify-items-center gap-8">
        <PrismicRichText
          :field="slice.primary.text"
          :html-serializer="htmlSerializer"
          class="max-w-2xl text-center"
          wrapper="div"
        />
        <PrismicLink
          v-if="
            slice.primary.buttonLink &&
            ('id' in slice.primary.buttonLink ||
              'url' in slice.primary.buttonLink)
          "
          :field="slice.primary.buttonLink"
          class="rounded bg-white px-5 py-3 font-medium text-slate-800"
        >
          {{ slice.primary.buttonText || "Learn More" }}
        </PrismicLink>
      </div>
    </Bounded>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Hero",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style scoped>
.pages--hero-image{
    height: 45vh;
}
</style>