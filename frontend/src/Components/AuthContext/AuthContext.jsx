import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kezdetben nincs bejelentkezve
  const [loggedUser, userChange] = useState({
    id: 0,
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  const login = () => {
    // Itt lehetőséged van a bejelentkezési logikát megvalósítani
    // Pl. küldj lekérést a szerverre, ellenőrizd a hitelesítő adatokat, stb.
    // Ha sikeres, akkor állítsd be az isLoggedIn állapotot true-ra.

    setIsLoggedIn(true);
  };

  const logout = () => {
    if (isLoggedIn) {
      // console.log("Logout");
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
