import { useRef } from "react";
import { useAuth } from "../AuthContext/AuthContext";

export default function Belepes() {
  const { login } = useAuth();
  const email = useRef();
  const password = useRef();

  function SubmitLogin(e) {
    e.preventDefault();
    console.log({
      email: email.current.value,
      password: password.current.value,
    });
  }
  return (
    <div className="logindiv">
      <form onSubmit={SubmitLogin} className="bg-red-500 w-96 h-96">
        <label htmlFor="">Email</label>
        <br />
        <input type="email" ref={email} name="email" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" ref={password} name="password" />
        <br />
        <input type="submit" value="Belépés" onClick={login} />
      </form>
    </div>
  );
}
