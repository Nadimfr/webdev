import axios from "axios";

export const key = "Bearer " + sessionStorage.getItem("SESSION");

export let api = axios.create({
  baseURL: process.env.REACT_APP_WEB_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Set the AUTH token for any request
api.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("SESSION");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
