<template>
  <div v-show="isShown">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data: () => ({
      isShown: false
    }),

    methods: {
      show () {
        this.isShown = true
      },

      hide () {
        this.isShown = false
      }
    }
  }
</script>

<style>
</style>
