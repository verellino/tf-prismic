<template>
  <li
    class="px-2 lg:w-1/3"
  >
    <PrismicLink :field="article" tab-index="-1">
      <div class="flex-grow">
        <p class="text-xs blue-primary mb-2">
          <nuxt-link to="/" class="uppercase mr-2 inline-block py-1 px-2 rounded bg-blue-50 text-xs font-medium tracking-wide">{{ article.data.section }}</nuxt-link> {{ formattedDate }}
        </p>
            <Heading as="h3" class="h4">
              <PrismicLink :field="article">
                {{ article.data.title }}
              </PrismicLink>
            </Heading>
          <p v-if="excerpt" class="excerpt mt-2 hidden md:block leading-relaxed mb-5 pr-8">{{ excerpt }}</p>
          <a class="inline-flex items-center">
            <span class="flex">
              <span class="title-font text-xs text-neutral-900">{{ article.data.category }} | </span>
              <span class="title-font text-xs text-neutral-900 ml-1">{{ article.data.writer }}</span>
            </span>
          </a>
      </div>
    </PrismicLink>
  </li>
</template>

<script>
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'numeric',
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
      const text = this.article.data.slices.filter(slice => slice.slice_type === 'text').map(slice => this.$prismic.asText(slice.primary.text)).join(' ')
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
