import CalendarCell from "./CalendarCell";

export default function CalendarGrid({ date }) {
    // Generate calendar cells for the given month
  const year = date.getFullYear();
  const month = date.getMonth();
  // Calculate first day of month and total days in month
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
    // Create empty cells for days before the first of the month
  for (let i = 0; i < 42; i++) {
    const dayNumber = i - firstDayOfMonth + 1;
    const validDay = dayNumber > 0 && dayNumber <= daysInMonth;

    cells.push(
      <CalendarCell key={i} day={validDay ? dayNumber : null} />
    );
  }
  // Render the calendar grid
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: 10,
        padding: 16,
        background: "#eafaf1",
        borderRadius: 16,
      }}
    >
      {cells}
    </div>
  );
}
