import React, { createContext, useReducer, useEffect } from "react";
import SettingsReducer from "./SettingsRecuder";
import wallpaper1 from "../images/wallpaper1.jpg";

// initiall state:
const initialState = {
  background: localStorage.getItem("background")
    ? localStorage.getItem("background")
    : { wallpaper1 },
  theme: localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : {
        primary: "#00539CFF",
        secondary: "#EEA47FFF",
        text: "white"
      }
};

// create context:
export const SettingsContext = createContext(initialState);

// provider component:
export function SettingsProvider(props) {
  const [state, dispatch] = useReducer(SettingsReducer, initialState);

  useEffect(() => {
    localStorage.setItem("background", state.background);
    localStorage.setItem("theme", JSON.stringify(state.theme));
  }, [state]);

  // actions:
  function changeBackground(wallpaper) {
    dispatch({ type: "CHANGE_BACKGROUND", payload: wallpaper });
  }

  function changeTheme(theme) {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  }

  return (
    <SettingsContext.Provider
      value={{
        background: state.background,
        theme: state.theme,
        changeBackground,
        changeTheme
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}
