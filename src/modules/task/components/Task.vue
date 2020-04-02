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

    <div>
      <button
        @click="startTask"
        type="button">
        start
      </button>

      <button
        @click="finishTask"
        type="button">
        finish
      </button>
    </div>
  </li>
</template>

<script>
  import { mapActions } from 'vuex'
  import { STATUS_IN_PROGRESS_ID, STATUS_DONE_ID } from '../data/constants'

  export default {
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
    },

    methods: {
      ...mapActions('task', [
        'updateTaskStatus',
      ]),

      startTask () {
        this.updateTaskStatus({
          id: this.id,
          currentStatus: this.status,
          statusId: STATUS_IN_PROGRESS_ID
        })
      },

      finishTask () {
        this.updateTaskStatus({
          id: this.id,
          currentStatus: this.status,
          statusId: STATUS_DONE_ID
        })
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
