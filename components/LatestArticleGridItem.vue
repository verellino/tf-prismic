<template>
  <li class="py-8 px-4 lg:w-1/3">
    <PrismicLink :field="article" tab-index="-1">
      <div class="h-full flex items-start">
        <!-- <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-neutral-500 pb-2 mb-2 border-b-2 border-gray-200">01</span>
        </div> -->
        <div class="flex-grow pl-6">
          <span class="blog-details-span">
            {{ formattedDate }}
          </span>
              <Heading as="h3">
                <PrismicLink :field="article">
                  {{ $prismic.asText(article.data.title) }}
                </PrismicLink>
              </Heading>
            <p v-if="excerpt" class="mt-2 hidden md:block leading-relaxed mb-5">{{ excerpt }}</p>
            <a class="inline-flex items-center">
              <span class="flex">
                  <nuxt-link to="/" class="uppercase text-dark-blue inline-block py-1 px-2 rounded bg-blue-50 text-xs font-medium tracking-widest">{{ article.data.category.uid }}</nuxt-link>
                  <span class="ml-4 title-font font-medium text-neutral-900">Author</span>
              </span>
            </a>
        </div>
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
