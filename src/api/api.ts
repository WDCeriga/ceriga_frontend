import {
  localGetItem,
  localRemoveItem,
  localSetItem,
} from "../services/localStorage";
import axios from "axios";

import routes from "../routes";

const resetPage = () => {
  localRemoveItem("token");
  localRemoveItem("refresh");
  window.location.href = "/";
};

export const authApi = axios.create({
  baseURL: routes.server.base + routes.server.auth,
  headers: {
    "Content-Type": "application/json",
  },
});

export const defaultApi = axios.create({ 
  baseURL: routes.server.base
})

export const protectedApi = axios.create({
  baseURL: routes.server.base,
  headers: {
    "Content-Type": "application/json",
  },
});
protectedApi.interceptors.request.use((config) => {
  const token = localGetItem("token");
  if (config.headers && token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

protectedApi.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalRequest = err.config;

    if (
      err.response &&
      err.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localGetItem("refresh");

        if (!refreshToken) {
          resetPage();
          return Promise.reject(err);
        }

        const res = await axios.post(
          routes.server.base + routes.server.refresh,
          { refresh: refreshToken }
        );

        if (res.status === 200) {
          const { token } = res.data;
          localSetItem("token", token);
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          return protectedApi(originalRequest);
        } else {
          resetPage();
          return Promise.reject(err);
        }
      } catch (e) {
        console.error("Token refresh failed:", e);
        resetPage();
        return Promise.reject(e);
      }
    }

    return Promise.reject(err);
  }
);