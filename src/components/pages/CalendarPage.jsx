import { useState } from "react";
import CalendarHeader from "../Calendar/CalendarHeader";
import CalendarGrid from "../Calendar/CalendarGrid";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const goPrevMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
    setSelectedDay(null);
  };

  const goNextMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
    setSelectedDay(null);
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
        padding: 18,
        borderRadius: 18,
        background: "linear-gradient(135deg, #2ecc71, #1abc9c)",
        boxShadow: "0 30px 60px rgba(0,0,0,0.18)",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 14,
          padding: 18,
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
          <button style={navBtn} onClick={goPrevMonth}>◀</button>

          <h2
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 800,
              color: "#fff",
              background: "linear-gradient(135deg, #2ecc71, #1abc9c)",
              padding: "4px 16px",
              borderRadius: 12,
            }}
          >
            {title}
          </h2>

          <button style={navBtn} onClick={goNextMonth}>▶</button>
        </div>

        <CalendarHeader />
        <CalendarGrid
          date={currentDate}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />
      </div>
    </div>
  );
}

const navBtn = {
  border: "none",
  background: "linear-gradient(135deg, #2ecc71, #1abc9c)",
  color: "#fff",
  width: 36,
  height: 36,
  borderRadius: "50%",
  cursor: "pointer",
  fontSize: 14,
  boxShadow: "0 6px 12px rgba(0,0,0,0.25)",
};
