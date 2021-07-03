import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: '/api',
});

export const API2 = {
  getStatistic(vacation: string, city: string) {
    return instance.get(`/search?name=${vacation}&area=${city}`).then((response) => {
      return response.data;
    });
  },
  getTake() {
    return instance.get('/take').then((response) => {
      return response.data;
    });
  },
};
