<template>
  <form class="form" @submit.prevent="createTask($data)">
    <h2 class="form__title">Create Tasks</h2>

    <fieldset>
      <label class="form__field">
        title
        <input
          class="form__field__input"
          v-model="title"
          type="text"
          required>
      </label>

      <label class="form__field">
        description
        <textarea
          class="form__field__input form__field__input--textarea"
          v-model="description"
          required></textarea>
      </label>
    </fieldset>

    <div>
      <button class="form__button" title="Create Task" type="submit">
        <img class="form__button__icon" src="~src/assets/icon-plus.svg">
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
  fieldset {
    border: none;
    padding: 0;
  }

  .form {
    &__title {
      font-weight: 400;
      margin: 0.5rem 0;
      opacity: 0.8;
    }

    &__field {
      cursor: pointer;
      display: table;
      font-size: 0.75em;
      font-weight: bold;
      margin-top: 1rem;
      text-transform: uppercase;
      width: 100%;

      &__input {
        border: 1px solid #d4d6e3;
        border-radius: 0.25rem;
        box-sizing: border-box;
        display: block;
        margin-top: 0.35rem;
        min-height: 2.5rem;
        padding: 0.5rem;
        width: 100%;

        &--textarea {
          min-height: 7.5rem;
          resize: none;
        }
      }
    }

    &__button {
      background-color: #ffffff;
      border: none;
      cursor: pointer;
      outline: none;
      opacity: 0.75;
      margin-top: 1.5rem;
      width: 3rem;
    }
  }
</style>
