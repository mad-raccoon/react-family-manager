import React, { useState } from 'react';

export const authDefault = {
  username: null,
};

export const UserContext = React.createContext({ authDefault });

export const UserProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  const contextValue = {
    authData,
    setAuthData,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
