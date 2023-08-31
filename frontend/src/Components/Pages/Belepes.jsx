import { useRef } from "react";
import { useAuth } from "../AuthContext/AuthContext";

export default function Belepes() {
  const { login } = useAuth();
  const { loggedUser, setUser } = useAuth();
  const Email = useRef();
  const Password = useRef();

  async function SubmitLogin(e) {
    e.preventDefault();
    const body = {
      email: Email.current.value,
      password: Password.current.value,
    };
    await fetch("http://localhost:" + import.meta.env.VITE_PORT + "/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => {
        //console.log(res.json());
        return res.json();
      })
      .then((datas) => {
        //console.log(datas);
        if (datas.status === false) {
          alert("Nem található email cím!");
        } else {
          if (datas.password == Password.current.value) {
            setUser({
              id: datas.ID,
              email: Email.current.value,
              password: Password.current.value,
              name: datas.name,
            });
            /*loggedUser.email = Email.current.value;
            loggedUser.password = Password.current.value;
            loggedUser.name = datas[0].name;
            loggedUser.id = datas[0].ID;*/
            login({
              id: datas.ID,
              email: Email.current.value,
              password: Password.current.value,
              name: datas.name,
            });
          } else {
            alert("Rossz jelszó");
          }
          //console.log(datas[0].email);

          /*datas.map((data) => {
            console.log(data);
            if (data.email === Email.current.value) {
              alert("Email egyezik" + Email.current.value);
            } else {
            }
          });*/
        }
      });

    /* console.log({
      Email: Email.current.value,
      Password: Password.current.value,
    });*/
  }
  return (
    <div className="logindiv">
      <form onSubmit={SubmitLogin} className="bg-red-500 w-96 h-96">
        <label htmlFor="">Email</label>
        <br />
        <input type="email" className="p-4" ref={Email} name="email" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" className="p-4" ref={Password} name="password" />
        <br />
        <input type="submit" value="Belépés" />
      </form>
    </div>
  );
}
