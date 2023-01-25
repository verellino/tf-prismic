<!-- This example requires Tailwind CSS v3.0+ -->
<template>
  <div class="isolate bg-white">
    <div class="px-6 pt-6 lg:px-8">
      <div class="flex flex-col items-center">
        <span class="font-semibold mb-2">Semua tentang penggunaan internet</span>
        <h1 class="mb-2">Sudut Literasi Digital</h1>
      </div>
      <hr class="mt-4">
    </div>
    <main>
      <!-- Artikel Section -->
        <div class="container pb-20">
          <div>
            <h2 class="text-4xl font-bold tracking-tight pl-4 sm:pl-20">Artikel</h2>
            <BlogsThreeCol :articles="laporan" />
          </div>
        </div>
      <div class="relative px-6 lg:px-8">
        <div class="py-24 bg-no-repeat bg-cover px-6 lg:px-8 -mx-6 lg:-mx-8" :style="{ backgroundImage: `url(${backgroundUrl})` }">
          <div class="container">
            <div class="w-1/2">
              <h2 class="text-4xl font-bold tracking-tight sm:text-5xl uppercase">Sudah tahu kah Anda cara menggunakan Media Sosial?</h2>
              <p class="w-160 mt-2 text-lg leading-8 text-gray-600">Berikut beberapa tips dari berbagai platform media sosial</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div class="col-span-1 p-4 rounded-md bg-white flex flex-start align-middle justify-between">
                <div class="w-1/3 h-full p-4 flex align-middle justify-center">
                  <!-- <img src="" alt="" srcset=""> -->
                  <div class="w-24 h-24 aspect-w-1 aspect-h-1 rounded-md bg-blue-900"></div>
                </div>
                <div class="w-2/3">
                  <span class="text-xs font-semibold uppercase text-red-800">Tips Whatsapp</span>
                  <h3 class="h4">Cara membuat Whatsapp Grup</h3>
                  <p class="excerpt text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque commodi, consequuntur quas.</p>
                </div>
              </div>
              <div class="col-span-1 p-4 rounded-md bg-white flex flex-start align-middle justify-between">
                <div class="w-1/3 h-full p-4 flex align-middle justify-center">
                  <!-- <img src="" alt="" srcset=""> -->
                  <div class="w-24 h-24 aspect-w-1 aspect-h-1 rounded-md bg-blue-900"></div>
                </div>
                <div class="w-2/3">
                  <span class="text-xs font-semibold uppercase text-red-800">Tips Whatsapp</span>
                  <h3 class="h4">Cara membuat Whatsapp Grup</h3>
                  <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque commodi, consequuntur quas.</p>
                </div>
              </div>
              <div class="col-span-1 p-4 rounded-md bg-white flex flex-start align-middle justify-between">
                <div class="w-1/3 h-full p-4 flex align-middle justify-center">
                  <!-- <img src="" alt="" srcset=""> -->
                  <div class="w-24 h-24 aspect-w-1 aspect-h-1 rounded-md bg-blue-900"></div>
                </div>
                <div class="w-2/3">
                  <span class="text-xs font-semibold uppercase text-red-800">Tips Whatsapp</span>
                  <h3 class="h4">Cara membuat Whatsapp Grup</h3>
                  <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque commodi, consequuntur quas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Laporan Section -->
        <div class="container py-20 px-12">
          <div>
            <h2 class="text-4xl font-bold tracking-tight">Hati-hati dalam menggunakan internet!</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">Berikut beberapa hal yang perlu diperhatikan di internet:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div class="col-span-1 p-8 rounded-md bg-red-100 flex flex-start align-middle justify-between">
                <div>
                  <span class="text-sm font-semibold uppercase text-red-800 mb-4">Boleh dilakukan di internet</span>
                  <ol class="list-decimal pl-8 mt-4">
                    <li class="list-item mb-4">
                      <h3 class="text-base font-semibold">Lorem ipsum dolor sit</h3>
                      <p>Quidem, sunt a totam voluptates voluptatum nisi aliquam incidunt enim</p>
                    </li>
                    <li class="list-item mb-4">
                      <h3 class="text-base font-semibold">Lorem ipsum dolor sit</h3>
                      <p>Quidem, sunt a totam voluptates voluptatum nisi aliquam incidunt enim</p>
                    </li>
                    <li class="list-item mb-4">
                      <h3 class="text-base font-semibold">Lorem ipsum dolor sit</h3>
                      <p>Quidem, sunt a totam voluptates voluptatum nisi aliquam incidunt enim</p>
                    </li>
                  </ol>
                </div>
              </div>
              <div class="col-span-1 p-8 rounded-md bg-red-100 flex flex-start align-middle justify-between">
                <div>
                  <span class="text-sm font-semibold uppercase text-red-800 mb-4">Tidak Boleh dilakukan di internet</span>
                  <ol class="list-decimal pl-8 mt-4">
                    <li class="list-item mb-4">
                      <h3 class="text-base font-semibold">Lorem ipsum dolor sit</h3>
                      <p>Quidem, sunt a totam voluptates voluptatum nisi aliquam incidunt enim</p>
                    </li>
                    <li class="list-item mb-4">
                      <h3 class="text-base font-semibold">Lorem ipsum dolor sit</h3>
                      <p>Quidem, sunt a totam voluptates voluptatum nisi aliquam incidunt enim</p>
                    </li>
                    <li class="list-item mb-4">
                      <h3 class="text-base font-semibold">Lorem ipsum dolor sit</h3>
                      <p>Quidem, sunt a totam voluptates voluptatum nisi aliquam incidunt enim</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Infografik Section -->
        <div class="container py-20">
          <div class="pl-4 sm:px-12">
            <h2 class="text-4xl font-bold tracking-tight">Jangan sampai menjadi korban hoax!</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">Silahkan search topik yang ingin Anda check kebenarannya</p>
            <ArticleCategoryListItem
              v-for="article in laporan"
              :key="article.id"
              :article="article"
            />
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