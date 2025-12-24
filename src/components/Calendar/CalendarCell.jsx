export default function CalendarCell({ day }) {
  return (
    <div
      style={{
        height: 80,
        background: day ? "#ffffff" : "#f5f5f5",
        border: "1px solid #ccc",
        padding: 6,
        boxSizing: "border-box",
        color: day ? "#000" : "#999",
      }}
    >
      {day}
    </div>
  );
}
