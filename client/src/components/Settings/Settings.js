import "./Settings.css";
import wallpaper1 from "../../images/wallpaper1.jpg";
import wallpaper2 from "../../images/wallpaper2.jpg";
import wallpaper3 from "../../images/wallpaper3.jpg";
import wallpaper4 from "../../images/wallpaper4.jpg";
import wallpaper5 from "../../images/wallpaper5.jpg";
import wallpaper6 from "../../images/wallpaper6.jpg";
import React, { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

export default function Settings() {
  const themes = {
    0: {
      primary: "#00539C",
      secondary: "#EEA47F",
      text: "white"
    },
    1: {
      primary: "#CC313D",
      secondary: "#F7C5CC",
      text: "white"
    },
    2: {
      primary: "#201E20",
      secondary: "#E0A96D",
      text: "white"
    },
    3: {
      primary: "#2C5F2D",
      secondary: "#FFE77A",
      text: "white"
    }
  };

  const { changeBackground, changeTheme } = useContext(SettingsContext);

  function handleBackground(wallpaperName) {
    changeBackground(wallpaperName);
    document.body.style.background = `url(${wallpaperName}) no-repeat fixed bottom`;
  }

  function handleTheme(themeNumber) {
    changeTheme(themes[themeNumber]);

    const primaryColor = themes[themeNumber].primary;
    const secondaryColor = themes[themeNumber].secondary;
    const textColor = themes[themeNumber].text;

    const root = document.querySelector(":root");
    root.style.setProperty("--primary", `${primaryColor}`);
    root.style.setProperty("--secondary", `${secondaryColor}`);
    root.style.setProperty("--white", `${textColor}`);
  }

  return (
    <div className="settings">
      <div className="container">
        <div className="header">
          <h1 className="heading">User Settings</h1>
        </div>
        <div className="settings-options">
          <div className="change-bg">
            <h3>Choose background: </h3>
            <select
              className="select"
              onChange={(e) => handleBackground(e.target.value)}
            >
              <option value={wallpaper1}>Wallpaper 1</option>
              <option value={wallpaper2}>Wallpaper 2</option>
              <option value={wallpaper3}>Wallpaper 3</option>
              <option value={wallpaper4}>Wallpaper 4</option>
              <option value={wallpaper5}>Wallpaper 5</option>
              <option value={wallpaper6}>Wallpaper 6</option>
            </select>
          </div>
          <div className="change-theme">
            <h3>Choose theme: </h3>
            <select
              className="select"
              onChange={(e) => handleTheme(e.target.value)}
            >
              <option value={0}>Theme 1</option>
              <option value={1}>Theme 2</option>
              <option value={2}>Theme 3</option>
              <option value={3}>Theme 4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
