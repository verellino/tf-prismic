<template>
  <li>
    <div class="relative py-2">
    <PrismicLink :field="article" tab-index="-1" class="flex">
      <div
        v-if="featuredImage"
        class="w-1/4 aspect-w-16 overflow-hidden rounded-md"
      >
        <PrismicImage
          v-if="featuredImage.url"
          :field="featuredImage"
          class="h-full w-full rounded-md object-cover object-center"
        />
      </div>
      <div class="ml-8">
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
            <div class="float-right mr-8">
              <span class="">Baca Lengkap >></span>
            </div>
          </a>
        </div>
      </div>
    </PrismicLink>
    </div>
  </div>
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