import { useEffect, useState, Suspense } from "react";
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

  useEffect(() => {
    const fetchCards = async () => {
      const body = {
        email: cookies.get("userData").email,
        ID: cookies.get("userData").id,
      };
      try {
        setLoading(true);
        const data = await fetchData(body);
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
  /* <div className="border-rose-900 border-2 m-1 w-2/12 space-x-8 cardsContent h-56">
              <h2>{card.title}</h2>
              <p className="">{card.content}</p>
            </div> */
  return (
    <>
      <div className=" flex flex-row cardsFlex flex-wrap">
        <Suspense fallback={<p>No cards available</p>}></Suspense>
        {cards.map((card) => (
          <React.Fragment key={card.ID}>
            <div className="w-96 rounded overflow-hidden shadow-lg border-rose-900 bg-slate-300 m-2">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base pcontent">
                  {card.content}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
export default Cards;
