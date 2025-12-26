import { useState } from "react";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import CalendarGrid from "../components/Calendar/CalendarGrid";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goPrevMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
  };

  const goNextMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
  };

  const title = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div
      style={{
        width: 760,
        margin: "40px auto",
        background: "linear-gradient(145deg, #2ecc71, #27ae60)",
        padding: 18,
        borderRadius: 26,
        boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 20,
          padding: 20,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
          }}
        >
          <ArrowButton onClick={goPrevMonth}>◀</ArrowButton>

          <div
            style={{
              padding: "6px 18px",
              background: "linear-gradient(145deg, #2ecc71, #27ae60)",
              color: "#fff",
              borderRadius: 999,
              fontWeight: 700,
            }}
          >
            {title}
          </div>

          <ArrowButton onClick={goNextMonth}>▶</ArrowButton>
        </div>

        <CalendarHeader />
        <CalendarGrid date={currentDate} />
      </div>
    </div>
  );
}

/* 绿色圆形箭头按钮 */
function ArrowButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "none",
        background: "linear-gradient(145deg, #2ecc71, #27ae60)",
        color: "#fff",
        cursor: "pointer",
        fontSize: 16,
        boxShadow: "0 6px 12px rgba(0,0,0,0.18)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-2px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(0)")
      }
    >
      {children}
    </button>
  );
}
