# Trainee Weather get data App

## Node.js, Express, Vue 3, Vite, [Meteomatics API](https://www.meteomatics.com/en/weather-api) (trial), Axios

This is a one-page web app, which performs the following:

- [x] Authorizes user to access API via token obtained with login/password (not saved in the repository)
- [x] Gets initial weather data for today and logs it in the console (lng, lat are hardcoded for now and pointing at Berlin, Germany)
- [x] On button click, displays data in iframe as a graph
- [x] Automatically refreshes the token if it's expired and retries get request to API
- [x] Displays errors from meteomatics API in a simple alert window
- [ ] Displays the address the weather data was fetched for
- [ ] Allows to customise the address to fetch the weather

Note: The Vue FE and custom node BE parts are both served from the same local server, port 5173. I.e., the following instructions are valid:

---

#### _[Original Vite setup instructions]_

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
