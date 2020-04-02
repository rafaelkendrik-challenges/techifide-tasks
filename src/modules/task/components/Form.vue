<template>
  <form @submit.prevent="createTask($data)">
    <fieldset>
      <label>
        Title:
        <input v-model="title" type="text" required>
      </label>

      <label>
        Description:
        <textarea v-model="description" required></textarea>
      </label>
    </fieldset>

    <div>
      <button type="submit">
        create
      </button>
    </div>
  </form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data: () => ({
      title: '',
      description: ''
    }),

    methods: {
      ...mapActions('task', [
        'createTask',
      ])
    }
  }
</script>

<style lang="scss" scoped>
</style>
