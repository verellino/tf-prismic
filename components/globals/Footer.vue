<template>
  <div class="w-full text-white font-normal bg-dark-maroon">
    <div class="grid grid-rows-1 md:grid-cols-10 md:grid-flow-col p-4 py-12 md:px-16 gap-8">
      <div class="col-span-2 pr-8"> 
        <img src="/Logo-White-Text.png" alt="logo TF">
      </div>
      <div class="col-span-2">
        <span class="h5 uppercase font-bold text-light-gray">Innovating Indonesia</span>
        <ul class="mt-4">
          <li class="mb-4"><nuxt-link to="/news" class="font-normal text-sm">Berita</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/articles" class="font-normal text-sm">Artikel</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Video</nuxt-link></li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h5 uppercase font-bold text-light-gray">Perusahaan</span>
        <ul class="mt-4">
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Tentang Kami</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Kontak</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Kebijakan Privasi</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Tentang Layanan</nuxt-link></li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h5 uppercase font-bold text-light-gray">Layanan</span>
        <ul class="mt-4">
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Riset</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Pelatihan</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Konsultasi</nuxt-link></li>
          <li class="mb-4"><nuxt-link to="/" class="font-normal text-sm">Mentoring</nuxt-link></li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h5 uppercase font-bold text-light-gray">Media Sosial</span>
        <ul class="mt-2 flex justify-start flex-wrap">
          <li class="mb-4 mr-4"><nuxt-link to="/" class="font-normal text-sm"><i class="mr-2 fab fah fa-lg fa-instagram"></i></nuxt-link></li>
          <li class="mb-4 mr-4"><nuxt-link to="/" class="font-normal text-sm"><i class="mr-2 fab fah fa-lg fa-facebook-f"></i></nuxt-link></li>
          <li class="mb-4 mr-4"><nuxt-link to="/" class="font-normal text-sm"><i class="mr-2 fab fah fa-lg fa-linkedin"></i></nuxt-link></li>
          <li class="mb-4 mr-4"><nuxt-link to="/" class="font-normal text-sm"><i class="mr-2 fab fah fa-lg fa-whatsapp"></i></nuxt-link></li>
        </ul>
      </div>
      <!-- <SignUpForm v-if="withSignUpForm" :settings="settings" /> -->
      <!-- <div class="mx-auto w-full max-w-3xl text-center text-xxs font-bold tracking-tight text-slate-500">
        Proudly published using <a href="https://prismic.io" class="text-slate-700">Prismic</a>
      </div> -->
    </div>
    <div class="flex flex-col md:flex-row justify-between text-xxs p-4 md:px-16">
      <span>Copyright © 2022 Innovating Indonesia</span>
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
