<template>
  <div v-if="selectedLocation === item.data.provinceID" class="px-16 mb-8">
    <button @click="updateIndex"><h2 class="font-semibold">{{ item.data.province }}</h2></button>
    <!-- <div v-show="activeIndex === itemIndex"> -->
    <div>
        <div class="my-4">
            <h3 class="h4">Smart City</h3>
            <prismic-rich-text :field="item.data.smartCity" />
        </div>
        <div class="my-4">
            <h3 class="h4">Elektronifikasi</h3>
            <prismic-rich-text :field="item.data.elektronifikasi" />
        </div>
        <div class="my-4">
            <h3 class="h4">Konektivitas</h3>
            <prismic-rich-text :field="item.data.konektivitas" />
        </div>
        <div class="my-4">
            <h3 class="h4">Penetrasi Internet</h3>
            <prismic-rich-text :field="item.data.penetrasi" />
        </div>
        <div class="my-4">
            <h3 class="h4">Literasi Digital</h3>
            <prismic-rich-text :field="item.data.literasiDigital" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    activeIndex: {
      type: Number,
      default: null,
    },
    itemIndex: {
      type: Number,
      default: null,
    },
    selectedLocation: {
      type: String,
      default: null
    }
  },
  methods: {
    updateIndex() {
      console.log('index updated:', this.itemIndex)
      this.$emit('update:itemIndex', this.itemIndex)
    },
  },
}
</script>