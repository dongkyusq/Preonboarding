// src/pages/LoginPage.tsx
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { loginUser } from "../api/authApi"; // 회원가입이 아닌 로그인 API를 가져옴
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuthStore();
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleLogin = async () => {
    try {
      const response = await loginUser({ id, password });
      setToken(response.accessToken); // 로그인 성공 시 토큰 저장
      navigate("/mypage"); // 마이페이지로 이동
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
