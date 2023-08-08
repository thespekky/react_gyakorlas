import { Link, useResolvedPath, useMatch } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar bg-stone-800 text-white flex justify-between items-stretch">
      <Link to="/" className="text-5xl title">
        Ruha Bolt
      </Link>
      <ul className="p-0 m-0 list-none flex gap-3.5">
        <CostumeLink to="/hozzaad">Hozzáadás</CostumeLink>
        <CostumeLink to="/elvesz">Törlés</CostumeLink>
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
