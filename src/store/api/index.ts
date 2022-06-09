import axios from 'axios'

const apiUrl = process.env.NEXT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: `${apiUrl}/api/v1`,
  withCredentials: true,
})

export default api
