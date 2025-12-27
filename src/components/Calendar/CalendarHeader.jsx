export default function CalendarHeader() {
    // Days of the week header
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // Render the header
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: 10,
        textAlign: "center",
        fontWeight: 600,
        color: "#2e7d32",
        marginBottom: 8,
      }}
    >
      {days.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
}
