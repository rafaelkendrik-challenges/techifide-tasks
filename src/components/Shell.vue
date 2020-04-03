<template>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<script>
  export default {
    name: 'Shell'
  }
</script>

<style>
  .main {
    background-color: #e1e4e8;
    min-height: 100vh;
    width: 100%;
  }

  html, body {
    box-sizing: border-box;
    color: #515151;
    font-family: Roboto, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
  }
</style>
