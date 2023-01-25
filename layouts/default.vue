<template>
  <div class="text-slate-700 min-h-screen">
    <!-- <GlobalsMegaMenu /> -->
    <GlobalsHeaderPrismic v-if="navigation.data" :navigation="navigation" />
    <main class="min-h-screen"><nuxt /></main>
    <GlobalsFooter
      v-if="navigation.data && settings.data"
      :with-sign-up-form="withFooterSignUpForm"
      :settings="settings"
    />
  </div>
</template>

<script>
export default {
  computed: {
    withHeaderProfile() {
      return this.$store.state.layout.withHeaderProfile;
    },
    withHeaderDivider() {
      return this.$store.state.layout.withHeaderDivider;
    },
    withFooterSignUpForm() {
      return this.$store.state.layout.withFooterSignUpForm;
    },
    navigation() {
      return this.$store.state.prismic.navigation;
    },
    settings() {
      return this.$store.state.prismic.settings;
    },
  },
};
</script>

<style>
body {
  @apply overflow-x-hidden text-sm antialiased;
}
</style>