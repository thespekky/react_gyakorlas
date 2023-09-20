import React from "react";
import { useEffect, useState, Suspense, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
import { GetData, UniversalUpdate } from "../../FetchData/FetchData";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Card = () => {
  //console.log(useParams().id);
  let id = useParams().id;
  const [card, setCard] = useState([]);
  const { isLoggedIn, logout } = useAuth();
  const Title = useRef();
  const Content = useRef();
  useEffect(() => {
    if (!cookies.get("userData")) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    const fetchTheCard = async () => {
      const data = await GetData(id);
      if (data.card) {
        setCard(data.card);
      } else {
        console.log("error,data.cards tartalma: " + data.card);
      }
    };
    if (cookies.get("userData")) {
      fetchTheCard();
    }
  }, []);
  const navigate = useNavigate();
  async function Change() {
    const body = {
      ID: id,
      Title: Title.current.value,
      Content: Content.current.value,
    };
    //console.log(body);
    await UniversalUpdate("/card/update", body);
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Adat Módosítása</h1>
      <div className="main_body flex justify-center">
        <div className="card_main">
          <Suspense fallback={<div>Loading data...</div>}>
            <label>A neve</label>
            <div className="flex justify-center cardInputs">
              <input
                type="text"
                name=""
                className="cardInput"
                id="title"
                defaultValue={card.title}
                ref={Title}
              />

              <button
                className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 rounded-md p-2 text-white"
                type="button"
                onClick={() => {
                  document.getElementById("title").value = card.title;
                }}
              >
                Vissza állít
              </button>
            </div>
            <div>
              <textarea
                className="p-1 mt-2 w-full rounded-2xl h-64"
                name=""
                id="textarea"
                cols="170"
                defaultValue={card.content}
                rows="20"
                ref={Content}
              ></textarea>
            </div>
            <div>
              <button
                className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 rounded-md p-2 text-white"
                type="button"
                onClick={() => {
                  document.getElementById("textarea").value = card.content;
                }}
              >
                Text Vissza állítás
              </button>
            </div>
            <div className="modositas">
              <div>
                <button
                  type="button"
                  className="bg-red-500  hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 rounded-md p-2 text-white"
                  onClick={Change}
                >
                  Módosítás
                </button>
              </div>
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
};
export default Card;
