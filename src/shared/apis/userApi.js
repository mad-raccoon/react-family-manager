import { getUserByEmail, getUserCredentialsConfirmation } from '../fixtures';

export const login = async (email, password) => {
  return getUserCredentialsConfirmation(email, password);
};

export const getUserInfo = async (email) => {
  return getUserByEmail(email);
};
