import api from './axios-create';

export async function getWeatherData() {
  try {
    const data = await api.get('/api/weather');
    return data.data;
  } catch (e) {
    if (e.message) {
      console.error(e.message);
      /* Yields alert with descriptive error message from meteomatics API */
      alert(e.message);
    }
  }
}

export async function getWeatherDataPage() {
  try {
    return await api.get('/weather');
  } catch (e) {
    if (e.message) {
      console.error(e.message);
      /* Yields alert with descriptive error message from meteomatics API */
      alert(e.message);
    }
  }
}
