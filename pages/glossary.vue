<template>
  <div class="pt-20">
    <div class="container text-center py-12">
        <h1>Glossary</h1>
    </div>
    <div class="container flex">
        <!-- Right Column -->
        <div class="w-2/3">
            <!-- Glossary Grid by Letter -->
            <div>
                <div v-for="g in glossary" :key="g.id" class="glossary-item py-10">
                    <h3 class="mb-2">{{ g.data.title }}</h3>
                    <p>{{ $prismic.asText(g.data.description) }}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData ({ $prismic }) {
    const { results: glossary } = await $prismic.api.query(
      $prismic.predicate.at('document.type', 'glossary'),
        {orderings: "[my.glossary.title]"}
    )
      
    return {
      glossary
    }
    }
}
</script>

<style>

</style>