// src/api/authApi.ts
import axios from "axios";

export const loginUser = async (userInfo: { id: string; password: string }) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/login`,
    userInfo,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const registerUser = async (userInfo: {
  id: string;
  password: string;
  nickname: string;
}) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/register`,
    userInfo,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const getUserProfile = async (accessToken: string) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
