<script setup>
  import WeatherData from './components/WeatherData.vue';
</script>

<template>
  <header>
    <h1 class="green">Weather app</h1>
    <p><strong>Node.js, Vue 3, Vite</strong></p>
  </header>

  <main>
    <WeatherData />
  </main>
</template>

<style scoped>
  .header {
    color: aquamarine;
  }
</style>
