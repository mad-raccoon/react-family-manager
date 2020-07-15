import React from 'react';
import { AuthProvider } from './shared/contexts/authContext';

export const Providers = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
