<template>
  <div>
    <div class="container">
      <div
        class="hero-banner flex flex-col-reverse mx-auto sm:flex-row justify-center items-center p-10 pt-40 sm:pt-20 pb-4"
      >
        <div
          class="hero-text text-left sm:w-1/2 h-full flex flex-col justify-center"
        >
          <h1 class="title">Innovating Indonesia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo
            quam, non iusto eius veritatis id porro!
          </p>
          <button class="bg-dark-blue rounded-md p-2 text-white mt-4 w-32">Button</button>
        </div>
        <div class="w-1/2 flex justify-center align-center">
         <div class="w-full aspect-square">
           <img src="@/assets/images/Hero-img.png" alt="Innovating Indonesia" class="p-4 h-30 mx-auto sm:h-60" />
         </div>
        </div>
      </div>
    </div>
    <BlogsFeaturedwImgBlog :articles="featuredArticles" />
    <BlogsLatestGrid :articles="articles" />
    <BlogsCategoryGrid :articles="articles" :categories="categories" />
    <section class="featured-blogs relative">
      <h2 class="text-center pt-6">Tren Terkini</h2>
      <BlogsSwiper :articles="articles" />
    </section>
    <section>
      <div class="container py-12 text-center">
        <h2>Mitra</h2>
        <div class="flex flex-wrap w-full justify-evenly my-8">
          <div class="h-20 w-20 rounded-full m-8 md:mr-6 bg-neutral-500"></div>
          <div class="h-20 w-20 rounded-full m-8 md:mr-6 bg-neutral-500"></div>
          <div class="h-20 w-20 rounded-full m-8 md:mr-6 bg-neutral-500"></div>
          <div class="h-20 w-20 rounded-full m-8 md:mr-6 bg-neutral-500"></div>
          <div class="h-20 w-20 rounded-full m-8 md:mr-6 bg-neutral-500"></div>
          <div class="h-20 w-20 rounded-full m-8 md:mr-6 bg-neutral-500"></div>
        </div>
      </div>
    </section>
    <section>
      <!-- Contact Form  -->
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
        ].map(({ field, direction }) => `${field} ${direction}`).join(', ')
        }]`,
        pageSize: 100
      }
    )
    const { results: featuredArticles } = await $prismic.api.query(
      $prismic.predicate.at('my.article.featured', true),
      {
        orderings: `[${[
          { field: 'my.article.publishDate', direction: 'desc' },
          { field: 'document.first_publication_date', direction: 'desc' }
        ].map(({ field, direction }) => `${field} ${direction}`).join(', ')
        }]`,
        pageSize: 9
      }
    )

    const { results: categories } = await $prismic.api.query(
      $prismic.predicate.at('document.type', 'category'),
    )

    await store.dispatch('prismic/load')
    store.commit('layout/setWithHeaderProfile', true)
    store.commit('layout/setWithHeaderDivider', false)
    store.commit('layout/setWithFooterSignUpForm', true)
    return {
      articles,
      featuredArticles,
      categories
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
