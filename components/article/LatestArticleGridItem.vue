<template>
  <li class="relative py-2">
    <PrismicLink :field="article" tab-index="-1">
      <div
        v-if="featuredImage"
        class="article-img aspect-h-9 relative mb-4 max-h-56 w-full overflow-hidden py-4 px-1"
      >
        <PrismicImage
          v-if="featuredImage.url"
          :field="featuredImage"
          class="h-full w-full rounded-md object-cover"
        />
      </div>
      <p class="blue-primary mb-2 text-xxs">
        <nuxt-link to="/" class="category-span">{{
          article.data.section
        }}</nuxt-link>
      </p>
      <div>
        <div class="blog-card flex flex-col justify-between pr-4">
          <div>
            <Heading as="h3" class="h4">
              {{ article.data.title }}
            </Heading>
            <p v-if="excerpt" class="excerpt">
              {{ excerpt }}
            </p>
          </div>
          <a href="#" class="text-xxs">
            <div class="article-details-bottom-span">
              <span class="">{{ article.data.writer }} | </span>
              <span class="ml-1"> {{ formattedDate }} |</span>
              <span class="ml-1">{{ article.data.minsRead }}</span>
            </div>
          </a>
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
      const excerpt = text.substring(0, 250);
      if (text.length > 250) {
        return excerpt.substring(0, excerpt.lastIndexOf(" "));
      } else {
        return excerpt;
      }
    },
  },
};
</script>