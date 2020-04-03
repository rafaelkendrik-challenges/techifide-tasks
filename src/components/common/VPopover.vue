<template>
  <transition name="fade">
    <div class="wrapper" v-show="isShown">
      <div class="popover">
        <slot></slot>
      </div>
    </div>
  </transition>
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

<style lang="scss" scoped>
  .wrapper {
    bottom: 2.5rem;
    position: absolute;
  }

  .popover {
    background-color: #ffffff;
    border: 1px solid #d4d6e3;
    border-radius: 0.15rem;
    padding: 0 1rem;
    z-index: 10;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 180ms;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
