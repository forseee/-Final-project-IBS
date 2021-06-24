import { IPost } from '../../models/post';
import { IPhoto } from '../../models/photo';

export enum IDataActionTypes {
  DATA__SET_POSTS = '[DATA] SET_POSTS',
  DATA__SET_POST = '[DATA] SET_POST',
  DATA__SET_PHOTOS = '[DATA] SET_PHOTOS',
  DATA__SET_PHOTO = '[DATA] SET_PHOTO',
}

// Типы ActionCreators
interface SetPostsAction {
  type: IDataActionTypes.DATA__SET_POSTS;
  payload: Array<IPost> | null;
}
interface SetPostAction {
  type: IDataActionTypes.DATA__SET_POST;
  payload: IPost | null;
}
interface SetPhotosAction {
  type: IDataActionTypes.DATA__SET_PHOTOS;
  payload: Array<IPhoto> | null;
}
interface SetPhotoAction {
  type: IDataActionTypes.DATA__SET_PHOTO;
  payload: IPhoto | null;
}

// Общий тип Action
export type DataAction = SetPostsAction | SetPostAction | SetPhotosAction | SetPhotoAction;
