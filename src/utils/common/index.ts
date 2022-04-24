import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    //"Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Content-type": "application/json",
  },
});
