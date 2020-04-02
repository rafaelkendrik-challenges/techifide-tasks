<template>
  <ul>
    <li
      v-for="task in tasks"
      :key="task.id">{{ task.title }}</li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState('task', [
      'tasks'
    ]),

    created () {
      this.$store.dispatch('task/fetchAndSetTasks')
    }
  }
</script>

<style lang="scss" scoped>
</style>
