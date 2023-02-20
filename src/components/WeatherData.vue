<template>
  <section class="weather">
    <button class="border-green" @click="accessWeatherDataPageAPI">Show Table</button>
    <iframe width="1000" height="500" :srcdoc="weatherHtml.data"></iframe>
  </section>
</template>

<script>
  import { getWeatherData, getWeatherDataPage } from '../api/get-weather-data';

  export default {
    data() {
      return {
        weatherHtml: String,
      }
    },
    mounted() {
      this.accessWeatherDataAPI();
    },
    methods: {
      async accessWeatherDataAPI() {
        const weatherData = await getWeatherData();
        if (weatherData) {
          console.log('weatherData', weatherData);
          console.table(weatherData.data);
        }
      },
      async accessWeatherDataPageAPI() {
        this.weatherHtml = await getWeatherDataPage();
      }
    }
  }
</script>

<style scoped>
  .weather {
    font-size: 16px;
  }

  iframe {
    border: 0;
  }

  button {
    padding: 5px 10px;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
  }
</style>
