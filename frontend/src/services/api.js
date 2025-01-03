import axios from "axios";

const API = axios.create({
  baseURL: "https://employeeexitmanager.onrender.com/api",
});

export default API;
