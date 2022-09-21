<template>
  <div id="app" class="relative font-sans text-gray-800">
    <header class="bg-white z-10 absolute w-full shadow-sm">
      <nav
        class="mx-auto px-8 flex flex-wrap justify-between items-center py-2"
      >
        <div class="mb-0 lg:mb-6 xl:mb-0 flex w-40">
          <router-link :to="`/`" class="font-bold flex items-end mr-8">
            <img src="/Logo.png" alt="logo" class="object-cover"/>
          </router-link>
        </div>
        <ul
            class="capitalize tracking-wide w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
            :class="menuOpen ? 'block' : 'hidden'"
          >
            <li class="sm:mr-8 mb-6 lg:mb-0">
              <GlobalsEcoMegaNav />
            </li>
            <li class="sm:mr-8 mb-6 lg:mb-0">
              <GlobalsGovMegaNav />
            </li>
            <li class="sm:mr-8 mb-6 lg:mb-0">
              <GlobalsTechMegaNav />
            </li>
            <li class="sm:mr-8 mb-6 lg:mb-0">
              <GlobalsResourcesMegaNav />
            </li>
            <li class="sm:mr-8 mb-6 lg:mb-0">
              <GlobalsProgramsMegaNav />
            </li>
            <li>
              <GlobalsSearchForm />
            </li>
          </ul>
        <div class="block absolute top-5 right-8  sm:relative lg:hidden">
          <button
            @click="toggleMenu"
            class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-dark-blue hover:border-gray-600"
          >
            <svg
              class="current-color h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fill="gray"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>
