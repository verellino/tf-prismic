<template>
  <div class="py-8 px-12">
    <VueSlickCarousel v-bind="slickOptions">
        <ul v-for="article in articles.slice(0,6)" :key="article.id">
            <ArticleGridItemWithImg :article="article" class="px-1" />
        </ul>
        <template #prevArrow="arrowOption">
          <div class="custom-arrow absolute top-1/2 -left-8 h-4 w-4">
            <img src="~/assets/images/left-chev.png" alt="">
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="custom-arrow absolute top-1/2 -right-8 h-4 w-4">
            <img src="~/assets/images/right-chev.png" alt="">
          </div>
        </template>
    </VueSlickCarousel>
  </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules

export default {
    props: {
        articles: {
        type: Array,
        required: true
        }
    },
    data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: true
      }
    }
  },
   mounted() {
    
  },
}
</script>

<style lang="css" scoped>
.swiper {
  width: 100%;
  height: 100%;
  padding: auto 3rem !important;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
</style>