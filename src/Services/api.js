import axios from "axios"

// Create base API
const api = axios.create({
  baseURL: "http://desafioonline.webmotors.com.br/api",
});

// Export base API
export default api;