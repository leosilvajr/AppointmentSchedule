import axios from "axios";

// //Acesso via API na AWS
const api = axios.create({
    baseURL: "http://15.228.236.137:3001" 
});

//Acesso via LOCALHOST
// const api = axios.create({
//     baseURL: "http://192.168.18.4:3001" 
// });


export default api