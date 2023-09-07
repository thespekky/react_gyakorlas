import { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext/AuthContext";
import Cookies from "universal-cookie";
import React from "react";
import { fetchData } from "../../FetchData/FetchData";
const cookies = new Cookies();
const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const { loggedUser, setUser } = useAuth();
  /*const fetchData = async () => {
    const body = await {
      email: loggedUser.email,
      ID: loggedUser.id,
    };
    try {
      setLoading(true);
      await fetch("http://localhost:" + import.meta.env.VITE_PORT + "/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("userData").authtoken}`,
        },
        body: JSON.stringify(body),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //console.log(data.cards);
          if (data.cards) {
            setCards(data.cards);
          }

          //console.log(cards);
        });
    } catch (e) {
      console.error("Error fetching data:", e);
    }
    setLoading(false);
  };*/
  useEffect(() => {
    // console.log("useEffect cards");
    const fetchCards = async () => {
      //console.log(cookies.get("userData"));
      const body = {
        email: cookies.get("userData").email,
        ID: cookies.get("userData").id,
      };
      try {
        setLoading(true);
        //console.log("cards:" + body.email);
        //console.log("waiting to fetch");
        const data = await fetchData(body);
        //console.log(data);
        if (data.cards) {
          setCards(data.cards);
        }
      } catch (e) {
        console.error("Error fetching data:", e);
      }
      setLoading(false);
    };
    if (cookies.get("userData")) {
      fetchCards();
    }
  }, []);
  return (
    <>
      <div>
        {!loading ? (
          cards.map((card) => (
            <React.Fragment key={card.ID}>
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </React.Fragment>
          ))
        ) : (
          <p>No cards available</p>
        )}
        <p>asd</p>
      </div>
    </>
  );
};
export default Cards;
