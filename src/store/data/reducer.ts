import {IPost} from "../../models/post";
import {IPhoto} from "../../models/photo";
import {DataAction, IDataActionTypes} from "./types";

const initialState = {
  posts: null as Array<IPost> | null,
  post: null as IPost | null,
  photos: null as Array<IPhoto> | null,
  photo: null as IPhoto | null,
};
type IDataState = typeof initialState;

export const dataReducer = (
  state = initialState,
  action: DataAction
): IDataState => {
  switch (action.type) {
    case IDataActionTypes.DATA__SET_POSTS:
      return { ...state, posts: action.payload };
    case IDataActionTypes.DATA__SET_POST:
      return { ...state, post: action.payload };
    case IDataActionTypes.DATA__SET_PHOTOS:
      return { ...state, photos: action.payload };
    case IDataActionTypes.DATA__SET_PHOTO:
      return { ...state, photo: action.payload };
    default:
      return state;
  }
};
