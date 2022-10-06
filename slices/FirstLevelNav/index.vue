<template>
  <li class="mb-6 sm:mx-2 lg:mb-0 relative" @mouseover="showMenu" @mouseleave="hideMenu">
    <PrismicRichText :field="slice.primary.title"
      class="link_underline relative hover:font-semibold hover:text-red-800" @focus="showMenu"
      @keydown.shift.tab="hideMenu" @keydown.esc.exact="hideMenu" @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys" />
    <span class="float-right ml-2 w-6"><img src="~assets/images/bottom-chev-maroon.svg" alt="expand more" /></span>
    <div class="absolute w-full">&nbsp;</div>
    <transition name="mega-menu-fade">
      <div v-show="isVisible"
        class="mega-menu right-0 z-30 mt-4 hidden w-full overflow-hidden rounded-md border bg-white font-normal normal-case shadow-md sm:absolute sm:block lg:z-10 lg:w-80">
        <div class="flex flex-col">
          <ul v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="w-full">
            <li v-if="item.secondNavLink.link_type === 'Document'" class="border-blogs-bottom p-4 hover:bg-dark-maroon hover:font-bold hover:text-white">
              <nuxt-link :to="`/category/${item.secondNavLink.id}`" class="group flex" @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)" @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent="">
                <span class="ml-2">
                  <span class="block items-center">{{ item.subcategoryTitle }}</span>
                </span>
              </nuxt-link>
            </li>
            <li v-else class="border-blogs-bottom p-4 hover:bg-dark-maroon hover:font-bold hover:text-white">
              <PrismicLink :field="item.secondNavLink" class="group flex" @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)" @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent="">
                <span class="ml-2">
                  <span class="block items-center">{{ item.subcategoryTitle }}</span>
                </span>
              </PrismicLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <div
      v-show="isVisible"
      class="mega-menu borderfont-normal right-0 z-30 w-full overflow-hidden normal-case sm:hidden"
    >
      <div class="-mx-4 flex flex-col py-2 pl-4">
        <ul v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="w-full">
          <li v-if="item.secondNavLink.link_type === 'Document'" 
            class="py-4 hover:bg-dark-maroon hover:text-white"
          >
            <nuxt-link
              :to="`/category/${item.secondNavLink.id}`"
              class="group flex"
              @keydown.esc.exact="hideMenu"
              @keydown.tab.exact="focusNext(false)"
              @keydown.down.exact.prevent="focusNext(true)"
              @keydown.up.exact.prevent=""
            >
              <span class="ml-2">
                <span class="block items-center">{{ item.subcategoryTitle }}</span>
              </span>
            </nuxt-link>
          </li>
           <li v-else  class="py-4 hover:bg-dark-maroon hover:text-white">
              <PrismicLink :field="item.secondNavLink" class="group flex" @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)" @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent="">
                <span class="ml-2">
                  <span class="block items-center">{{ item.subcategoryTitle }}</span>
                </span>
              </PrismicLink>
            </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
  import {
    getSliceComponentProps
  } from "@prismicio/vue/components";
  export default {
    name: "FIrstLevelNav",
    // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
    props: getSliceComponentProps(["slice", "index", "slices", "context"]),
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