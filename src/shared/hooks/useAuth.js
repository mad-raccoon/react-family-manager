import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { userApi } from "../apis";

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    const userInfo = await userApi.getUserInfo(email);

    if (!userInfo) throw Error("Email is not registered !");

    const loginSuccess = await userApi.login(email, password);

    if (!loginSuccess) throw Error("Credentials invalid !");

    dispatch({ type: "LOGIN", payload: userInfo });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return { user: state, login, logout };
};
