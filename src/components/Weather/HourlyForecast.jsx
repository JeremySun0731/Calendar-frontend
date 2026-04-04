export default function HourlyForecast({ data }) {
    return (
        // Hourly forecast information card
        <div style={cardStyle}>
            <h2>🕒 Hourly Forecast</h2>
            {data.map((hour, index) => (
                <div key={index} style={hourCard}>
                    <time style={timeStyle}>{hour.time}</time>
                    <span style={tempStyle}>{hour.temp}</span>
                    <span style={conditionStyle}>{hour.condition}</span>
                </div>
            ))}
        </div>
    );
}
// Common card style
const hourCard = {
    minWidth: 80,
    padding:12,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
}
const timeStyle = {
    fontSize: 12,
    opacity: 0.7,
}
const tempStyle = {
  fontSize: 16,
  fontWeight: 600,
};

const conditionStyle = {
  fontSize: 14,
};