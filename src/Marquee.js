import { motion } from "framer-motion";

export default function Marquee(props) {
  const {
    itemSize,
    gap,
    items,
    speed,
    bgColorStart,
    bgColorEnd,
    shadowWidth
  } = props;

  const marqueeContainer = {
    display: "flex",
    gap: gap,
    width: "fit-content"
  };

  const edgeStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    width: shadowWidth,
    height: itemSize
  };

  const itemStyle = {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div style={{ width: "fit-content" }}>
      <motion.div
        style={marqueeContainer}
        animate={{ x: -1 * (itemSize + gap) * items.length }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: "Infinity"
        }}
      >
        {props.items.map((item) => {
          return <div style={itemStyle}>{item}</div>;
        })}
        {props.items.map((item) => {
          return <div style={itemStyle}>{item}</div>;
        })}
      </motion.div>
      <div
        style={{
          ...edgeStyle,
          background: `linear-gradient(90deg, ${bgColorStart} 0%, ${bgColorEnd} 100%)`,
          left: 0
        }}
      ></div>
      <div
        style={{
          ...edgeStyle,
          background: `linear-gradient(90deg, ${bgColorEnd} 0%, ${bgColorStart} 100%)`,
          right: 0
        }}
      ></div>
    </div>
  );
}
