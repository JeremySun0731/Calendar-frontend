import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/layout/SideBar";
import CalendarPage from "./pages/CalendarPage";

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
      <Layout />
    </BrowserRouter>
  );
}