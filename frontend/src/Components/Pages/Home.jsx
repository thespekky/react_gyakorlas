import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import Cookies from "universal-cookie";
import Cards from "./Home_cards/Cards";
const cookies = new Cookies();

export default function Home() {
  const { isLoggedIn, logout } = useAuth();
  const { loggedUser, setUser } = useAuth();

  const [count, setCount] = useState(0);
  const [tesztertek, setTesztertek] = useState("");
  useEffect(() => {
    //console.log(loggedUser);
  }, [isLoggedIn]);
  function Hozzaadszamot(szam) {
    setCount((count) => {
      return count + szam;
    });
  }
  async function Teszt() {
    await fetch("http://localhost:" + import.meta.env.VITE_PORT + "/teszt", {
      method: "GET",
      headers: { authtoken: cookies.get("userData").authtoken || null },
    })
      .then((res) => {
        //console.log(res.headers.authtoken);
        return res.json();
      })
      .then((datas) => {
        //console.log(datas);
        setTesztertek(datas.name);
      });
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        Üdvözöljük a fő oldalon {isLoggedIn ? loggedUser.email : ""}
      </h1>
      <div className="main_body flex justify-center">
        <div>
          <p>HI</p>
          <div className="Gomb">
            <button onClick={() => Hozzaadszamot(1)} name="szamlako">
              Számlálás:{count}
            </button>
          </div>
          <div className="gomb2">
            <button onClick={() => Teszt()} name="teszt">
              Teszt:{tesztertek}
            </button>
          </div>
          <Cards />
        </div>
      </div>
    </>
  );
}
