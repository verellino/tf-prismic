<template>
  <li class="relative py-2">
    <PrismicLink :field="article" tab-index="-1">
      <div v-if="featuredImage" class="article-img w-full mb-4 relative py-4 px-1 rounded-md">
        <PrismicImage
          v-if="featuredImage.url"
          :field="featuredImage"
          class="object-cover object-center"
        />
      </div>
      <p class="text-xxs blue-primary mb-2">
        <nuxt-link to="/" class="category-span">{{ article.data.section }}</nuxt-link>
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
         <a href="#" class="mt-4 text-xxs ">
           <div class="absolute bottom-1 left-0">
              <span class="title-font text-neutral-900">{{ article.data.category }} | </span>
              <span class="title-font text-neutral-900 ml-1">{{ formattedDate }} | </span>
              <span class="title-font text-neutral-900 ml-1">{{ article.data.writer }}</span>
            </div>
         </a>
        </div>
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
      if (this.article.data.mainImage.url) {
        return this.article.data.mainImage
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
