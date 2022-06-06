<template>
  <li
    class="flex flex-col justify-center m-4 p-6"
  >
    <PrismicLink :field="article" tab-index="-1">
      <div>
        <p class="blog-details-span">
          {{ formattedDate }}
        </p>
        <Heading as="h4">
          <PrismicLink :field="article">
            {{ $prismic.asText(article.data.title) }}
          </PrismicLink>
        </Heading>
        <a class="inline-flex items-center mt-5">
            <span class="flex">
                <nuxt-link to="/" class="uppercase text-dark-blue inline-block py-1 px-2 rounded bg-blue-50 text-xs font-medium tracking-widest">{{ article.data.category.uid }}</nuxt-link>
                <span class="ml-4 title-font font-medium text-neutral-900">Author</span>
            </span>
          </a>
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
