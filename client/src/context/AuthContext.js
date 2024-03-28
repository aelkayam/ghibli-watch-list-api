import React, { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

// initiall state:
const initialState = {
  username: localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "",
  password: localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "",
  logged: localStorage.getItem("logged")
    ? JSON.parse(localStorage.getItem("logged"))
    : [false]
};

// create context:
export const AuthContext = createContext(initialState);

// provider component:
export function AuthProvider(props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("username", state.username);
    localStorage.setItem("password", state.password);
    localStorage.setItem("logged", state.logged);
  }, [state]);

  // actions:
  function saveUserData(userData) {
    dispatch({ type: "SAVE_USER_DATA", payload: userData });
  }

  function login(confirmation) {
    dispatch({ type: "LOGIN", payload: confirmation });
  }

  return (
    <AuthContext.Provider
      value={{
        username: state.username,
        password: state.password,
        logged: state.logged,
        saveUserData,
        login
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
