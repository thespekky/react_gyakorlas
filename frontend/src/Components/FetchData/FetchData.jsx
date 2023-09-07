import Cookies from "universal-cookie";
const cookies = new Cookies();
export async function fetchData(body) {
  try {
    //console.log(body);
    //console.log("started fetching with");
    //console.log(body);
    const response = await fetch(
      "http://localhost:" + import.meta.env.VITE_PORT + "/cards",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("userData").authtoken}`,
        },
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (e) {
    console.error("Error fetching data:", e);
  }
}
//module.exports = fetchData;
