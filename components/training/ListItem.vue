<template>
  <li
    class="relative my-4 flex flex-col justify-between p-2"
  >
    <PrismicLink :field="article" tab-index="-1" class="flex">
      <div
        v-if="featuredImage"
        class="aspect-w-16 w-1/4 overflow-hidden rounded-md"
      >
        <PrismicImage
          v-if="featuredImage.url"
          :field="featuredImage"
          class="h-full w-full rounded-md object-cover object-center"
        />
      </div>
      <div class="ml-4">
        <Heading as="h5">
          {{ article.data.title }}
        </Heading>
        <!-- <p v-if="excerpt" class="excerpt mt-2 hidden md:block leading-relaxed text-sm">
          {{ excerpt }}
        </p> -->
        <div class="article-details-bottom-span text-xxs">
          <span class="">{{ formattedDate }}</span>
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
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    featuredImage() {
      if (this.article.data.mainImage.url) {
        return this.article.data.mainImage;
      }

      const imageSlice = this.article.data.slices.find(
        (slice) => slice.slice_type === "image"
      );
      if (imageSlice && imageSlice.primary.image.url) {
        return imageSlice.primary.image;
      }
      return null;
    },
    formattedDate() {
      const date = this.$prismic.asDate(
        this.article.data.publishDate || this.article.first_publication_date
      );

      return dateFormatter.format(date);
    },
    excerpt() {
      const text = this.article.data.slices
        .filter((slice) => slice.slice_type === "text")
        .map((slice) => this.$prismic.asText(slice.primary.text))
        .join(" ");
      const excerpt = text.substring(0, 80);
      if (text.length > 80) {
        return excerpt.substring(0, excerpt.lastIndexOf(" "));
      } else {
        return excerpt;
      }
    },
  },
};
</script>