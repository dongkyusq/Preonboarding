// src/pages/MyPage.tsx
import { useEffect, useState } from "react";
import { getUserProfile } from "../api/authApi";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export const MyPage = () => {
  const { token } = useAuthStore();
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (token) {
          // token이 있을 때만 실행
          const profile = await getUserProfile(token);
          setNickname(profile.nickname);
        }
      } catch (error) {
        setErrorMessage("프로필 정보를 가져오는 데 실패했습니다.");
      }
    };

    if (!token) {
      navigate("/login"); // 토큰이 없으면 로그인 페이지로 리디렉션
    } else {
      fetchProfile();
    }
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">마이페이지</h1>
      {errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <p className="text-lg">닉네임: {nickname}</p>
      )}
    </div>
  );
};
