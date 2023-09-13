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
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
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
    <Suspense fallback={<div>Loading data...</div>}>
      <div>
        <h1>{card.title}</h1>
        <section>{card.content}</section>
      </div>
    </Suspense>
  );
};
export default Card;
