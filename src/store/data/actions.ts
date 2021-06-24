import {IPost} from "../../models/post";
import {DataAction, IDataActionTypes} from "./types";
import {IPhoto} from "../../models/photo";

/**
 * Записать POSTS в store
 * @param posts
 */
export const data__setPosts = (posts: Array<IPost> | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_POSTS,
  payload: posts,
});
/**
 * Записать POST в store
 * @param post
 */
export const data__setPost = (post: IPost | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_POST,
  payload: post,
});
/**
 * Записать PHOTOS в store
 * @param photos
 */
export const data__setPhotos = (photos: Array<IPhoto> | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_PHOTOS,
  payload: photos,
});
/**
 * Записать PHOTO в store
 * @param photo
 */
export const data__setPhoto = (photo: IPhoto | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_PHOTO,
  payload: photo,
});
