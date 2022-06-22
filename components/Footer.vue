<template>
  <div class="w-full text-white bg-dark-blue">
    <div class="grid grid-rows-1 md:grid-flow-col p-4 py-12 md:p-16 gap-8 md:gap-24">
      <div> 
        <h2>Transforming Futures</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <span class="h4">Lorem</span>
        <ul class="mt-6">
          <li class="mb-4"><nuxt-link to="/">Ipsum</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/">Dolor</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/">et</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/">Ipsum</nuxt-link></li>
        </ul>
      </div>
      <div>
        <span class="h4">Lorem</span>
        <ul class="mt-6">
          <li class="mb-4"><nuxt-link to="/">Ipsum</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/">Dolor</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/">et</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/">Ipsum</nuxt-link></li>
        </ul>
      </div>
      <div>
        <span class="h4">Lorem</span>
        <ul class="mt-6">
          <li class="mb-4"><nuxt-link to="/">Ipsum</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/">Dolor</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/">et</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/">Ipsum</nuxt-link></li>
        </ul>
      </div>
      <!-- <SignUpForm v-if="withSignUpForm" :settings="settings" /> -->
      <!-- <div class="mx-auto w-full max-w-3xl text-center text-xxs font-semibold tracking-tight text-slate-500">
        Proudly published using <a href="https://prismic.io" class="text-slate-700">Prismic</a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    withSignUpForm: {
      type: Boolean,
      default: true
    },
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
