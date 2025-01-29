import axios from "axios";

const testApi = axios.create({
  baseURL: "http://localhost:9090",
});

export default testApi;
