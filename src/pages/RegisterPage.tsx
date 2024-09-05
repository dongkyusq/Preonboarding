// src/pages/RegisterPage.tsx
import { useState } from "react";
import { registerUser } from "../api/authApi";

export const RegisterPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    try {
      console.log({ id, password, nickname }); // 요청 데이터 확인
      const response = await registerUser({ id, password, nickname });
      setSuccessMessage("회원가입이 성공적으로 완료되었습니다.");
      setErrorMessage(""); // 에러 메시지 초기화
    } catch (error: any) {
      console.error("Error details: ", error.response?.data || error.message); // 서버 에러 확인
      if (error.response?.status === 409) {
        setErrorMessage("이미 존재하는 아이디 또는 닉네임입니다.");
      } else {
        setErrorMessage("회원가입에 실패했습니다.");
      }
      setSuccessMessage(""); // 성공 메시지 초기화
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">회원가입</h1>
      <input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border p-2 mt-2"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mt-2"
      />
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="border p-2 mt-2"
      />
      <button
        onClick={handleRegister}
        className="bg-blue-500 text-white p-2 mt-2"
      >
        회원가입
      </button>

      {successMessage && (
        <p className="text-green-500 mt-2">{successMessage}</p>
      )}
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};
