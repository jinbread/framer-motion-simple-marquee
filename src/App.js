import "./styles.css";
import Marquee from "./Marquee";

const sampleStyle = {
  width: 160,
  height: 160,
  display: "flex",
  fontSize: "1.4em",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0,
  borderRadius: 32,
  color: "rgba(0, 0, 0, .6)",
  fontWeight: 700
};

const itemSample = [
  <div style={{ ...sampleStyle, background: "cyan" }}>1</div>,
  <div style={{ ...sampleStyle, background: "pink" }}>2</div>,
  <div style={{ ...sampleStyle, background: "lightgreen" }}>3</div>,
  <div style={{ ...sampleStyle, background: "gold" }}>4</div>,
  <div style={{ ...sampleStyle, background: "magenta" }}>5</div>,
  <div style={{ ...sampleStyle, background: "AntiqueWhite" }}>6</div>,
  <div style={{ ...sampleStyle, background: "coral" }}>7</div>,
  <div style={{ ...sampleStyle, background: "DarkTurquoise" }}>8</div>,
  <div style={{ ...sampleStyle, background: "LightSeaGreen" }}>9</div>,
  <div style={{ ...sampleStyle, background: "lightblue" }}>10</div>,
  <div style={{ ...sampleStyle, background: "gold" }}>11</div>,
  <div style={{ ...sampleStyle, background: "forestgreen" }}>12</div>,
  <div style={{ ...sampleStyle, background: "lavenderblush" }}>13</div>,
  <div style={{ ...sampleStyle, background: "lightyellow" }}>14</div>
];

export default function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 120
      }}
    >
      <div style={{ width: 1000, position: "relative", overflow: "hidden" }}>
        <Marquee
          itemSize={160}
          gap={20}
          items={itemSample}
          speed={40}
          bgColorStart="rgba(255, 255, 255, 1)"
          bgColorEnd="rgba(255, 255, 255, 0)"
          shadowWidth={200}
        />
      </div>
    </div>
  );
}
