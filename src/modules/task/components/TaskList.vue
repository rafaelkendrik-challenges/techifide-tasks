<template>
  <div class="list">
    <h2 class="list__title">My Tasks</h2>

    <ul
      class="list__items"
      v-if="hasTasks"
      key="task-list">
      <task-item
        v-for="task in tasks"
        :key="task.id"
        v-bind="task"></task-item>
    </ul>

    <span
      class="list__empty-message"
      v-else
      key="task-list">
      There is no tasks!
    </span>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import TaskItem from './TaskItem'

  export default {
    components: {
      TaskItem
    },

    computed: {
      ...mapState('task', [
        'tasks'
      ]),

      hasTasks () {
        return Boolean(this.tasks.length)
      }
    },

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
