<template>
  <li
    class="flex flex-col justify-center p-4"
  >
    <PrismicLink :field="article" tab-index="-1">
      <div>
        <p class="text-xxs blue-primary mb-2">
          <nuxt-link to="/" class="category-span">{{ article.data.section }}</nuxt-link> {{ formattedDate }}
        </p>
        <Heading as="h5">
            {{ article.data.title }}
        </Heading>
        <!-- <p v-if="excerpt" class="excerpt mt-2 hidden md:block leading-relaxed text-sm">
          {{ excerpt }}
        </p> -->
        <span class="flex">
          <span class="font-thin text-xxs">{{ article.data.writer }} | </span>
          <span class="font-thin text-xxs ml-1"> {{ formattedDate}} |</span>
          <span class="font-thin text-xxs ml-1"> {{ article.data.minsRead }}</span>
        </span>
      </div>
    </PrismicLink>
  </li>
</template>

<script>
const dateFormatter = new Intl.DateTimeFormat('id-ID', {
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
