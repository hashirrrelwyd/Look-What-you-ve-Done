import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./css/team.css";

const teamImages = [
  "/images/team-1.jpg",
  "/images/team-2.png",
  "/images/team-3.png",
  "/images/team-4.png",
  "/images/team-1.jpg",
  "/images/team-2.png",
  "/images/team-3.png",
];

export default function TeamSection() {
  const containerRef = useRef(null);

  // Track scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // track entire section
  });

  // Map scroll progress to transformations
  const imageTransform = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textTransform = useTransform(scrollYProgress, [0, 1], [-150, 1360]); // For LW/YD text
  //const centerImageScale = useTransform(scrollYProgress, [0, 1], [1, 0.4]); // Shrink center image
  const imagePosition = useTransform(scrollYProgress, [0, 1], [0, -100]); // Move surrounding images
  const descriptionOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]); // Fade in description

  return (
    <div
      ref={containerRef}
      className="team-section h-screen bg-white flex justify-center items-center relative "
    >
      {/* Scattered Images */}
      {teamImages.map((image, index) => (
        <motion.div
          key={index}
          className="team-image"
          style={{
            backgroundImage: `url(${image})`,
            position: "absolute",
            top: `${index < 3 ? "10%" : "80%"}`, // Adjust top position for visual balance
            left: `${index % 2 === 0 ? "10%" : "80%"}`, // Adjust left position for visual balance
            width: "200px",
            height: "120px", // Landscape aspect ratio
            backgroundSize: "cover",
            backgroundPosition: "center",
            //scale: centerImageScale, // Shrink effect
            x: imagePosition, // Move images to center
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
        />
      ))}

      {/* LW and YD text */}
      <motion.div
        className="team-text-left absolute z-20"
        style={{ left: textTransform, top: "50%" }}
      >
        <span className="text-6xl font-bold">
          <span className="text-lwyd-yellow">/</span>LW
        </span>
      </motion.div>
      <motion.div
        className="team-text-right absolute z-20"
        style={{ right: textTransform, top: "50%" }}
      >
        <span className="text-6xl font-bold">YD</span>
      </motion.div>

      {/* Centered team image */}
      <motion.div
        className="team-main-image"
        style={{
          backgroundImage: `url(/images/team-1.jpg)`,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: "550px",
          height: "400px", // Landscape aspect ratio
          backgroundSize: "cover",
          backgroundPosition: "center",
          //scale: centerImageScale, // Shrink the center image
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
      />

      {/* Description */}
      <motion.div
        className="team-description absolute bottom-0 w-full text-center text-gray-600 flex flex-col justify-center items-center"
        animate={{
          opacity: descriptionOpacity,
        }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="/contact" className="flex text-black">
          Contact Us <img src="/svg/arrow.svg" alt="" className="" />
        </a>
      </motion.div>
    </div>
  );
}
