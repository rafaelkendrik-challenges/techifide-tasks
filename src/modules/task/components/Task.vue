<template>
  <li :class="['task', `task--${status.name}`]">
    <div>
      <span>
        {{ status.label }}
      </span>
      <span>
        {{ timestamp }}
      </span>
    </div>

    <h2 class="task__title">
      {{ title }}
    </h2>

    <p>
      {{ description }}
    </p>

    <task-actions v-bind="$props"></task-actions>
  </li>
</template>

<script>
  import TaskActions from './TaskActions'

  export default {
    components: {
      TaskActions
    },

    props: {
      id: {
        type: String,
        required: true
      },

      title: {
        type: String,
        required: true
      },

      description: {
        type: String,
        required: true
      },

      status: {
        type: Object,
        required: true
      },

      timestamp: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .task {
    &--pending {
      .task__title {
        color: #eeb462;
      }
    }

    &--in-progress {
      .task__title {
        color: #138086;
      }
    }

    &--done {
      .task__title {
        color: #534666;
        text-decoration: line-through;
      }
    }
  }
</style>
