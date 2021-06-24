import {IUser} from "../../models/user";

export enum IAppActionTypes {
  APP__INIT_APP = "[APP] INIT_APP",
  APP__SET_USER = "[APP] SET_USER",
}

// Типы ActionCreators
interface SetAuthAction {
  type: IAppActionTypes.APP__SET_USER;
  payload: IUser;
}

interface SetInitAppAction {
  type: IAppActionTypes.APP__INIT_APP;
  payload: boolean;
}

// Общий тип Action
export type AppAction =
  | SetInitAppAction
  | SetAuthAction;
