<template>
  <div class="py-8 px-12">
    <div class="carousel__mobile block md:hidden">
      <VueSlickCarousel v-bind="slickOptionsMobile">
        <ul v-for="article in articles" :key="article.id">
          <ArticleGridItemWithImg :article="article" class="px-1" />
        </ul>
        <template #prevArrow="arrowOption">
          <div class="custom-arrow absolute top-1/2 -left-8 h-4 w-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/></svg>
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="custom-arrow absolute top-1/2 -right-8 h-4 w-4">
           <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/></svg>
          </div>
        </template>
        <template #customPaging="page">
          <div class="custom-dot">
            <svg height="40" width="40">
              <circle cx="40" cy="40" r="40" fill="inherit" />
            </svg>
          </div>
        </template>
      </VueSlickCarousel>
    </div>

    <div class="carousel__desktop hidden md:block">
      <VueSlickCarousel v-bind="slickOptions">
        <ul v-for="article in articles" :key="article.id">
          <ArticleGridItemWithImg :article="article" class="px-1" />
        </ul>
        <template #prevArrow="arrowOption">
          <div class="custom-arrow absolute top-1/2 -left-12 h-4 w-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/></svg>
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="custom-arrow absolute top-1/2 -right-4 h-4 w-4">
           <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/></svg>
          </div>
        </template>
        <template #customPaging="page">
          <div class="custom-dot">
            <svg height="24" width="24">
              <circle cx="12" cy="12" r="8" fill="inherit" />
            </svg>
          </div>
        </template>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules

export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 2,
        arrows: true,
        infinite: false,
        dots: true,
      },
      slickOptionsMobile: {
        slidesToShow: 1,
        arrows: true,
        infinite: false,
        dots: true,
      },
    };
  },
  mounted() {},
};
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