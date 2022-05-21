<template>
  <li
    class="flex flex-col justify-center p-10"
  >
    <PrismicLink :field="article" tab-index="-1">
      <div class="article-img aspect-w-16 aspect-h-9 relative bg-gray-100 mb-4">
        <PrismicImage
          v-if="featuredImage.url"
          :field="featuredImage"
          class="object-cover"
        />
      </div>
      <div>
        <p class="blog-details-span">
          {{ formattedDate }}
        </p>
        <Heading as="h2">
          <PrismicLink :field="article">
            {{ $prismic.asText(article.data.title) }}
          </PrismicLink>
        </Heading>
        <p v-if="excerpt" class="leading-relaxed">
          {{ excerpt }}
        </p>
      </div>
    </PrismicLink>
  </li>
</template>

<script>
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    featuredImage () {
      if (this.article.data.featuredImage.url) {
        return this.article.data.featuredImage
      }

      const imageSlice = this.article.data.slices.find(slice => slice.slice_type === 'image')
      if (imageSlice && imageSlice.primary.image.url) {
        return imageSlice.primary.image
      }
      return null
    },
    formattedDate () {
      const date = this.$prismic.asDate(this.article.data.publishDate || this.article.first_publication_date)

      return dateFormatter.format(date)
    },
    excerpt () {
      const text = this.article.data.slices
        .filter(slice => slice.slice_type === 'text')
        .map(slice => this.$prismic.asText(slice.primary.text))
        .join(' ')
      const excerpt = text.substring(0, 80)
      if (text.length > 80) {
        return excerpt.substring(0, excerpt.lastIndexOf(' ')) + '…'
      } else {
        return excerpt
      }
    }
  }
}
</script>
