<template>
  <div class="actions">
    <button
      class="actions__button"
      @click="startTask"
      :disabled="!isStartButtonEnabled"
      title="Start"
      type="button">
      <img class="actions__button__icon" src="~src/assets/icon-play.svg">
      <span class="actions__button__label">start</span>
    </button>

    <button
      class="actions__button"
      @click="finishTask"
      :disabled="!isFinishButtonEnabled"
      title="Finish"
      type="button">
      <img class="actions__button__icon" src="~src/assets/icon-check.svg">
      <span class="actions__button__label">finish</span>
    </button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  import { STATUS_IN_PROGRESS_ID, STATUS_DONE_ID } from '../data/taskConstants'

  export default {
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
        return (this.status.id < STATUS_IN_PROGRESS_ID)
      },

      isFinishButtonEnabled () {
        return (this.status.id < STATUS_DONE_ID)
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
