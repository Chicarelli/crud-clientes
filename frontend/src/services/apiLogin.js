import axios from "axios";

const apiLogin = axios.create({
    baseURL: 'http://localhost:8000/api/login'
})

export default apiLogin;