<template>
<form action="/search" class="flex relative">
  <input
    type="search"
    name="search"
    id="search"
    placeholder="Search"
    v-model="searchinput"
    class="relative w-full outline outline-1 outline-gray-400 rounded-md p-2 pl-8 text-sm appearance-none focus:outline-red-800 active:outline-none"
  />
  <svg
        fill="none"
        stroke="#991b1b"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="absolute left-2 top-2 w-4 h-4"
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
  <button
    type="submit"
    class="ml-1 text-red-800 outline-none hover:text-black focus:outline-none active:outline-none"
  ></button>
  
</form>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      searchinput: null
    }
  },
  props: {
    currentinput: {
      type: String,
      default: null
    }
  },
  created() {
    if (this.currentinput !== null) {
      this.searchinput = this.currentinput
    }
  }
}
</script>