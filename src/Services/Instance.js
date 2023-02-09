const axios =require("axios")
//import AuthConfig from "../config/AuthConfig";

const Instance = axios.create({
  // baseURL: "http://192.168.0.179:3700/",
  // baseURL : "http://192.168.0.179:3700/",
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});
// Instance.interceptors.request.use( function(AuthConfig) {
//   const accessToken = (localStorage.getItem("accessToken")) || "public" ;
//   return {
//    // ...AuthConfig,
//     // headers: {
//     //   authorization: accessToken ? `Bearer ${accessToken}` : null,
//     // },
//   };
// });
export default Instance;
