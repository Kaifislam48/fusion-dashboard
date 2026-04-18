import axios from "axios";

const API = axios.create({
  baseURL: "https://fusion-dashboard.onrender.com/api"
});

export const getDataPoints = () => API.get("/data");
