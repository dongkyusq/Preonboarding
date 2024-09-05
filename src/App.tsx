// src/App.tsx
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TodosPage } from "./pages/TodosPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { MyPage } from "./pages/MyPage";
import * as Sentry from "@sentry/react"; // Sentry 모듈 추가
import { Replay } from "@sentry/replay"; // Replay 모듈 추가
import "./index.css";

// QueryClient 생성
const queryClient = new QueryClient();

// Sentry 초기화
Sentry.init({
  dsn: "https://077ab41cce28699d8d8b0e04c12bb0a7@o4507898947043328.ingest.us.sentry.io/4507898950385664",
  integrations: [
    // new BrowserTracing(),
    new Replay(), // Replay 통합 모듈 추가
  ],
  // Tracing
  tracesSampleRate: 1.0, // 모든 트랜잭션 기록
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // 세션 리플레이 샘플링 비율 (10%)
  replaysOnErrorSampleRate: 1.0, // 에러 발생 시 100% 세션 기록
});

function App() {
  return (
    <Sentry.ErrorBoundary fallback={<p>앱에서 문제가 발생했습니다.</p>}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="flex flex-col items-center justify-center h-screen">
            {/* 네비게이션 버튼 */}
            <nav className="flex space-x-4 mb-8">
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 mr-3 rounded"
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

            {/* 에러 발생 버튼 */}
            <button
              onClick={() => {
                // @ts-ignore
                methodDoesNotExist(); // 의도적으로 에러 발생
              }}
              className="bg-red-500 text-white px-4 py-2 rounded mt-8"
            >
              Break the world
            </button>
          </div>
        </Router>
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  );
}

export default App;
