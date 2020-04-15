<template>
  <div class="actions">
    <button
      class="actions__button"
      :disabled="!isStartButtonEnabled"
      @click="startTask"
      type="button">
      <img class="actions__button__icon" src="~src/assets/icon-play.svg">
      <span class="actions__button__label">start</span>
    </button>

    <button
      class="actions__button"
      :disabled="!isFinishButtonEnabled"
      @click="finishTask"
      type="button">
      <img class="actions__button__icon" src="~src/assets/icon-check.svg">
      <span class="actions__button__label">finish</span>
    </button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  import { TASK_STATUS_IN_PROGRESS_REF, TASK_STATUS_DONE_REF } from '../data/taskConstants'

  export default {
    inheritAttrs: false,

    props: {
      id: {
        type: String,
        required: true
      },

      status: {
        type: Object,
        required: true
      }
    },

    computed: {
      isStartButtonEnabled () {
        return this.status.canProceedTo(TASK_STATUS_IN_PROGRESS_REF)
      },

      isFinishButtonEnabled () {
        return this.status.canProceedTo(TASK_STATUS_DONE_REF)
      }
    },

    methods: {
      ...mapActions('task', [
        'updateTaskStatus',
      ]),

      startTask () {
        this.updateTaskStatus({
          id: this.id,
          status: this.status,
          nextStatusRef: TASK_STATUS_IN_PROGRESS_REF
        })
      },

      finishTask () {
        this.updateTaskStatus({
          id: this.id,
          status: this.status,
          nextStatusRef: TASK_STATUS_DONE_REF
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .actions {
    &__button {
      background-color: #ffffff;
      border: none;
      cursor: pointer;
      outline: none;
      opacity: 0.75;
      padding: 0.15rem 0.5rem;
      width: 3rem;

      &:disabled {
        cursor: default;

        .actions__button__icon {
          opacity: 0.5;
        }
      }

      &__icon {
        display: block;
      }

      &__label {
        display: block;
        font-size: 0.65rem;
        padding-top: 0.25rem;
      }
    }
  }
</style>
