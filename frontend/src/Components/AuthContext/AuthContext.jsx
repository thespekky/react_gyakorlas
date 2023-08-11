import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kezdetben nincs bejelentkezve
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  const login = () => {
    // Itt lehetőséged van a bejelentkezési logikát megvalósítani
    // Pl. küldj lekérést a szerverre, ellenőrizd a hitelesítő adatokat, stb.
    // Ha sikeres, akkor állítsd be az isLoggedIn állapotot true-ra.

    setIsLoggedIn(true);
  };

  const logout = () => {
    if (isLoggedIn) {
      console.log("Logout");
      setIsLoggedIn(false);
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
