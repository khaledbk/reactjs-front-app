import axios from "axios";

let authorization: string = "";

export default axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    //"Access-Control-Allow-Origin": "*",
    authorization: authorization,
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Content-type": "application/json",
  },
});
