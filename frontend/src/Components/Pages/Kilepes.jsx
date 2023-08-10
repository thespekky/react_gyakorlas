import { useRef } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Kilepes() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const startlogout = () => {
    navigate("/hozzaad");
    logout();
  };
  return; //startlogout();
}
