export default function DailyForecast({ data }) {
    return (
        // Daily forecast information card
        <div style={cardStyle}>
            <h2>📅 Daily Forecast</h2>
            {data.map((day, index) => (
                <div key={index} style={dayStyle}>
                    <p><strong>{day.date}</strong></p>
                    <p>High: {day.high}°C, Low: {day.low}°C</p>
                    <p>Condition: {day.condition}</p>
                </div>
            ))}
        </div>
    );
}
// Common card style
const cardStyle = {
    background: "#fff",
    borderRadius: 16,
    padding: 16, 
    marginBottom: 16
};
const row = {
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 0",
};