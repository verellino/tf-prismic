<template>
  <div id="app" class="font-sans text-gray-800">
    <header class="bg-white z-10 absolute w-full shadow-sm">
      <nav
        class="mx-auto px-8 flex flex-wrap justify-between items-center py-5"
      >
        <div class="mb-0 lg:mb-6 xl:mb-0 flex">
          <router-link :to="`/`" class="font-bold flex items-end mr-8">
            <img src="#" alt="logo" class="w-10" />
            <span>TF</span>
          </router-link>
        </div>
        <div class="lg:block hidden">
          <ul
            class="capitalize tracking-wide w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
            :class="menuOpen ? 'block' : 'hidden'"
          >
            <li class="mr-8 mb-6 lg:mb-0">
              <GlobalsMegaNav />
            </li>
            <li class="mr-8 mb-6 lg:mb-0">
              <router-link :to="`/about`" class="hover:text-blue-900">Government</router-link>
            </li>
            <li class="mr-8 mb-6 lg:mb-0">
              <router-link :to="`/`" class="hover:text-blue-900">Technology</router-link>
            </li>
            <li class="mr-8 mb-6 lg:mb-0">
              <router-link :to="`/about`" class="hover:text-blue-900">Resources</router-link>
            </li>
            <!-- <li>
              <GlobalsDropdownMenu />
            </li> -->
          </ul>
        </div>
        <div class="block lg:hidden">
          <button
            @click="toggleMenu"
            class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
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
