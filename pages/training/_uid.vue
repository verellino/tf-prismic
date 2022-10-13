<template>
  <div class="container">
    <div class="mx-4 pt-8 sm:mx-14">
      <div
        v-if="featuredImage"
        class="main-image relative mb-8 w-full overflow-hidden rounded-md"
      >
        <PrismicImage
          v-if="featuredImage.url"
          :field="featuredImage"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div v-else class="pt-8">
      </div>
    </div>
    <div class="max-w-3xl mx-auto">
        <div class="p-4 sm:px-8 sm:ml-8 pt-0">
            <div class="pb-0 text-center">
                <p class="mt-2 mb-2 text-sm font-semibold uppercase">
                    {{ article.data.section }} <span v-if="article.data.category">| {{ article.data.category }}</span>
                </p>
                <h1 class="text-maroon mx-3 mb-3 text-2xl">
                    {{ article.data.title }}
                </h1>
                <p class="md:ml-8">
                    {{ formattedDate }}
                </p>
            </div>
        </div>
        <article class="py-8" style="hyphens: auto">
            <SliceZone :slices="article.data.slices" :components="components" />
        </article>
    </div>
    </div>
  </div>
</template>

<script>
import { components } from '~/slices'

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

export default {
  async asyncData ({ $prismic, store, params }) {
    const article = await $prismic.api.getByUID('training', params.uid)
      
    await store.dispatch('prismic/load')
    return {
      article,
    }
  },
  data() {
    return {
      components,
      sharing: {
        url: "",
        title: "",
        description: "",
        quote: "",
        hashtags: "",
        twitterUser: "",
      },
      networks: [
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: "fab fah fa-lg fa-whatsapp",
          color: "#333333",
        },
        {
          network: "telegram",
          name: "Telegram",
          icon: "fab fah fa-lg fa-telegram-plane",
          color: "#0088cc",
        },
        {
          network: "twitter",
          name: "Twitter",
          icon: "fab fah fa-lg fa-twitter",
          color: "#1da1f2",
        },
        {
          network: "facebook",
          name: "Facebook",
          icon: "fab fah fa-lg fa-facebook-f",
          color: "#1877f2",
        },
        {
          network: "email",
          name: "Email",
          icon: "far fah fa-lg fa-envelope",
          color: "#333333",
        },
        {
          network: "linkedin",
          name: "LinkedIn",
          icon: "fab fah fa-lg fa-linkedin",
          color: "#007bb5",
        },
      ],
    };
  },
  head () {
    return {
      title: `${this.article.data.title} | Innovating Indonesia`
    }
  },
  computed: {
    formattedDate () {
      const date = this.$prismic.asDate(this.article.data.publishDate || this.article.first_publication_date)

      return dateFormatter.format(date)
    },
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
  },

}
</script>
