import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
/*import "./App.css";*/
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Hozzaad from "./Components/Hozzaad.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const datas = [
    {
      title: "elso adat",
      size: "30",
      id: 1,
    },
    {
      title: "masodik adat",
      size: "20",
      id: 2,
    },
    {
      title: "harmadik adat",
      size: "25",
      id: 3,
    },
  ];
  const listedDatas = datas.map((data) => (
    <div
      className={data.size}
      style={{
        width: data.size + "px",
        height: data.size * 2 + "px",
      }}
    >
      {" "}
      title:{data.title},Id:{data.id}
    </div>
  ));

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hozzaad" element={<Hozzaad />} />
      </Routes>

      {/* {listedDatas}*/}
      {/*  <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </>
  );
}

export default App;
