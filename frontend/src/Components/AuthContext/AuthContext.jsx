import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const cookies = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kezdetben nincs bejelentkezve
  const [loggedUser, userChange] = useState({
    id: 0,
    email: "",
    password: "",
    name: "",
  });
  useEffect(() => {
    if (cookies.get("userData")) {
      setUser(cookies.get("userData"));
      // console.log(cookies.get("userData"));
      setIsLoggedIn(true);
    }
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  const login = (datas) => {
    // Itt lehetőséged van a bejelentkezési logikát megvalósítani
    // Pl. küldj lekérést a szerverre, ellenőrizd a hitelesítő adatokat, stb.
    // Ha sikeres, akkor állítsd be az isLoggedIn állapotot true-ra.

    cookies.set("userData", datas, { path: "/" });
    console.log(cookies.get("userData"));
    //console.log(datas);
    setIsLoggedIn(true);
  };

  const logout = () => {
    if (isLoggedIn) {
      // console.log("Logout");
      cookies.remove("userData", { path: "/" });
      setIsLoggedIn(false);
      navigate("/");
    }
  };
  const setUser = (datas) => {
    const user = {
      id: datas.id,
      email: datas.email,
      password: datas.password,
      name: datas.name,
    };
    userChange(user);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, loggedUser, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
