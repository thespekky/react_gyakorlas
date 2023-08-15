import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";

export default function Home() {
  const { isLoggedIn, logout } = useAuth();
  const { loggedUser, setUser } = useAuth();

  const [count, setCount] = useState(0);
  useEffect(() => {
    //console.log(loggedUser);
  }, [isLoggedIn]);
  function Hozzaadszamot(szam) {
    setCount((count) => {
      return count + szam;
    });
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Home {isLoggedIn ? loggedUser.email : ""}
      </h1>
      <div className="Gomb">
        <button onClick={() => Hozzaadszamot(1)} name="szamlako">
          Számlálás:{count}
        </button>
      </div>
    </>
  );
}
