// src/App.tsx
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TodosPage } from "./pages/TodosPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { MyPage } from "./pages/MyPage";

// QueryClient 생성
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col items-center justify-center h-screen">
          {/* 네비게이션 버튼 */}
          <nav className="flex space-x-4 mb-8">
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              로그인
            </Link>
            <Link
              to="/register"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              회원가입
            </Link>
            <Link
              to="/mypage"
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              마이페이지
            </Link>
          </nav>

          {/* 라우팅 설정 */}
          <Routes>
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
