import { GetState } from "../index";
import {IAppActionTypes} from "./types";
import {app__setUser} from "./actions";
import {data__getPhotos, data__getPosts} from "../data/thunks";


/**
 * Инициализвация приложения
 */
export const app__initApp = () => (dispatch: any, getState: GetState) => {
  dispatch(app__getUser("root@gmail.com", "Вася"))
  dispatch(data__getPhotos())
  dispatch(data__getPosts())
  dispatch({ type: IAppActionTypes.APP__INIT_APP, payload: true });
};

/**
 * Запросить логин и пароль с сервера
 * @param email
 * @param username
 */
export const app__getUser =
  (email: string, username: string) =>
  async (dispatch: any, getState: GetState) => {
    try {
      // const res = await API.auth.login(email, username);   //пример
      dispatch(app__setUser({email, username}))
    } catch (e) {
      console.error("Ошибка запроса", e);
    }
  };
