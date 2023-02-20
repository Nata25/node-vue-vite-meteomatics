import express from 'express';
import axios from 'axios';
import btoa from 'btoa';

import config from './config.json';

const app = express();

const meteoApi = axios.create();

app.get('/api/token', async function (req, res) {
  const { login, password } = config;
  let headers = {
    Authorization: 'Basic ' + btoa(`${login}:${password}`),
  }
  try {
    const token = await meteoApi.get('https://login.meteomatics.com/api/v1/token', { headers });
    res.send(token.data);
  } catch (e) {
    console.log(e);
    throw e;
  }
});

app.get('/api/weather', async function (req, res) {
  const today = new Date().toISOString();
  const oldDate = '2023-02-17T00:00:00Z'; // just for testing errors
  try {
    const weatherForecast = await meteoApi.get(`https://api.meteomatics.com/${today}/t_2m:C/52.520551,13.461804/json`, {
      params: {
        access_token: req.query.access_token,
      }
    });
    res.send(weatherForecast.data);
  } catch (e) {
    res.status(e.response.status).send({ message: e.response.data });
  }
});

app.get("/weather", async (req, res) => {
  const today = new Date().toISOString();
  const oldDate = '2023-02-17T00:00:00Z'; // just for testing errors
  try {
    const weatherForecast = await meteoApi.get(`https://api.meteomatics.com/${today}/t_2m:C/52.520551,13.461804/html`, {
      params: {
        access_token: req.query.access_token,
      }
    });
    res.send(weatherForecast.data);
  } catch (e) {
    res.status(e.response.status).send({ message: e.response.data });
  }
});

export const handler = app;
