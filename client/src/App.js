import React from "react";
import Header from "./components/Header/Header";
import WatchList from "./components/Watchlist/Watchlist";
import Watched from "./components/Watched/Watched";
import Add from "./components/Add/Add";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Settings from "./components/Settings/Settings";
import MoviePage from "./components/MoviePage/MoviePage";
import "./style.css";
import "./lib/font-awesome/css/all.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";
import { AuthProvider } from "./context/AuthContext";
import { SettingsProvider } from "./context/SettingsContext";

export default function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <SettingsProvider>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/watched" element={<Watched />} />
              <Route path="/add" element={<Add />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/moviePage/:id" element={<MoviePage />} />
            </Routes>
          </Router>
        </SettingsProvider>
      </GlobalProvider>
    </AuthProvider>
  );
}
