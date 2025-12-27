export default function SideBar({ width, onResize, current, onSelect }) {
  const items = [
    { key: "calendar", label: "📅 Calendar" },
    { key: "weather", label: "🌦 Weather" },
    { key: "extreme", label: "⚠ Extreme Weather" },
    { key: "tips", label: "🛡 Safety Tips" },
  ];

  const startDrag = (e) => {
    // Initial positions
    const startX = e.clientX;
    const startWidth = width;
    // Mouse move handler
    const onMouseMove = (moveEvent) => {
      const newWidth = startWidth + (moveEvent.clientX - startX);
      if (newWidth >= 160 && newWidth <= 360) {
        onResize(newWidth);
      }
    };
    // Mouse up handler
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };
  // Render sidebar
  return (
    <div style={{ display: "flex", height: "100%" }}>
      {/* Sidebar */}
      <div
        style={{
          width,
          background: "linear-gradient(180deg, #2ecc71, #27ae60)",
          color: "#fff",
          padding: "24px 16px",
          boxSizing: "border-box",
        }}
      >
        <h3 style={{ marginBottom: 24 }}>Function</h3>

        {items.map((item) => (
          <div
            key={item.key}
            onClick={() => onSelect(item.key)}
            style={{
              padding: "10px 12px",
              marginBottom: 8,
              borderRadius: 10,
              cursor: "pointer",
              background:
                current === item.key
                  ? "rgba(255,255,255,0.25)"
                  : "transparent",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

        {/* Resize Handle */}
      <div
        onMouseDown={startDrag}
        style={{
          width: 6,
          cursor: "ew-resize",
          background: "rgba(0,0,0,0)",
        }}
      />
    </div>
  );
}
