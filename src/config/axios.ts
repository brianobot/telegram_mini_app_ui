import Axios from "axios";

const params = new URLSearchParams(window.location.search);
const userId = params.get("user_id");

const axios = Axios.create({
  baseURL: "https://telegram-mini-app-api-m2uy.onrender.com/api",
  headers: {
    "TELEGRAM-USER-ID": userId ? userId : "1234567",
  },
});

export default axios;
