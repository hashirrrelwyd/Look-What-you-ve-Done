import { motion } from "framer-motion";
import { useCursor } from "../../context/CursorContext";

const CustomCursor = () => {
  const { mousePosition, hoverType } = useCursor();

  const getCursorStyles = () => {
    switch (hoverType) {
      case "button":
        return {
          width: 30,
          height: 30,
          backgroundColor: "#ffcc00",
          border: "none",
          opacity: 0.3,
        };
      case "image":
        return {
          width: 50,
          height: 50,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          border: "1px solid #333",
        };
      case "big-black":
        return {
          width: 30,
          height: 30,
          backgroundColor: "#111111",
          border: "none",
          opacity: 0.3,
        };
      case "big-white":
        return {
          width: 30,
          height: 30,
          backgroundColor: "#ffffff",
          border: "none",
          opacity: 0.3,
        };
      case "black":
        return {
          width: 15,
          height: 15,
          backgroundColor: "#111111",
          border: "none",
        };
      default:
        return {
          width: 15,
          height: 15,
          backgroundColor: "#ffffff",
          border: "none",
        };
    }
  };

  return (
    <motion.div
      className="cursor"
      initial={{ opacity: 0 }}
      animate={{
        x: mousePosition.x - 2,
        y: mousePosition.y - 2,
        opacity: 1,
        ...getCursorStyles(),
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
