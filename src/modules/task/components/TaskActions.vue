<template>
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

      status: {
        type: Object,
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
</style>
