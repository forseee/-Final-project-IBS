import { AxiosInstance } from 'axios';
import { IPhoto } from '../models/photo';

type IPhotosResponse = Array<IPhoto>;

export class ApiPhotos {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  getAll = () => this.axios.get<IPhotosResponse>(`/photos`).then((d) => d.data);
  getById = (id: number) => this.axios.get<IPhoto>(`/photos/${id}`).then((d) => d.data);
}
