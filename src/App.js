import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./components/layout/SideBar";
import CalendarPage from "./pages/CalendarPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/login/RegisterPage";
import ForgotPasswordPage from "./pages/login/ForgotPasswordPage";

function Layout() {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex-1 p-6 overflow-auto bg-[#f8fdf9]">
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/weather" element={<div>Weather Page</div>} />
          <Route path="/extreme" element={<div>Extreme Weather Page</div>} />
          <Route path="/tips" element={<div>Safety Tips Page</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ⭐ 默认跳转到 login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* 登录 & 注册 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> 
        {/* 主页面 */}
        <Route path="/*" element={<Layout />} />

      </Routes>
    </BrowserRouter>
  );
}