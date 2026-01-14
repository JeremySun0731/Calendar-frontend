export default function WeatherPanel({ data }) {
  return (
    // Weather information card
    <div style={cardStyle}>
       <h2>🌡 Current Conditions</h2>
       <p>Temperature: {data.temperature}°C</p>
       <p>Feels Like: {data.feelsLike}°C</p>
       <p>Condition: {data.condition}</p>
       <p>Humidity: {data.humidity}%</p>
       <p>UV Index: {data.uvIndex}</p>
    </div>
  );
}
// Common card style
const cardStyle = {
  background: "#fff",
  borderRadius: 16,
  padding: 16,
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  marginBottom: 16
};