<script setup>
  import WeatherForecast from './components/WeatherForecast.vue';
</script>

<template>
  <header>
    <h1 class="green">Weather app</h1>
    <p><strong>Node.js, Vue 3, Vite</strong></p>
  </header>

  <main>
    <WeatherForecast />
  </main>
</template>

<style scoped>
  .header {
    color: aquamarine;
  }
</style>
