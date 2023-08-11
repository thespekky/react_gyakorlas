import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import { useEffect } from "react";
export default function Hozzaad() {
  const { isLoggedIn, logout } = useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  const navigate = useNavigate();
  if (!isLoggedIn) {
  }
  return <h1>Hozzáadás</h1>;
}
