<!-- This example requires Tailwind CSS v3.0+ -->
<template>
  <div class="isolate bg-white">
    <div class="px-6 pt-6 lg:px-8">
      <div class="flex flex-col items-center">
        <h1 class="mb-4">Sudut Anti Kejahatan Siber</h1>
        <hr class="hidden lg:block w-40 mb-2">
        <nav class="flex h-9 items-center justify-between" aria-label="Global">
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
            </button>
          </div>
          <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            <a v-for="item in subnavigation" :key="item.name" :href="item.href" class="text-gray-900 hover:text-red-900">{{ item.name }}</a>
          </div>
        </nav>
      </div>
      <hr class="mt-4">
    </div>
    <main>
      <div class="relative px-6 lg:px-8">
        <div class="py-40 bg-no-repeat bg-cover px-6 lg:px-8 -mx-6 lg:-mx-8" :style="{ backgroundImage: `url(${backgroundUrl})` }">
          <div class="container">
            <div>
              <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">BAHAYA KEJAHATAN SIBER</h2>
              <p class="w-160 mt-6 text-lg leading-8 text-gray-600">Setiap dari diri kita, bisa jadi pernah menjadi korban kejahatan siber. Mari kita kenali lebih jauh agar kita dapat lebih berhati-hati!</p>
              <div class="mt-8 flex gap-x-4 sm:justify-start">
                <a href="#" class="inline-block rounded-lg bg-red-800 px-4 py-1.5 text-base leading-7 text-white shadow-sm hover:bg-red-700">
                  Pelajari lebih lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container py-20">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="flex justify-between items-end">
                    <div class="flex flex-col items-center sm:text-center">
                        <h2 class="text-4xl font-bold tracking-tight text-center">Trending Jenis Kejahatan Siber</h2>
                    </div>
                    <a href="">
                        View all <span class="text-red-800" aria-hidden="true">&rarr;</span>
                    </a>
                </div>
                <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                    <div class="grid grid-cols-1 gap-y-8 md:grid-cols-5 md:gap-8">
                        <div v-for="feature in features" :key="feature.name" class="relative flex flex-col gap-6 items-center text-center">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0">
                                <img src="~/assets/images/circle.svg" alt="Icon">
                            </div>
                            <div class="sm:min-w-0 sm:flex-1">
                                <p class="text-lg font-semibold leading-8 text-gray-900">{{ feature.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Berita Section -->
        <div class="container py-20">
          <div>
            <h2 class="text-4xl font-bold tracking-tight pl-4 sm:pl-12">Berita Terbaru</h2>
            <BlogsThreeCol :articles="laporan" />
          </div>
        </div>
        <!-- Artikel Section -->
        <div class="container py-20">
          <div>
            <h2 class="text-4xl font-bold tracking-tight pl-4 sm:pl-12">Cerita Korban</h2>
            <BlogsThreeCol :articles="laporan" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { components } from '~/slices'
import backgroundUrl from "~/assets/images/background-example.jpg"
export default {
  layout: 'default',
  async asyncData ({ $prismic, params, store }) {
    const article = await $prismic.api.getByUID('article', "apa-itu-blockchain-penjelasan-untuk-anda-yang-belum-mengerti")
    const { results: laporan } = await $prismic.api.query(
      $prismic.predicate.at('my.article.section', 'Teknologi' ),
      {
        orderings: `[${[
          { field: 'my.article.publishDate', direction: 'desc' },
          { field: 'document.first_publication_date', direction: 'desc' }
        ].map(({ field, direction }) => `${field} ${direction}`).join(', ')}]`,
        pageSize: 3
      }
    )
    await store.dispatch('prismic/load')
    return {
        article,
        laporan
    }
  },
  data () {
    return {
      components,
      subnavigation: [
            { name: 'Home', href: '#' },
            { name: 'Berita', href: '#' },
            { name: 'Cerita Korban', href: '#' },
        ],
        features: [
            {
                name: 'Penipuan Pekerjaan',
                description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.'
            },
            {
                name: 'Penipuan Phising (pencurian data pribadi)',
                description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            },
            {
                name: 'Penipuan Pembelian Online',
                description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            },
            {
                name: 'Penipuan Investasi',
                description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            },
            {
                name: 'Penipuan pinjaman',
                description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
            },
        ],
        backgroundUrl
    }
  },
  computed: {
    navigation() {
      return this.$store.state.prismic.navigation;
    },
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
  head () {
    return {
      title: `| Innovating Indonesia`
    }
  }
}
</script>