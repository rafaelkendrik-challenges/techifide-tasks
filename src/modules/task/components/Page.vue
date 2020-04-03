<template>
  <div class="page">
    <section class="page__panel">
      <task-form></task-form>
    </section>

    <section class="page__panel">
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
  .page {
    padding: 2.5rem 0;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;

    &__panel {
      background-color: #ffffff;
      border: 1px solid #d4d6e3;
      border-radius: 0.25rem;
      padding: 1rem 1.25rem;

      &:last-child {
        margin-top: 2.5rem;
      }
    }
  }
</style>
