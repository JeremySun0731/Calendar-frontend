import { useState } from "react";
import CalendarHeader from "../Calendar/CalendarHeader";
import CalendarGrid from "../Calendar/CalendarGrid";

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
        width: 820,
        margin: "40px auto",
        padding: 26,
        borderRadius: 22,
        background: "linear-gradient(135deg, #2ecc71, #1abc9c)",
        boxShadow: "0 30px 60px rgba(0,0,0,0.18)",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 18,
          padding: 26,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 22,
          }}
        >
          <button style={navBtn} onClick={goPrevMonth}>
            ◀
          </button>

          <h2
            style={{
              margin: 0,
              fontSize: 30,
              fontWeight: 900,
              background:
                "linear-gradient(135deg, #2ecc71, #1abc9c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </h2>

          <button style={navBtn} onClick={goNextMonth}>
            ▶
          </button>
        </div>

        <CalendarHeader />
        <CalendarGrid date={currentDate} />
      </div>
    </div>
  );
}

const navBtn = {
  border: "none",
  background: "linear-gradient(135deg, #2ecc71, #1abc9c)",
  color: "#fff",
  width: 42,
  height: 42,
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: 16,
  boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
};
