export default function DailyForecast({ data }) {
  return (
    <div style={cardStyle}>
      <h2>📅 Daily Forecast</h2>
      {data.map((day, index) => (
        <div key={index} style={dayStyle}>
          <div style={dateStyle}>{day.date}</div>
          <div style={tempStyle}>
            <span>High {day.high}°C</span>
            <span>Low {day.low}°C</span>
          </div>
          <div style={conditionStyle}>{day.condition}</div>
        </div>
      ))}
    </div>
  );
}

const dayStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  padding: "8px 0",
};

const dateStyle = {
  fontWeight: 600,
};

const tempStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const conditionStyle = {
  opacity: 0.8,
};
