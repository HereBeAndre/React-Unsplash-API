import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 24U4xr8hwW9Ltwc442UxoGTmH2YPf7-FrVm8GalmP8A",
  },
});
