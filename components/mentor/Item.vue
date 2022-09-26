<template>
  <li
    class="mentor-list-item relative my-5 flex min-h-20 flex-col justify-between pb-4"
  >
    <PrismicLink :field="mentor" tab-index="-1" class="flex">
      <div class="w-1/4 mr-8 rounded-full overflow-hidden">
        <PrismicImage :field="mentor.data.image" />
      </div>
      <div>
        <Heading as="h5">
          <span>{{ mentor.data.name }}</span>
        </Heading>
        <!-- <p v-if="excerpt" class="excerpt mt-2 hidden md:block leading-relaxed text-sm">
          {{ excerpt }}
        </p> -->
        <div class="mentor-details-bottom-span mt-2">
          <PrismicRichText :field="mentor.data.position" class="mt-1 text-xxs"/>
          <PrismicRichText :field="mentor.data.description" class="mt-1 text-xxs"/>
          <PrismicRichText :field="mentor.data.motivation" class="mt-1 text-xxs"/>
          <PrismicRichText :field="mentor.data.expectation" class="mt-1 text-xxs"/>
        </div>
      </div>
    </PrismicLink>
  </li>
</template>

<script>
const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default {
  props: {
    mentor: {
      type: Object,
      required: true,
    },
  },
  computed: {
    featuredImage() {
      if (this.mentor.data.featuredImage.url) {
        return this.mentor.data.featuredImage;
      }

      const imageSlice = this.mentor.data.slices.find(
        (slice) => slice.slice_type === "image"
      );
      if (imageSlice && imageSlice.primary.image.url) {
        return imageSlice.primary.image;
      }
      return null;
    },
  },
};
</script>
<style scoped>
.mentor-list-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.mentor-list-item:nth-last-child(1) {
  border-bottom: none;
}
</style>