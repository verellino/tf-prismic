<template>
  <Component :is="as" class="p-4">
    <div
      class="mx-auto w-full"
      :class="{
        'max-w-xl': size === 'small',
        'max-w-3xl': size === 'base',
        'max-w-4xl': size === 'wide',
        'max-w-6xl': size === 'widest'
      }"
    >
      <slot />
    </div>
  </Component>
</template>

<script>
export default {
  props: {
    as: {
      type: [String, Object, Function],
      default: 'div'
    },
    size: {
      type: String,
      default: 'base'
    }
  }
}
</script>
