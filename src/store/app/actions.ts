import { AppAction, IAppActionTypes } from "./types";
import {IUser} from "../../models/user";

export const app__setUser = (user: IUser): AppAction => ({
  type: IAppActionTypes.APP__SET_USER,
  payload: user,
});
