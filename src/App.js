import { useState } from "react";
import SideBar from "./components/layout/SideBar";
import CalendarPage from "./pages/CalendarPage";

export default function App() {
  // State for current page and sidebar width
  const [currentPage, setCurrentPage] = useState("calendar");
  const [sidebarWidth, setSidebarWidth] = useState(220);
  // Function to render the selected page
  const renderPage = () => {
    switch (currentPage) {
      case "calendar":
        return <CalendarPage />;
      case "weather":
        return <div>Weather Page (Coming Soon)</div>;
      case "extreme":
        return <div>Extreme Weather Page</div>;
      case "tips":
        return <div>Safety Tips Page</div>;
      default:
        return null;
    }
  };
  // Main layout
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <SideBar
        width={sidebarWidth}
        onResize={setSidebarWidth}
        current={currentPage}
        onSelect={setCurrentPage}
      />

      <div
        style={{
          flex: 1,
          padding: 24,
          overflow: "auto",
          background: "#f8fdf9",
        }}
      >
        {renderPage()}
      </div>
    </div>
  );
}
