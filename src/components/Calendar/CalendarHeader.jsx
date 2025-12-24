export default function CalendarHeader() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: 4,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
      }}
    >
      {days.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
}
