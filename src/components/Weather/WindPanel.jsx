export default function WindPanel({ data }) {
  return (
    // Wind information card
    <div style={cardStyle}>
        <h2>🌬 Wind Details</h2>
        <div style={windList}>
        <div>Speed: {data.speed} km/h</div>
        <div>Direction: {data.direction}</div>
        <div>Gusts: {data.gusts} km/h</div>
      </div>
    </div>
  );
}
// Common card style
const cardStyle = {
  background: "#fff",
  borderRadius: 16,
  padding: 16,
  marginBottom: 16,
};