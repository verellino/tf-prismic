<!-- This example requires Tailwind CSS v3.0+ -->
<template>
  <div class="isolate bg-white">
    <div class="px-6 pt-6 lg:px-8">
      <div class="flex flex-col items-center">
        <h1 class="mb-4">Sudut Transformasi Digital Perempuan</h1>
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
              <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">SEMUA TENTANG TRANSFORMASI DIGITAL PEREMPUAN</h2>
              <p class="w-160 mt-6 text-lg leading-8 text-gray-600">Transformasi digital perlu mengintegrasikan perspektif gender. Perempuan perlu didorong untuk terlibat dan berperan aktif dalam transformasi digital.</p>
              <div class="mt-8 flex gap-x-4 sm:justify-start">
                <a href="#" class="inline-block rounded-lg bg-red-800 px-4 py-1.5 text-base leading-7 text-white shadow-sm hover:bg-red-700">
                  Pelajari lebih lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container py-20">
          <div>
            <div class="flex flex-col items-center justify-center">
              <h2 class="text-4xl font-bold tracking-tight text-center sm:text-5xl">TRANSFORMASI DIGITAL INKLUSIF</h2>
              <p class="w-160 mt-6 text-lg leading-8 text-gray-600 text-center">Rangkuman data transformasi digital inklusif di Indonesia</p>
              <ul class="mt-8 flex gap-x-4 list-none sm:justify-center">
                <ArticleGridItemWithImg class="col-span-4 sm:col-span-2" :article="article" />
              </ul>
            </div>
          </div>
        </div>
        <!-- Laporan Section -->
        <div class="container py-20">
          <div>
            <h2 class="text-4xl font-bold tracking-tight pl-4 sm:pl-12">Laporan</h2>
            <BlogsThreeCol :articles="laporan" />
          </div>
        </div>
        <!-- Artikel Section -->
        <div class="container py-20">
          <div>
            <h2 class="text-4xl font-bold tracking-tight pl-4 sm:pl-12">Artikel</h2>
            <BlogsThreeCol :articles="laporan" />
          </div>
        </div>
        <!-- Infografik Section -->
        <div class="container py-20">
          <div>
            <h2 class="text-4xl font-bold tracking-tight pl-4 sm:pl-12">Infografik</h2>
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
            { name: 'Laporan', href: '#' },
            { name: 'Artikel', href: '#' },
            { name: 'Event', href: '#' },
            { name: 'Infografik', href: '#' },
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