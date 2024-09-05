// jest.config.js
module.exports = {
  preset: "ts-jest", // ts-jest로 변환기 설정
  testEnvironment: "jsdom", // 브라우저 환경에서 테스트 실행
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // setup 파일 경로
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // TypeScript 파일을 ts-jest로 변환
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", // CSS 파일을 무시하는 설정
    "\\.svg$": "jest-svg-transformer", // SVG 파일을 위한 변환기
  },
};
