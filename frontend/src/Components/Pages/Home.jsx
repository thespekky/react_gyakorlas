import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //console.log(count);
  }, [count]);
  function Hozzaadszamot(szam) {
    setCount((count) => {
      return count + szam;
    });
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <h1 className="bg-red-400">CSá</h1>
      <div className="Gomb">
        <button onClick={() => Hozzaadszamot(1)} name="szamlako">
          Számlálás:{count}
        </button>
      </div>
    </>
  );
}
