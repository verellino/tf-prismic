<template>
  <Component
    :is="as"
    class="text-slate-800"
    :class="{}"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  props: {
    as: {
      type: [String, Object, Function],
      default: 'h1'
    },
    size: {
      type: String,
      default: '4xl'
    }
  }
}
</script>
