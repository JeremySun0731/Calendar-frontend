import CalendarCell from "./CalendarCell";

export default function CalendarGrid({ date }) {
    // Calculate the necessary values for rendering the calendar grid
  const year = date.getFullYear();
  const month = date.getMonth();
    // First day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
    // Fill in the cells for the calendar grid (6 weeks x 7 days = 42 cells)
  for (let i = 0; i < 42; i++) {
    const dayNumber = i - firstDayOfMonth + 1;

    cells.push(
      <CalendarCell
        key={i}
        day={dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : null}
      />
    );
  }

  return (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: 4,
      background: "#ddd",
      padding: 4,
    }}
  >
    {cells}
  </div>
);
}