import axios from "axios";

//AWS: 15.228.236.137
//LOCAL: "http://192.168.18.4:3001"

const api = axios.create({
    //baseURL: "http://192.168.18.4:3001" //LOCAL
    baseURL: "http://15.228.236.137:3001" //AWS
});

export default api