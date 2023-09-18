import React from "react";
import { useEffect, useState, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
import { GetData } from "../../FetchData/FetchData";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Card = () => {
  //console.log(useParams().id);
  let id = useParams().id;
  const [card, setCard] = useState([]);
  const { isLoggedIn, logout } = useAuth();
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
                id=""
                defaultValue={card.title}
              />

              <button
                className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 rounded-md p-2 text-white"
                type="button"
              >
                Vissza állít
              </button>
            </div>
            <div>
              <textarea
                className="p-1 mt-2 w-full rounded-2xl h-64"
                name=""
                id=""
                cols="170"
                defaultValue={card.content}
                rows="20"
              ></textarea>
            </div>
            <div>
              <button
                className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 rounded-md p-2 text-white"
                type="button"
              >
                Text Vissza állítás
              </button>
            </div>
            <div className="modositas">
              <div>
                <button
                  type="button"
                  className="bg-red-500  hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 rounded-md p-2 text-white"
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
