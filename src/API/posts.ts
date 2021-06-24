import { AxiosInstance } from 'axios';
import { IPost } from '../models/post';

type IPostsResponse = Array<IPost>;

export class ApiPosts {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  getAll = () => this.axios.get<IPostsResponse>(`/posts`).then((d) => d.data);
  getById = (id: number) => this.axios.get<IPost>(`/posts/${id}`).then((d) => d.data);
}
