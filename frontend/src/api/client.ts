// src/api/client.ts
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router"; // Import directly instead of useRouter

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

let isRefreshing = false;

// Request interceptor to add token
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return Promise.reject(error);
      }
      
      isRefreshing = true;
      originalRequest._retry = true;

      // Clear stored tokens
      await AsyncStorage.multiRemove(["authToken", "userId"]);

      // Redirect to login
      router.replace("/signin"); // Use router directly
      isRefreshing = false;
    }

    return Promise.reject(error);
  }
);

export default api;