import { AppAction, IAppActionTypes } from "./types";
import {IUser} from "../../models/user";

const initialState = {
  initApp: false,
  user: null as IUser | null,
  auth: false,
};
type IAppState = typeof initialState;

export const appReducer = (
  state = initialState,
  action: AppAction
): IAppState => {
  switch (action.type) {
    case IAppActionTypes.APP__INIT_APP:
      return { ...state, initApp: action.payload };
    case IAppActionTypes.APP__SET_USER:
      return { ...state, user: action.payload, auth: !!action.payload };
    default:
      return state;
  }
};
