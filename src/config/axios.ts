import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://telegram-mini-app-api-m2uy.onrender.com/api",
  headers: {
    "TELEGRAM-USER-ID": "1234568",
  },
});

export default axios;
