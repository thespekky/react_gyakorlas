import { Link, useResolvedPath, useMatch, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import { useEffect } from "react";
import React from "react";
export default function Footer() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <footer className="flex justify-center items-center text-black bg-white dark:text-white dark:bg-zinc-800 ">
      <div className=" mb-2">
        &copy; Copyright {new Date().getFullYear()}
        <strong>
          <span> BA </span>
        </strong>
        | Minden jog fenntartva
      </div>
    </footer>
  );
}
