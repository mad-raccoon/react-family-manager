import React from 'react';
import { UserProvider } from './shared/contexts/userContext';

export const Providers = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};
