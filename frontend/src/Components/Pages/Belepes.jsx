import { useRef } from "react";
import { useAuth } from "../AuthContext/AuthContext";

export default function Belepes() {
  const { login } = useAuth();
  const Email = useRef();
  const Password = useRef();

  async function SubmitLogin(e) {
    e.preventDefault();
    await fetch("http://localhost:3000/")
      .then((res) => {
        return res.json();
      })
      .then((datas) => {
        console.log(datas);
        datas.map((data) => {
          console.log(data);
          if (data.email === Email.current.value) {
            alert("Email egyezik" + Email.current.value);
          } else {
            alert(
              "Nem egyezik:" +
                data.email +
                " amit megadtunk: " +
                Email.current.value
            );
          }
        });
      });

    console.log({
      Email: Email.current.value,
      Password: Password.current.value,
    });
  }
  return (
    <div className="logindiv">
      <form onSubmit={SubmitLogin} className="bg-red-500 w-96 h-96">
        <label htmlFor="">Email</label>
        <br />
        <input type="email" ref={Email} name="email" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" ref={Password} name="password" />
        <br />
        <input type="submit" value="Belépés" onClick={login} />
      </form>
    </div>
  );
}
