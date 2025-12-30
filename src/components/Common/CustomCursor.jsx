import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "../../context/CursorContext";
import { useEffect } from "react";

const CustomCursor = () => {
  const { mousePosition, hoverType } = useCursor();

  // Use motion values for smoother animation without re-renders
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Apply spring physics to motion values
  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Update motion values when mouse position changes
  useEffect(() => {
    cursorX.set(mousePosition.x - 6);
    cursorY.set(mousePosition.y - 8);
  }, [mousePosition, cursorX, cursorY]);

  const getCursorStyles = () => {
    switch (hoverType) {
      case "button":
        return {
          width: 30,
          height: 30,
          backgroundColor: "#ffcc00",
          border: "none",
          opacity: 0.3,
          borderRadius: "50%"
        };
      case "image":
        return {
          width: 50,
          height: 50,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          border: "1px solid #333",
          borderRadius: "50%"
        };
      case "big-black":
        return {
          width: 30,
          height: 30,
          backgroundColor: "#111111",
          border: "none",
          opacity: 0.3,
          borderRadius: "50%"
        };
      case "big-white":
        return {
          width: 30,
          height: 30,
          backgroundColor: "#ffffff",
          border: "none",
          opacity: 0.3,
          borderRadius: "50%"
        };
      case "black":
        return {
          width: 15,
          height: 15,
          backgroundColor: "#111111",
          border: "none",
          borderRadius: "50%"
        };
      case "input":
        return {
          width: 1.5,
          height: 20,
          backgroundColor: "#111111",
          border: "none",
        };  
      case "next":
        return {
          width: 30,
          height: 30,
          backgroundColor: "transparent",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        };
      default:
        return {
          width: 15,
          height: 15,
          backgroundColor: "#ffffff",
          border: "none",
          borderRadius: "50%"
        };
    }
  };

  return (
    <motion.div
      className="cursor hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        ...getCursorStyles(),
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {hoverType === "next" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="90"
          fill="none"
          stroke="#ffcc00"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
    </motion.div>
  );
};

export default CustomCursor;
