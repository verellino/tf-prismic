<template>
  <li class="relative py-2">
    <PrismicLink :field="article" tab-index="-1">
      <p class="text-xxs blue-primary mb-2">
        <nuxt-link to="/" class="category-span">{{ article.data.section }}</nuxt-link> {{ formattedDate }}
      </p>
      <div>
        <div class="blog-card pr-4 flex flex-col justify-between">
          <div>
            <Heading as="h3" class="h4">
              {{ article.data.title }}
            </Heading>
            <p v-if="excerpt" class="excerpt">
              {{ excerpt }}
            </p>
          </div>
         <a href="#" class="mt-4 text-xxs ">
           <div class="article-details-bottom-span">
              <span class="">{{ article.data.category }} | </span>
              <span class=" ml-1">{{ article.data.writer }}</span>
            </div>
         </a>
        </div>
        <!-- <div v-if="featuredImage" class="article-img w-1/4 relative ml-8">
          <PrismicImage
            v-if="featuredImage.url"
            :field="featuredImage"
            class="object-cover aspect-1"
          />
        </div> -->
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
