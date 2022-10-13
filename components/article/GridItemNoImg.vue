<template>
  <li class="relative">
    <PrismicLink :field="article" tab-index="-1">
      <p class="mb-2 text-xxs">
        <nuxt-link to="/" class="category-span">{{
          article.data.section
        }}</nuxt-link>
      </p>
      <div>
        <div class="blog-card flex flex-col justify-between">
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
              <span class="ml-1">{{ formattedDate }} | </span>
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
        .filter((slice) => slice.slice_type === "excerpt" )
        .map((slice) => this.$prismic.asText(slice.primary.excerpt) )
        .join(" ");
      const subtitle = this.article.data.slices
        .filter((slice) => slice.slice_type === "text" )
        .map((slice) => this.$prismic.asText(slice.primary.text) )
        .join(" ");
      let excerpt = text.substring(0, 320);
      if (text.length > 320) {
        return excerpt.substring(0, excerpt.lastIndexOf(" "));
      } else if (!text) {
        return excerpt = subtitle.substring(0, 320);
      } else {
        return excerpt;
      }
    },
  },
};
</script>