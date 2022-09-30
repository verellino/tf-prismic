<template>
  <div class="w-full bg-red-800 font-normal text-white">
    <div
      class="grid grid-rows-1 gap-8 p-4 py-12 md:grid-flow-col md:grid-cols-10 md:px-16"
    >
      <div class="col-span-2 pr-8 -m-4">
        <img src="/Logo-White-Text.png" alt="logo TF" />
        <ul class="ml-2 mt-6 flex gap-6">
          <li class="mb-2">
            <nuxt-link to="/" class="text-xs font-normal"
              ><i class="fab fah fa-lg fa-instagram mr-2"></i
            ></nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/" class="text-xs font-normal"
              ><i class="fab fah fa-lg fa-facebook-f mr-2"></i
            ></nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/" class="text-xs font-normal"
              ><i class="fab fah fa-lg fa-linkedin mr-2"></i
            ></nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/" class="text-xs font-normal"
              ><i class="fab fah fa-lg fa-whatsapp mr-2"></i
            ></nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h5 font-bold uppercase text-light-gray"
          >Innovating Indonesia</span
        >
        <ul class="mt-4">
          <li class="mb-2">
            <nuxt-link to="/news" class="text-xs font-normal">Berita</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/articles" class="text-xs font-normal"
              >Artikel</nuxt-link
            >
          </li>
          <li class="mb-2">
            <nuxt-link to="/" class="text-xs font-normal">Video</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h5 font-bold uppercase text-light-gray">Perusahaan</span>
        <ul class="mt-4">
          <li class="mb-2">
            <nuxt-link to="/" class="text-xs font-normal"
              >Tentang Kami</nuxt-link
            >
          </li>
          <li class="mb-2">
            <nuxt-link to="/contact" class="text-xs font-normal">Kontak</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/kebijakan-privasi" class="text-xs font-normal"
              >Kebijakan Privasi</nuxt-link
            >
          </li>
          <li class="mb-2">
            <nuxt-link to="/" class="text-xs font-normal"
              >Tentang Layanan</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="h5 font-bold uppercase text-light-gray">Layanan</span>
        <ul class="mt-4">
          <li class="mb-2">
            <nuxt-link to="/" class="text-xs font-normal">Riset</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/training" class="text-xs font-normal">Pelatihan</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/" class="text-xs font-normal">Konsultasi</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/menata" class="text-xs font-normal">Mentoring</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <!-- <span class="h5 font-bold uppercase text-light-gray">Media Sosial</span> -->
        <!-- <SignUpForm :settings="settings" /> -->
        <form 
          action="/api/sign-up"
          method="post"
          >
            <div
              class="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start"
            >
            <span class="text-xs font-bold uppercase text-light-gray">Daftar newsletter kami</span>
              <label for="email" class="sr-only">Email</label>

              <input
                class="w-full px-4 py-2 bg-white border-gray-200 rounded-md shadow-sm text-xs text-slate-900"
                type="email"
                placeholder="Email"
              />

              <button
                class="block px-4 py-2 font-medium text-maroon transition bg-white rounded-md text-xs hover:bg-dark-maroon hover:text-white hover:border hover:border-maroon"
                type="submit"
              >
                <i class="fa fa-envelope mr-2" aria-hidden="true"></i> Subscribe
              </button>
            </div>
          </form>
      </div>
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
  name: 'main-footer',
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