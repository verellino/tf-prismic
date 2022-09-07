<template>
  <div class="w-full text-white bg-dark-blue font-normal">
    <div class="grid grid-rows-1 md:grid-cols-10 md:grid-flow-col p-4 py-12 md:px-16 gap-8">
      <div class="col-span-2 pr-8"> 
        <img src="#" alt="logo TF">
      </div>
      <div class="col-span-2">
        <span class="h4 font-semibold text-sigma-green">Innovating Indonesia</span>
        <ul class="mt-6">
          <li class="mb-4"><nuxt-link to="/news" class="font-normal text-sm">Berita</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/articles" class="font-normal text-sm">Artikel</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Video</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Langganan</nuxt-link></li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h4 font-semibold text-sigma-green">Perusahaan</span>
        <ul class="mt-6">
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Tentang</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Kontak</nuxt-link></li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h4 font-semibold text-sigma-green">Inovasi</span>
        <ul class="mt-6">
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">TF Training</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">TF Consulting</nuxt-link></li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h4 font-semibold text-sigma-green">Media Sosial</span>
        <ul class="mt-6 flex justify-between flex-wrap">
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm"><i class="mr-2 fab fah fa-lg fa-instagram"></i></nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm"><i class="mr-2 fab fah fa-lg fa-facebook-f"></i></nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm"><i class="mr-2 fab fah fa-lg fa-linkedin"></i></nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm"><i class="mr-2 fab fah fa-lg fa-whatsapp"></i></nuxt-link></li>
        </ul>
      </div>
      <!-- <SignUpForm v-if="withSignUpForm" :settings="settings" /> -->
      <!-- <div class="mx-auto w-full max-w-3xl text-center text-xxs font-semibold tracking-tight text-slate-500">
        Proudly published using <a href="https://prismic.io" class="text-slate-700">Prismic</a>
      </div> -->
    </div>
    <div class="flex flex-col md:flex-row justify-between text-xxs p-4 md:px-16">
      <span>Copyright © 2022 Innovating Indonesia</span>
      <div>
        <nuxt-link to="/" class="text-xxs">Kebijakan Privasi | </nuxt-link>
        <nuxt-link to="/" class="text-xxs">Tentang Layanan</nuxt-link>
      </div>
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
