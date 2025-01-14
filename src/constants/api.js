import axios from "axios";

const api = axios.create({
    baseURL: "http://15.228.236.137:3001" //AWS
});

export default api