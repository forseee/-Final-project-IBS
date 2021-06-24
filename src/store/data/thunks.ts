import { GetState } from "../index";
import {data__setPhoto, data__setPhotos, data__setPost, data__setPosts} from "./actions";
import {API} from "../../API";


/**
 * Получили все посты
 */
export const data__getPosts = () => async (dispatch: any, getState: GetState) => {
  try {
    const posts = await API.posts.getAll();
    dispatch(data__setPosts(posts))
  }catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};

/**
 * Получили все фотографии
 */
export const data__getPhotos = () => async (dispatch: any, getState: GetState) => {
  try {
    const photos = await API.photos.getAll()
    dispatch(data__setPhotos(photos))
  }catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};
/**
 * Получили все пост по его ID
 */
export const data__getPostById = (id: number) => async (dispatch: any, getState: GetState) => {
  dispatch(data__setPost(null))
  try {
    const post = await API.posts.getById(id);
    dispatch(data__setPost(!!post ? post : null))
  }catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};

/**
 * Получили все фотографию по его ID
 */
export const data__getPhotoById = (id: number) => async (dispatch: any, getState: GetState) => {
  try {
    const photo = await API.photos.getById(id)
    dispatch(data__setPhoto(!!photo ? photo : null))
  }catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};
