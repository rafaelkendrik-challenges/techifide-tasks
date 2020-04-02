<template>
  <li :class="taskClasses">
    <div>
      <span>
        {{ status.label }}
      </span>
      <span>
        {{ timestamp }}
      </span>
    </div>

    <h2
      class="task__title"
      @mouseover="showDescriptionPopover"
      @mouseleave="hideDescriptionPopover">
      {{ title }}
    </h2>

    <v-popover ref="descriptionPopover">
      <p>
        {{ description }}
      </p>
    </v-popover>

    <task-actions v-bind="$props"></task-actions>
  </li>
</template>

<script>
  import TaskActions from './TaskActions'
  import VPopover from 'src/components/common/VPopover'

  export default {
    components: {
      TaskActions,
      VPopover
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
    },

    computed: {
      taskClasses () {
        return ['task', `task--${this.status.name}`]
      }
    },

    methods: {
      showDescriptionPopover () {
        this.$refs.descriptionPopover.show()
      },

      hideDescriptionPopover () {
        this.$refs.descriptionPopover.hide()
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
