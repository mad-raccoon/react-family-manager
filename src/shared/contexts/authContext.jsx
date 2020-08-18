import React, { useReducer, useMemo, createContext } from "react";

const initialState = {
  email: null,
  name: null,
  id: 0, // TODO: Change this
  teamId: 0, // TODO: Change this
  isTeamLeader: true, // TODO: Change this
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        id: action.payload.id,
      };
    case "LOGOUT":
      return {
        initialState,
      };

    default:
      return state;
  }
};

export const AuthContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider = ({ children, authState }) => {
  const theAuthState = authState || initialState;

  const [state, dispatch] = useReducer(authReducer, theAuthState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
