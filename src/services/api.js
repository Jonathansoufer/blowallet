import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://gist.githubusercontent.com/AbdoulNdiaye/b253a0a7b093cd5e775c85261780cff5/',
});

export default api;
