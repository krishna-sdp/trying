import React from "react";
import { useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";

export default function Cursor({ children }) {
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <div className="something">
      <div className="" ref={ref}>
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        ></motion.div>
        {children}
      </div>
    </div>
  );
}
