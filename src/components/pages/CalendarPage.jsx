import { useState } from "react";
import CalendarHeader from "../Calendar/CalendarHeader";
import CalendarGrid from "../Calendar/CalendarGrid";

export default function CalendarPage() {
    // State to hold the current date being viewed
  const [currentDate, setCurrentDate] = useState(new Date());
  // Function to go to the previous month
  const goPrevMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
  };
    // Function to go to the next month
  const goNextMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
  };
  // Format the title of the calendar
  const title = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div style={{ width: 720, margin: "24px auto" }}>
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
      <CalendarHeader />
      <CalendarGrid date={currentDate} />
    </div>
  );
}
