import axios from "axios";

export default axios.create({
  baseURL: 
  process.env.NODE_ENV === "production"
    ? "https://api-profood.herokuapp.com/"
    : "http://localhost:8000",
    
});
