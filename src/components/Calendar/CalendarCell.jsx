export default function CalendarCell({ day }) {
  const today = new Date();
  const isToday = day && today.getDate() === day;

  return (
    <div
      style={{
        height: 104,
        borderRadius: 16,
        padding: 12,
        boxSizing: "border-box",
        background: isToday
          ? "linear-gradient(135deg, #2ecc71, #1abc9c)"
          : day
          ? "#ffffff"
          : "#dff3ea",
        color: isToday ? "#ffffff" : day ? "#2c3e50" : "#9bbfb0",
        boxShadow: day
          ? "0 10px 22px rgba(0,0,0,0.08)"
          : "none",
        cursor: day ? "pointer" : "default",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        if (day && !isToday) {
          e.currentTarget.style.transform =
            "translateY(-6px)";
          e.currentTarget.style.boxShadow =
            "0 18px 32px rgba(0,0,0,0.18)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = day
          ? "0 10px 22px rgba(0,0,0,0.08)"
          : "none";
      }}
    >
      <div
        style={{
          fontSize: 18,
          fontWeight: 900,
        }}
      >
        {day}
      </div>
    </div>
  );
}
