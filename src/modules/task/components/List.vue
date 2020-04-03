<template>
  <div class="list">
    <h2 class="list__title">My Tasks</h2>
    <ul>
      <task
        v-for="task in tasks"
        :key="task.id"
        v-bind="task"></task>
    </ul>
  </div>
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
  ul {
    list-style: none;
    padding: 0;
  }

  .list {
    &__title {
      font-weight: 400;
      margin: 0.5rem 0;
      opacity: 0.8;
    }
  }
</style>
