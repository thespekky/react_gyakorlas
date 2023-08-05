import { Link, useResolvedPath, useMatch } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="ruha-bolt">
        Ruha Bolt
      </Link>
      <ul>
        <CostumeLink to="/hozzaad">Hozzáadás</CostumeLink>
        <CostumeLink to="/belepes">Belépés</CostumeLink>
        <CostumeLink to="/kilepes">Kilépés</CostumeLink>
      </ul>
    </nav>
  );
}
function CostumeLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
