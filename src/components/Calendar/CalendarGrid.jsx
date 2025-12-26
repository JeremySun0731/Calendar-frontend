import CalendarCell from "./CalendarCell";

export default function CalendarGrid({ date }) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];

  for (let i = 0; i < 42; i++) {
    const dayNumber = i - firstDayOfMonth + 1;

    cells.push(
      <CalendarCell
        key={i}
        day={
          dayNumber > 0 && dayNumber <= daysInMonth
            ? dayNumber
            : null
        }
      />
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: 12,
        background: "#eefaf4",
        padding: 16,
        borderRadius: 16,
      }}
    >
      {cells}
    </div>
  );
}
