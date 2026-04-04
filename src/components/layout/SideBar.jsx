import { Link, useLocation } from "react-router-dom";
import { Calendar, CloudSun, AlertTriangle, Shield } from "lucide-react";

export default function SideBar({ width, onResize }) {
  const location = useLocation();

  const items = [
    { path: "/", label: "Calendar", icon: Calendar, color: "blue" },
    { path: "/weather", label: "Weather", icon: CloudSun, color: "sky" },
    { path: "/extreme", label: "Extreme Weather", icon: AlertTriangle, color: "red" },
    { path: "/tips", label: "Safety Tips", icon: Shield, color: "green" },
  ];

  const startDrag = (e) => {
    const startX = e.clientX;
    const startWidth = width;

    const onMouseMove = (moveEvent) => {
      const newWidth = startWidth + (moveEvent.clientX - startX);
      if (newWidth >= 160 && newWidth <= 360) {
        onResize(newWidth);
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      {/* Sidebar */}
      <div
        style={{ width }}
        className="bg-gradient-to-b from-emerald-500 to-green-600 text-white p-6 shadow-2xl"
      >
        <h3 className="mb-8 text-lg font-semibold tracking-wide">
          Function
        </h3>

        <div className="space-y-4">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
               className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-300 group
                   transform
              ${
                 isActive
                 ? "bg-white/10 shadow-md"
                  : "hover:bg-white/5 hover:-translate-y-1 hover:shadow-lg"
           }
`}
              >
                <Icon
                  size={22}
                  className={`
                    transition-all duration-500
                    neon-${item.color}
                    ${
                      isActive
                        ? "neon-active scale-110"
                        : "group-hover:scale-110"
                    }
                  `}
                />
                <span className="font-medium tracking-wide">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Resize Handle */}
      <div
        onMouseDown={startDrag}
        style={{
          width: 6,
          cursor: "ew-resize",
          background: "transparent",
        }}
      />
    </div>
  );
}