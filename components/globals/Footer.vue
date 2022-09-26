<template>
  <div class="w-full bg-red-800 font-normal text-white">
    <div
      class="grid grid-rows-1 gap-8 p-4 py-12 md:grid-flow-col md:grid-cols-10 md:px-16"
    >
      <div class="col-span-2 pr-8">
        <img src="/Logo-White-Text.png" alt="logo TF" />
      </div>
      <div class="col-span-2">
        <span class="h5 font-bold uppercase text-light-gray"
          >Innovating Indonesia</span
        >
        <ul class="mt-4">
          <li class="mb-4">
            <nuxt-link to="/news" class="text-sm font-normal">Berita</nuxt-link>
          </li>
          <li class="mb-4">
            <nuxt-link to="/articles" class="text-sm font-normal"
              >Artikel</nuxt-link
            >
          </li>
          <li class="mb-4">
            <nuxt-link to="/" class="text-sm font-normal">Video</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h5 font-bold uppercase text-light-gray">Perusahaan</span>
        <ul class="mt-4">
          <li class="mb-4">
            <nuxt-link to="/" class="text-sm font-normal"
              >Tentang Kami</nuxt-link
            >
          </li>
          <li class="mb-4">
            <nuxt-link to="/" class="text-sm font-normal">Kontak</nuxt-link>
          </li>
          <li class="mb-4">
            <nuxt-link to="/" class="text-sm font-normal"
              >Kebijakan Privasi</nuxt-link
            >
          </li>
          <li class="mb-4">
            <nuxt-link to="/" class="text-sm font-normal"
              >Tentang Layanan</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h5 font-bold uppercase text-light-gray">Layanan</span>
        <ul class="mt-4">
          <li class="mb-4">
            <nuxt-link to="/" class="text-sm font-normal">Riset</nuxt-link>
          </li>
          <li class="mb-4">
            <nuxt-link to="/" class="text-sm font-normal">Pelatihan</nuxt-link>
          </li>
          <li class="mb-4">
            <nuxt-link to="/" class="text-sm font-normal">Konsultasi</nuxt-link>
          </li>
          <li class="mb-4">
            <nuxt-link to="/" class="text-sm font-normal">Mentoring</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h5 font-bold uppercase text-light-gray">Media Sosial</span>
        <ul class="mt-2 flex flex-wrap justify-start">
          <li class="mb-4 mr-4">
            <nuxt-link to="/" class="text-sm font-normal"
              ><i class="fab fah fa-lg fa-instagram mr-2"></i
            ></nuxt-link>
          </li>
          <li class="mb-4 mr-4">
            <nuxt-link to="/" class="text-sm font-normal"
              ><i class="fab fah fa-lg fa-facebook-f mr-2"></i
            ></nuxt-link>
          </li>
          <li class="mb-4 mr-4">
            <nuxt-link to="/" class="text-sm font-normal"
              ><i class="fab fah fa-lg fa-linkedin mr-2"></i
            ></nuxt-link>
          </li>
          <li class="mb-4 mr-4">
            <nuxt-link to="/" class="text-sm font-normal"
              ><i class="fab fah fa-lg fa-whatsapp mr-2"></i
            ></nuxt-link>
          </li>
        </ul>
      </div>
      <!-- <SignUpForm v-if="withSignUpForm" :settings="settings" /> -->
      <!-- <div class="mx-auto w-full max-w-3xl text-center text-xxs font-bold tracking-tight text-slate-500">
        Proudly published using <a href="https://prismic.io" class="text-slate-700">Prismic</a>
      </div> -->
    </div>
    <div
      class="flex flex-col justify-between p-4 text-xxs md:flex-row md:px-16"
    >
      <span>Copyright © 2022 Innovating Indonesia</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    withSignUpForm: {
      type: Boolean,
      default: true,
    },
    settings: {
      type: Object,
      required: true,
    },
  },
};
</script>