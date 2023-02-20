import api, { TOKEN_KEY } from './axios-create';

export function getToken() {
  return api.get('/api/token')
    .then(data => {
      const token = data.data.access_token;
      localStorage.setItem(TOKEN_KEY, token);
      return token;
    });
}

