<template>
  <li :class="taskClasses">
    <div>
      <span class="task__status">
        {{ status.label }}
      </span>

      <div
        class="task__titlewrapper"
        @mouseover="showDescriptionPopover"
        @mouseleave="hideDescriptionPopover">
        <h2 class="task__title">
          {{ title }}
        </h2>

        <v-popover ref="descriptionPopover">
          <p>
            {{ description }}
          </p>
        </v-popover>
      </div>
    </div>

    <task-actions v-bind="$props"></task-actions>

    <div class="task__timestamp">
      {{ timestamp }}
    </div>
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
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;

    &--pending {
      .task__title {
        color: #eeb462;
      }

      .task__status {
        border-color: #eeb462;
        color: #eeb462;
      }
    }

    &--in-progress {
      .task__title {
        color: #138086;
      }

      .task__status {
        border-color: #138086;
        color: #138086;
      }
    }

    &--done {
      .task__title {
        color: #534666;
        text-decoration: line-through;
      }

      .task__status {
        border-color: #534666;
        color: #534666;
      }
    }

    &__status {
      display: inline;
      border-width: 1px;
      border-style: solid;
      border-radius: 0.15rem;
      font-size: 0.8rem;
      padding: 0.35rem;
    }

    &__titlewrapper {
      cursor: pointer;
      display: inline;
      position: relative;
      vertical-align: middle;
    }

    &__title {
      display: inline;
      font-size: 1.8rem;
      font-weight: 400;
      letter-spacing: 0.05rem;
      opacity: 0.9;
      padding-left: 1rem;
      text-transform: capitalize;
    }

    &__timestamp {
      font-size: 0.6rem;
      width: 100%;
    }
  }
</style>
