// This Code is only for Framer Code components

import { motion } from "framer-motion";
import { addPropertyControls, ControlType } from "framer";

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

const itemStyle = {
  overflow: "hidden",
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

addPropertyControls(Marquee, {
  itemSize: {
    type: ControlType.Number,
    defaultValue: 160
  },
  gap: {
    type: ControlType.Number,
    defaultValue: 20
  },
  speed: {
    type: ControlType.Number,
    defaultValue: 20
  },
  items: {
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance
    }
  },
  shadowWidth: {
    type: ControlType.Number,
    defaultValue: 120
  },
  bgColorStart: {
    type: ControlType.Color,
    defaultValue: "rgba(255, 255, 255, 1)"
  },
  bgColorEnd: {
    type: ControlType.Color,
    defaultValue: "rgba(255, 255, 255, 0)"
  }
});
