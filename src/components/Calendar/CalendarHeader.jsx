export default function CalendarHeader() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: 10,
        textAlign: "center",
        fontWeight: 700,
        color: "#2d7a46",
        paddingBottom: 12,
        borderBottom: "2px solid #e2f4ea",
        marginBottom: 16,
      }}
    >
      {days.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
}
