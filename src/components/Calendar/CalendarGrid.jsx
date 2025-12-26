import CalendarCell from "./CalendarCell";

export default function CalendarGrid({ date }) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];

  for (let i = 0; i < 42; i++) {
    const dayNumber = i - firstDayOfMonth + 1;
    const day =
      dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : null;

    cells.push(
      <CalendarCell
        key={i}
        day={day}
        date={date}   // ✅ 关键：传当前月份的 date
      />
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: 8,
        background: "#eefaf4",
        padding: 10,
        borderRadius: 12,
      }}
    >
      {cells}
    </div>
  );
}
