<template>
  <div class="py-8">
    <SliceZone :slices="page.data.slices" :components="components" />
  </div>
</template>

<script>
import { components } from '~/slices'

export default {
  async asyncData ({ $prismic, params, store }) {
    const page = await $prismic.api.getByUID('page', params.uid)
    await store.dispatch('prismic/load')
    return {
      page
    }
  },
  data () {
    return {
      components
    }
  },
  head () {
    return {
      title: `${this.$prismic.asText(this.page.data.title)} | Innovating Indonesia`
    }
  }
}
</script>
