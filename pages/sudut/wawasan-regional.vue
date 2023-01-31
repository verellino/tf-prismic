<!-- This example requires Tailwind CSS v3.0+ -->
<template>
  <div class="isolate bg-white">
    <div class="px-6 pt-6 lg:px-8">
      <div class="flex flex-col items-center">
        <h1 class="mb-4">Wawasan Regional</h1>
        <!-- <hr class="hidden lg:block w-40 mb-2">
        <nav class="flex h-9 items-center justify-between" aria-label="Global">
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
            </button>
          </div>
          <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            <a v-for="item in subnavigation" :key="item.name" :href="item.href" class="text-gray-900 hover:text-red-900">{{ item.name }}</a>
          </div>
        </nav> -->
      </div>
    </div>
    <main>
      <p class="text-center mb-2">Pilih provinsi pada peta atau dari list di bawah ini untuk membaca wawasan pada setiap regional.</p>
      <div class="relative px-6 lg:px-8">
        <div>
          <form class="flex flex-col justify-center items-center px-16">
            <div class="my-2">
              <label for="Provinsi">Pilih provinsi:</label>
              <select name="Provinsi" id="provinceSelect" v-model="selectedLocation" class="p-1 border-2">
                <option value="id-ac">Nanggroe Aceh Darussalam</option>
                <option value="id-su">Sumatera Utara</option>
                <option value="id-sb">Sumatera Barat</option>
                <option value="id-ri">Riau</option>
                <option value="id-kr">Kepulauan Riau</option>
                <option value="id-ja">Jambi</option>
                <option value="id-ss">Sumatera Selatan</option>
                <option value="id-bb">Bangka Beoptiontung</option>
                <option value="id-be">Bengkulu</option>
                <option value="id-la">Lampung</option>
                <option value="id-jb">Jawa Barat</option>
                <option value="id-bt">Banten</option>
                <option value="id-jk">DKI Jakarta</option>
                <option value="id-jt">Jawa Tengah</option>
                <option value="id-yo">Daerah Istimewa Yogyakarta</option>
                <option value="id-ji">Jawa Timur</option>
                <option value="id-ba">Bali</option>
                <option value="id-kt">Kalimantan Tengah</option>
                <option value="id-ki">Kalimantan Timur</option>
                <option value="id-ku">Kalimantan Utara</option>
                <option value="id-ks">Kalimantan Selatan</option>
                <option value="id-kb">Kalimantan Barat</option>
                <option value="id-sa">Sulawesi Utara</option>
                <option value="id-sg">Sulawesi Selatan</option>
                <option value="id-sa">Sulawesi Tengah</option>
                <option value="id-st">Sulawesi Tenggara</option>
                <option value="id-sr">Sulawesi Barat</option>
                <option value="id-go">Gorontalo</option>
                <option value="id-ma">Maluku</option>
                <option value="id-mu">Maluku Utara</option>
                <option value="id-pa">Papua</option>
                <option value="id-pb">Papua Barat</option>
                <option value="id-nb">Nusa Tenggara Barat</option>
                <option value="id-nt">Nusa Tenggara Timur</option>
              </select>         
            </div>
            <radio-svg-map v-model="selectedLocation" :map="Indonesia"/>
          </form>
        </div>
        <div v-for="item in locations">
          <div v-if="selectedLocation == item.id" class="absolute top-8 left-12 bg-white border drop-shadow p-4">
            <h2 class="h3">{{ item.name }}</h2>
            <p>Smart City : {{ item.smartCity }}</p>
            <p>Elektronifikasi : {{ item.elektronifikasi }}</p>
            <p>Konektivitas : {{ item.konektivitas }}</p>
            <p>Penetrasi Internet : {{ item.penetrasiInternet }}</p>
            <p>Literasi Digital : {{ item.literasiDigital }}</p>
            <p>Kepemilikan Komputer / Smartphone : {{ item.komputer }}</p>
          </div>
        </div>
        <div class="sm:px-16">
          <GlobalsAccordion
            v-for="(item, index) in provinsi"
            :key="item.id"
            :item="item"
            :active-index="currentlyActiveIndex"
            :item-index="index"
            :selectedLocation="selectedLocation"
            @update:itemIndex="currentlyActiveIndex = $event"
          ></GlobalsAccordion>
        </div>
        <!-- <div class="py-40 bg-no-repeat bg-cover px-6 lg:px-8 -mx-6 lg:-mx-8" :style="{ backgroundImage: `url(${backgroundUrl})` }">
          <div class="container">
            <div>
              <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">Transformasi Digital di Indonesia</h2>
              <p class="w-160 mt-6 text-lg leading-8 text-gray-600">Teknologi menjadi kunci kemajuan sebuah negara di era digital ini, bagaimana transformasi digital tiap daerah di Indonesia?</p>
              <div class="mt-8 flex gap-x-4 sm:justify-start">
                <a href="#" class="inline-block rounded-lg bg-red-800 px-4 py-1.5 text-base leading-7 text-white shadow-sm hover:bg-red-700">
                  Pelajari lebih lanjut
                </a>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </main>
  </div>
</template>

<script>
import { components } from '~/slices'
import backgroundUrl from "~/assets/images/background-example.jpg"
import { RadioSvgMap } from "vue-svg-map";
import Indonesia from "@svg-maps/indonesia";

export default {
  layout: 'default',
  components: {
		RadioSvgMap,
	},
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
    const { results: provinsi } = await $prismic.api.query(
      $prismic.predicate.at('document.type', 'provinsi' ),{})
    await store.dispatch('prismic/load')
    return {
        article,
        laporan,
        provinsi
    }
  },
  data () {
    return {
      components,
      subnavigation: [
            { name: 'Home', href: '#' },
            { name: 'Infografik', href: '#' },
            { name: 'Laporan Terkini', href: '#' },
      ],
      locations: [
          { 
            id: 'id-jk', 
            name: 'DKI Jakarta', 
            smartCity: true, 
            elektronifikasi : true, 
            konektivitas : true, 
            penetrasiInternet : true, 
            literasiDigital : true, 
            komputer : true  
          }
      ],
      myItems: [
        {
          title: 'Provinsi DKI Jakarta',
          value: 'Hello',
          category: 'Pulau Jawa'
        },
        {
          title: 'How long is a day and year on Venus?',
          value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.',
          category: 'Pulau Jawa'
        },
        {
          title: 'What animal smells like popcorn?',
          value: 'Binturongs smell like popcorn.',
          category: 'Pulau Sumatera'
        }
      ],
      list: [
        { id: 1, name: 'hello' },
        { id: 2, name: 'world' },
        { id: 3, name: 'swag' },
      ],
      currentlyActiveIndex: null,
      backgroundUrl,
      Indonesia,
      selectedLocation: null,
      province:null
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
      title: `Wawasan Regional | Innovating Indonesia`
    }
  }
}
</script>
<style src="vue-svg-map/dist/index.css"></style>
<style>
.svg-map__location{
  fill: rgb(248 113 113);
}
.svg-map__location[aria-checked="true"] {
    fill: #03ca21;
}
.accordion-head, .accordion-content {
  background: white !important;
}
</style>