<template>
  <div>
    <div class="pt-20">
    <client-only> 
        <SliceZone :slices="page.data.slices" :components="components" />
        <MentorGrid :mentorPublic="mentorPublic" :mentorPrivate="mentorPrivate" />
        <!-- <div class="p-20"><h1>Public</h1>{{mentorPrivate}}</div>
        <div class="p-20"><h1>Private</h1>{{mentorPublic}}</div> -->
    </client-only>
      
    </div>
    </div>
  </div>
</template>

<script>
import { components } from '~/slices'
export default {
  async asyncData ({ $prismic, store }) {
    const page = await $prismic.api.getByUID('page', 'menata')
    const { results: mentorPublic } = await $prismic.api.query(
      $prismic.predicate.at("my.mentor.sector", "Public"),
    );
    const { results: mentorPrivate } = await $prismic.api.query(
      $prismic.predicate.at("my.mentor.sector", "Private"),
    );
    await store.dispatch('prismic/load')
    return {
      page,
      mentorPublic,
      mentorPrivate
    }
  },
  data () {
    return { components }
  },
  head () {
    return {
      title: this.$prismic.asText(this.page.data.title)
    }
  }
}
</script>