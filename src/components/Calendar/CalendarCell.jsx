export default function CalendarCell({ day }) {
  const isEmpty = day === null;
  // Render individual calendar cell
  return (
    // Calendar cell container
    <div
      style={{
        height: 72,
        borderRadius: 14,
        background: isEmpty ? "#f3fbf6" : "#ffffff",
        border: "1px solid #dfeee6",
        padding: 8,
        fontWeight: 600,
        color: isEmpty ? "transparent" : "#1e2d24",
        boxShadow: isEmpty
          ? "none"
          : "0 4px 10px rgba(0,0,0,0.05)",
        transition: "all 0.2s ease",
        cursor: isEmpty ? "default" : "pointer",
      }}
      // Hover effect
      onMouseEnter={(e) => {
        if (!isEmpty) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow =
            "0 10px 20px rgba(46, 204, 113, 0.25)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 10px rgba(0,0,0,0.05)";
      }}
    >
      {day}
    </div>
  );
}
