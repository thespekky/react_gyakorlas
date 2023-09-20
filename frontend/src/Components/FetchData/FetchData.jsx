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
export async function GetData(id) {
  try {
    const response = await fetch(
      "http://localhost:" + import.meta.env.VITE_PORT + "/card/" + id,
      {
        method: "GET",
        headers: { authtoken: cookies.get("userData").authtoken || null },
      }
    );
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error fetching data:", e);
  }
}
export async function UniversalUpdate(path, body) {
  try {
    const response = await fetch(
      "http://localhost:" + import.meta.env.VITE_PORT + path,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${cookies.get("userData").authtoken || null}`,
        },
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      throw new Error("Update failed");
    }
  } catch (e) {
    console.error("Error Updating data:", e);
  }
}
//module.exports = fetchData;
