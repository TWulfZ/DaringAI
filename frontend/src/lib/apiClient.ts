import getToken from "@utils/getToken";
import axios from "axios";

const API_URL = "http://localhost:3000/api";

const token = await getToken();

const config = {
  headers: {
    Authorization: `Bearer: ${token}`
  },
}

const apiClient = axios.create({
  baseURL: API_URL,
  headers: config.headers
})

apiClient.interceptors.request.use()

export default apiClient;