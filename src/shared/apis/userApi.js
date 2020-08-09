import { usersBE } from "../fixtures";

export const login = async (email, password) => {
  return usersBE.getUserCredentialsConfirmation(email, password);
};

export const logout = async (email) => {
  return true;
};

export const getUserInfo = async (email) => {
  return usersBE.getUserByEmail(email);
};
