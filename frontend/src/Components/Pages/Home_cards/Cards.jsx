import { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext/AuthContext";
import Cookies from "universal-cookie";
import React from "react";
const cookies = new Cookies();
const Cards = () => {
  const [cards, setCards] = useState([]);
  const { isLoggedIn, logout } = useAuth();
  const { loggedUser, setUser } = useAuth();
  const fetchData = async () => {
    const body = await {
      email: loggedUser.email,
      ID: loggedUser.id,
    };
    try {
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
          setCards(data.cards);
          //console.log(cards);
        });
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };
  /*useEffect(() => {
    if (isLoggedIn) {
      //console.log("fetch");
      fetchData();
    }
  }, []);*/
  useEffect(() => {
    fetchData();
  }, []);
  /* useEffect(() => {
    //console.log(cards);
  }, [cards]);*/
  return (
    //<div>
    //{
    /*isLoggedIn
              ? fetching
                ? `Fetching data...${loggedUser.id}`
                : cards.map((item) => {
                    <>
                      <h2>{item.title}</h2>
                      <p>{item.content}</p>
                    </>;
                  })
              : ""
          cards.map((item) => {
            <>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </>;
          })
        }

        <p>asd</p>
      </div>*/
    <>
      <div>
        {cards.length > 0 ? (
          cards.map((item) => (
            <React.Fragment key={item.ID}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
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
