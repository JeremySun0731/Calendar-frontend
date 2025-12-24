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
    <div style={{ width: 720, margin: "24px auto" }}>
      {/* 月份切换 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <button onClick={goPrevMonth}>◀</button>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <button onClick={goNextMonth}>▶</button>
      </div>

      {/* 星期标题 */}
      <CalendarHeader />

      {/* 日历主体 */}
      <CalendarGrid date={currentDate} />
    </div>
  );
}
