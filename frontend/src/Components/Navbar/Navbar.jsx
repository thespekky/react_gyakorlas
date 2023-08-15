import { Link, useResolvedPath, useMatch, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import { useEffect } from "react";
export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="navbar bg-stone-800 text-white flex justify-between items-stretch">
      <Link to="/" className="text-5xl title">
        Fő oldal
      </Link>
      <ul className="p-0 m-0 list-none flex gap-3.5">
        {isLoggedIn ? (
          <CostumeLink to="/hozzaad">Hozzáadás</CostumeLink>
        ) : (
          <></>
        )}
        {isLoggedIn ? <CostumeLink to="/elvesz">Törlés</CostumeLink> : <></>}
        <CostumeLink
          to={!isLoggedIn ? "/belepes" : "/kilepes"}
          onClick={logout}
        >
          {!isLoggedIn ? "Belépés" : "Kilépés"}
        </CostumeLink>
      </ul>
    </nav>
  );
}
function CostumeLink({ to, children, ...props }) {
  /*const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  console.log(to);
  console.log(to==="/kilepes");
  function startlogout() {
    navigate("/hozzaad");
    console.log("nav hozzaad");
    logout();
  }
  if (to === "/kilepes") {
    startlogout();
  }*/
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li
      className={
        isActive
          ? "h-full p-1 flex items-center active text-inherit"
          : "flex p-1 items-center h-full text-inherit"
      }
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
