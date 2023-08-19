import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key":'e1bbfeb5bamshb32237c7f8ea5c8p1f0953jsn8d0cd72f379f',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    // Handle the error here
    console.error("An error occurred while fetching data:", error);
    throw error; // Re-throw the error to be handled further up the call stack if needed
  }
};
