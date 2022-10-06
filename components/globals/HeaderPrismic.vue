<template>
  <div class="absolute z-10 w-full bg-white font-sans text-gray-800 shadow-sm">
    <nav class="mx-auto sm:flex flex-wrap items-center justify-between px-8 py-5">
      <!-- Logo -->
      <div class="mb-0 sm:mb-6 sm:mr-8 xl:mb-0 flex w-44 overflow-hidden">
        <router-link :to="`/`" class="font-bold flex items-end">
          <PrismicImage :field="navigation.data.logo" class="object-cover w-full object-center"/>
        </router-link>
      </div>
      <!-- Navigation  -->
      <div class="sm:flex justify-between">

        <slice-zone
          :components="components"
          :slices="navigation.data.body"
          class="mt-8 block w-full flex-grow items-center capitalize tracking-wide lg:mt-0 lg:flex lg:w-auto lg:flex-initial list-none"
          :class="menuOpen ? 'block' : 'hidden'"
        />
        <li class="list-none hidden sm:block sm:ml-4">
          <GlobalsSearchForm />
        </li>
      </div>
      <div class="absolute top-5 right-8 block sm:relative lg:hidden">
        <button
          @click="toggleMenu"
          class="flex items-center rounded border border-gray-500 px-3 py-2 hover:border-gray-600 hover:text-red-800"
        >
          <svg
            class="current-color h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import { components } from "~/slices";

export default {
  data: function () {
    return { components, menuOpen: false };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  props: {
    withDivider: {
      type: Boolean,
      default: true,
    },
    withProfile: {
      type: Boolean,
      default: true,
    },
    navigation: {
      type: Object,
      required: true,
    },
  },
};
</script>