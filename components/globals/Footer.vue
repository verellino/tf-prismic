<template>
  <div class="w-full bg-red-800 font-normal text-white footer">
    <div
      class="grid grid-rows-1 gap-8 p-4 py-12 md:gap-7 md:grid-flow-col md:grid-cols-12 md:px-16"
    >
      <nuxt-link to="/" class="col-span-2 sm:col-span-3 sm:-m-4">
        <img src="/Logo-White-Text.png" alt="logo TF" class="w-full" />
      </nuxt-link>
      <div class="hidden sm:block sm:col-span-1"></div>
      <div class="col-span-2">
        <span class="text-xs font-bold uppercase text-light-gray"
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
            <nuxt-link to="/coming-soon" class="text-xs font-normal">Video</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="text-xs font-bold uppercase text-light-gray">Perusahaan</span>
        <ul class="mt-4">
          <li class="mb-2">
            <nuxt-link to="/tentang-kami" class="text-xs font-normal"
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
            <nuxt-link to="/coming-soon" class="text-xs font-normal"
              >Tentang Layanan</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <span class="text-xs font-bold uppercase text-light-gray">Layanan</span>
        <ul class="mt-4">
          <li class="mb-2">
            <nuxt-link to="/coming-soon" class="text-xs font-normal">Riset</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/training" class="text-xs font-normal">Pelatihan</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/menata" class="text-xs font-normal">Mentoring</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/coming-soon" class="text-xs font-normal">Konsultasi</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-span-2">
        <!-- <span class="text-xs font-bold uppercase text-light-gray">Media Sosial</span> -->
        <!-- <SignUpForm :settings="settings" /> -->
        <form 
          name="newsletter"
          action="/thanks-newsletter"
          method="post"
          netlify
          netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <div
              class="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start"
            >
            <span class="text-xs font-bold uppercase text-light-gray">Newsletter</span>
              <label for="email" class="sr-only">Email</label>
              <div>
                <input
                  class="w-full px-4 py-2 bg-white border-gray-200 text-xs text-slate-900 mb-2"
                  type="email"
                  name="email"
                  placeholder="Email" required
                />
                <button
                  class="block w-full p-2 font-medium transition text-xs bg-dark-maroon text-white"
                  type="submit"
                >
                  <i class="fa fa-envelope" aria-hidden="true"></i> Subscribe
                </button>
              </div>
            </div>
        </form>
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
              ><i class="fab fah fa-lg fa-twitter mr-2"></i
            ></nuxt-link>
          </li>
        </ul>
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

<style scoped>
.footer, .footer ul, .footer li, .footer a {
  color: white;
}
</style>