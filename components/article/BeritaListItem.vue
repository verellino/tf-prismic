<template>
  <li
    class="article-list-item relative my-5 flex min-h-20 flex-col justify-between pb-4"
  >
    <PrismicLink :field="article" tab-index="-1">
      <div>
        <Heading as="h5">
          {{ article.data.title }}
        </Heading>
        <!-- <p v-if="excerpt" class="excerpt mt-2 hidden md:block leading-relaxed text-sm">
          {{ excerpt }}
        </p> -->
        <div class="article-details-bottom-span mt-4 text-xxs">
          <span class="">{{ article.data.section }}</span>
          <span class=""> | {{ article.data.writer }}</span>
          <span class=""> | {{ formattedDate }}</span>
          <span v-if="article.data.minsRead" class="">
            | {{ article.data.minsRead }}</span
          >
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
      if (this.article.data.featuredImage.url) {
        return this.article.data.featuredImage;
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
<style scoped>
.article-list-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.article-list-item:nth-last-child(1) {
  border-bottom: none;
}
</style>