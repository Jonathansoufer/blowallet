import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://gist.githubusercontent.com/AbdoulNdiaye/b253a0a7b093cd5e775c85261780cff5/raw/3d0d14c6e21f6f758a2968f6ed1d61a9bc3594bb/transactions.json',
});

export default api;
