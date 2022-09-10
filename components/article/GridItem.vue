<template>
  <li class="relative py-8 lg:w-1/3">
    <PrismicLink :field="article" tab-index="-1">
      <div class="flex-grow">
        <p class="blue-primary mb-2 text-xxs">
          <nuxt-link to="/" class="category-span">{{
            article.data.section
          }}</nuxt-link>
        </p>
        <Heading as="h3" class="h4">
          {{ article.data.title }}
        </Heading>
        <p v-if="excerpt" class="excerpt">{{ excerpt }}</p>
        <a class="inline-flex items-center">
          <span class="absolute bottom-0 left-2 flex">
            <span class="title-font text-xxs text-neutral-900"
              >{{ article.data.writer }} |
            </span>
            <span class="title-font ml-1 text-xxs text-neutral-900"
              >{{ formattedDate }} |</span
            >
            <span class="ml-1 text-xxs font-thin">
              {{ article.data.minsRead }}</span
            >
          </span>
        </a>
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
        return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
      } else {
        return excerpt;
      }
    },
  },
};
</script>