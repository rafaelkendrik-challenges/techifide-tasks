<template>
  <div>
    <section>
      <task-form></task-form>
    </section>

    <section>
      <task-list></task-list>
    </section>
  </div>
</template>

<script>
  import TaskForm from './Form'
  import TaskList from './List'

  export default {
    components: {
      TaskForm,
      TaskList
    },
  }
</script>

<style lang="scss" scoped>
</style>
