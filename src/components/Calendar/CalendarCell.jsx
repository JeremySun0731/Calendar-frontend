export default function CalendarCell({ day, date, onClick }) {
  const today = new Date();

  // Check if this cell represents today
  const isToday =
    day &&
    date &&
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === day;

  return (
    // Calendar cell div
    <div
      onClick={() => {
        if (!day) return;
        if (typeof onClick === "function") onClick(day);
      }}
      style={{
        height: 78,
        borderRadius: 12,
        padding: 8,
        boxSizing: "border-box",
        
        background: isToday
          ? "linear-gradient(135deg, #2ecc71, #1abc9c)"
          : day
          ? "#ffffff"
          : "#dff3ea",

        color: isToday ? "#ffffff" : "#2c3e50",

        
        border: "none",

        boxShadow: day ? "0 6px 14px rgba(0,0,0,0.08)" : "none",
        cursor: day ? "pointer" : "default",
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
      }}
      // Hover effects
      onMouseEnter={(e) => {
        if (!day) return;
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 14px 28px rgba(0,0,0,0.18)";
      }}
      // Mouse leave effects
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = day ? "0 6px 14px rgba(0,0,0,0.08)" : "none";
      }}
    >
      <div style={{ fontSize: 15, fontWeight: 700 }}>{day}</div>
    </div>
  );
}
