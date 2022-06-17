<template>
  <div>
    <div class="container">
      <div
        class="hero-banner flex flex-col-reverse mx-auto sm:flex-row justify-center items-center p-10 pt-40 sm:pt-20 pb-4"
      >
        <div
          class="hero-text text-left sm:w-1/2 h-full flex flex-col justify-center"
        >
          <h1 class="title">Transforming Futures</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo
            quam, non iusto eius veritatis id porro!
          </p>
          <button class="bg-dark-blue rounded-sm p-2 text-white mt-4 w-32">Button</button>
        </div>
        <div class="w-1/2 flex justify-center align-center">
         <div class="w-full aspect-square">
           <img src="@/assets/images/Hero-img.png" alt="Transforming Futures" class="p-4 h-30 mx-auto sm:h-60" />
         </div>
        </div>
      </div>
    </div>
    <BlogsFeaturedBlog :articles="articles" />
    <BlogsLatestGrid :articles="articles" />
    <BlogsCategoryGrid :articles="articles" />
    <section>
      <h2 class="text-center featured-blogs pt-6 -mb-12">Now Trending</h2>
      <BlogsThreeCol :articles="articles" />
    </section>
    <section>
      <div class="container py-24 text-center">
        <h2>Our Partners</h2>
        <div class="flex w-full justify-evenly mt-24">
          <div class="h-20 w-20 rounded-full bg-neutral-500"></div>
          <div class="h-20 w-20 rounded-full bg-neutral-500"></div>
          <div class="h-20 w-20 rounded-full bg-neutral-500"></div>
          <div class="h-20 w-20 rounded-full bg-neutral-500"></div>
          <div class="h-20 w-20 rounded-full bg-neutral-500"></div>
          <div class="h-20 w-20 rounded-full bg-neutral-500"></div>
        </div>
      </div>
    </section>
    <section>
      <!-- Contact Form  -->
      <div class="container text-center py-32 px-16">
        <h2>Contact Us</h2>
        <form action="#" method="POST">
          <div class="overflow-hidden sm:rounded-md text-left mt-8">
            <div class="px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >First name</label
                  >
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="mt-1 h-12 px-4 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-2 border-gray-500 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Email address</label
                  >
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    class="mt-1 h-12 px-4 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-2 border-gray-500 rounded-md"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Lorem</label
                  >
                  <input
                    type="text"
                    name="lorem"
                    id="lorem"
                    autocomplete="lorem"
                    class="mt-1 h-72 px-4 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-2 border-gray-500 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button
                type="submit"
                class="inline-flex w-1/2 justify-center py-4 px-8 border border-transparent shadow-sm font-medium rounded-md text-white bg-dark-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ $prismic, store }) {
    const { results: articles } = await $prismic.api.query(
      $prismic.predicate.at('document.type', 'article'),
      {
        orderings: `[${[
          { field: 'my.article.publishDate', direction: 'desc' },
          { field: 'document.first_publication_date', direction: 'desc' }
        ].map(({ field, direction }) => `${field} ${direction}`).join(', ')}]`,
        pageSize: 100
      }
    )
    await store.dispatch('prismic/load')
    store.commit('layout/setWithHeaderProfile', true)
    store.commit('layout/setWithHeaderDivider', false)
    store.commit('layout/setWithFooterSignUpForm', true)
    return {
      articles
    }
  },
  head () {
    return {
      title: this.$prismic.asText(this.$store.state.prismic.settings.data.name)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 749px) {
  .hero-banner {
    /* height: 40vh; */
  }
}
</style>
