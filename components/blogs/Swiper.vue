<template>
  <div class="py-8 px-12">
    <client-only>
      <div class="carousel__mobile block md:hidden">
        <VueSlickCarousel v-bind="slickOptionsMobile">
          <ul v-for="article in articles" :key="article.id">
            <ArticleGridItemWithImg :article="article" class="px-1" />
          </ul>
          <template #prevArrow="arrowOption">
            <div class="custom-arrow absolute top-1/2 -left-12 h-4 w-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                  d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
                />
              </svg>
            </div>
          </template>
          <template #nextArrow="arrowOption">
            <div class="custom-arrow absolute top-1/2 right-0 h-4 w-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                  d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
                />
              </svg>
            </div>
          </template>
          <template #customPaging="page">
            <div class="custom-dot">
              <svg width="14px" height="14px" viewBox="0 0 16 16">
                <g id="surface1">
                  <path
                    style="fill: currentColor"
                    d="M 8 14.667969 C 7.089844 14.667969 6.226562 14.492188 5.417969 14.140625 C 4.605469 13.792969 3.898438 13.3125 3.292969 12.707031 C 2.6875 12.101562 2.207031 11.394531 1.859375 10.582031 C 1.507812 9.773438 1.332031 8.910156 1.332031 8 C 1.332031 7.078125 1.507812 6.210938 1.859375 5.398438 C 2.207031 4.589844 2.6875 3.882812 3.292969 3.285156 C 3.898438 2.683594 4.605469 2.207031 5.417969 1.859375 C 6.226562 1.507812 7.089844 1.332031 8 1.332031 C 8.921875 1.332031 9.789062 1.507812 10.601562 1.859375 C 11.410156 2.207031 12.117188 2.683594 12.714844 3.285156 C 13.316406 3.882812 13.792969 4.589844 14.140625 5.398438 C 14.492188 6.210938 14.667969 7.078125 14.667969 8 C 14.667969 8.910156 14.492188 9.773438 14.140625 10.582031 C 13.792969 11.394531 13.316406 12.101562 12.714844 12.707031 C 12.117188 13.3125 11.410156 13.792969 10.601562 14.140625 C 9.789062 14.492188 8.921875 14.667969 8 14.667969 Z M 8 14.667969 "
                  />
                </g>
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
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                  d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
                />
              </svg>
            </div>
          </template>
          <template #nextArrow="arrowOption">
            <div class="custom-arrow absolute top-1/2 -right-4 h-4 w-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                  d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
                />
              </svg>
            </div>
          </template>
          <template #customPaging="page">
            <div class="custom-dot">
              <svg width="14px" height="14px" viewBox="0 0 16 16">
                <g id="surface1">
                  <path
                    style="fill: currentColor"
                    d="M 8 14.667969 C 7.089844 14.667969 6.226562 14.492188 5.417969 14.140625 C 4.605469 13.792969 3.898438 13.3125 3.292969 12.707031 C 2.6875 12.101562 2.207031 11.394531 1.859375 10.582031 C 1.507812 9.773438 1.332031 8.910156 1.332031 8 C 1.332031 7.078125 1.507812 6.210938 1.859375 5.398438 C 2.207031 4.589844 2.6875 3.882812 3.292969 3.285156 C 3.898438 2.683594 4.605469 2.207031 5.417969 1.859375 C 6.226562 1.507812 7.089844 1.332031 8 1.332031 C 8.921875 1.332031 9.789062 1.507812 10.601562 1.859375 C 11.410156 2.207031 12.117188 2.683594 12.714844 3.285156 C 13.316406 3.882812 13.792969 4.589844 14.140625 5.398438 C 14.492188 6.210938 14.667969 7.078125 14.667969 8 C 14.667969 8.910156 14.492188 9.773438 14.140625 10.582031 C 13.792969 11.394531 13.316406 12.101562 12.714844 12.707031 C 12.117188 13.3125 11.410156 13.792969 10.601562 14.140625 C 9.789062 14.492188 8.921875 14.667969 8 14.667969 Z M 8 14.667969 "
                  />
                </g>
              </svg>
            </div>
          </template>
        </VueSlickCarousel>
      </div>
    </client-only>
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