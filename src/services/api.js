import axios from "axios";
import store from "../store";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

api.interceptors.request.use(config => {
  const { token } = store.getState().auth;
  const headers = { ...config.headers };
  const { active: team } = store.getState().teams;
  const { modalUploadOpen } = store.getState().files;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  headers.common.Accept = "multipart/form-data;";
  headers.common["Content-Type"] = "multipart/form-data;";

  if (team) {
    headers.TEAM = team.slug;
    console.log(headers);
  }

  return { ...config, headers };
});
export default api;
