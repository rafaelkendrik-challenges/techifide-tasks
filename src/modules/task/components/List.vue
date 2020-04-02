<template>
  <ul>
    <task
      v-for="task in tasks"
      :key="task.id"
      v-bind="task"></task>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'

  import Task from './Task'

  export default {
    components: {
      Task
    },

    computed: mapState('task', [
      'tasks'
    ]),

    created () {
      this.$store.dispatch('task/retrieveTasks')
    }
  }
</script>

<style lang="scss" scoped>
</style>
