<template>
  <div @mouseover="showMenu" @mouseleave="hideMenu" class="relative">
    <nuxt-link
      to="/"
      class="link_underline relative hover:font-semibold hover:text-red-800"
      @focus="showMenu"
      @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      Program
      <span class="float-right ml-2 w-6"
        ><img src="~assets/images/bottom-chev.svg" alt="expand more"
      /></span>
    </nuxt-link>

    <div class="absolute w-full">&nbsp;</div>
    <transition name="mega-menu-fade">
      <div
        v-show="isVisible"
        class="mega-menu absolute right-0 z-30 mt-4 hidden w-full overflow-hidden rounded-md border bg-white font-normal normal-case shadow-md sm:block lg:z-10 lg:w-80"
      >
        <div class="flex flex-col lg:flex-row">
          <ul class="w-full">
            <li
              class="border-blogs-bottom p-4 hover:bg-dark-maroon hover:font-bold hover:text-white"
            >
              <a
                href="/events"
                class="group flex"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent=""
              >
                <span class="ml-2">
                  <span class="block items-center">Event</span>
                </span>
              </a>
            </li>
            <li
              class="border-blogs-bottom p-4 hover:bg-dark-maroon hover:font-bold hover:text-white"
            >
              <a
                href="/training"
                class="group flex"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                <span class="ml-2">
                  <span class="block">Pelatihan</span>
                </span>
              </a>
            </li>
            <li
              class="border-blogs-bottom p-4 hover:bg-dark-maroon hover:font-bold hover:text-white"
            >
              <a
                href="/menata"
                class="group flex"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                <span class="ml-2">
                  <span class="block">Mentoring</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <div
      v-show="isVisible"
      class="mega-menu borderfont-normal right-0 z-30 mt-4 w-full overflow-hidden normal-case sm:hidden"
    >
      <div class="-mx-4 flex flex-col border-b px-8 py-6 lg:flex-row">
        <ul class="w-full">
          <li class="mb-8">
            <nuxt-link
              to="/events"
              class="group flex"
              @keydown.esc.exact="hideMenu"
              @keydown.tab.exact="focusNext(false)"
              @keydown.down.exact.prevent="focusNext(true)"
              @keydown.up.exact.prevent=""
            >
              <span class="ml-2">
                <span class="block items-center group-hover:text-red-800"
                  >Events</span
                >
              </span>
            </nuxt-link>
          </li>
          <li class="mb-8">
            <a
              href="/training"
              class="group flex"
              @keydown.esc.exact="hideMenu"
              @keydown.tab.exact="focusNext(false)"
              @keydown.down.exact.prevent="focusNext(true)"
              @keydown.up.exact.prevent=""
            >
              <span class="ml-2">
                <span class="block items-center group-hover:text-red-800"
                  >Pelatihan</span
                >
              </span>
            </a>
          </li>
          <li class="mb-8">
            <a
              href="/menata"
              class="group flex"
              @keydown.esc.exact="hideMenu"
              @keydown.tab.exact="focusNext(false)"
              @keydown.shift.tab="focusPrevious(false)"
              @keydown.up.exact.prevent="focusPrevious(true)"
              @keydown.down.exact.prevent="focusNext(true)"
            >
              <span class="ml-2">
                <span class="block group-hover:text-red-800">Mentoring</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.menuItems = document.querySelectorAll(".mega-menu a");
  },
  data() {
    return {
      isVisible: false,
      menuItems: null,
      focusedIndex: 0,
    };
  },
  methods: {
    showMenu() {
      this.isVisible = true;
    },
    hideMenu() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      this.menuItems[0].focus();
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.menuItems[this.focusedIndex].focus();
    },
  },
};
</script>

<style scoped>
/* .mega-menu{
  width: calc(100vw - 16px);
} */
.mega-menu-fade-enter-active,
.mega-menu-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.mega-menu-fade-enter,
.mega-menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>