import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const texts = [
  "Experience Design",
  "Creative Development",
  "Media Services",
  "Video Production",
  "Digital Marketing",
  "Brand Strategy",
  "Content Creation",
  "Web Development",
  "Social Media Management",
  "",
  "",
  "",
];

export default function ServiceSection() {
  const containerRef = useRef(null);

  // Track scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // track entire section
  });

  // Map scroll progress to text index
  const index = useTransform(scrollYProgress, [0, 1], [0, texts.length]);

  return (
    <div className="relative h-[300vh]" ref={containerRef}>
      {/* Sticky full screen text section */}
      <div
        style={{
          backgroundImage: "url(images/service-bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="sticky top-0 h-screen flex gap-1 flex-col items-center justify-center overflow-hidden bg-transparent"
      >
        <div className="absolute bg-black z-30"></div>
        {/* Text Section 1 */}
        <div className="relative h-[15px] sm:h-[23px] lg:h-[30px] overflow-hidden text-center w-full">
          {texts.map((text, i) => {
            const y = useTransform(index, (val) => `${(i - val) * 100}%`);
            return (
              <motion.div
                key={i}
                style={{ y }}
                className="absolute w-full h-[50px] sm:h-[58px] lg:h-[70px] text-3xl sm:text-5xl lg:text-7xl text-gray-300 opacity-15 -bottom-7"
              >
                {text}
              </motion.div>
            );
          })}
        </div>

        {/* Text Section 2 */}
        <div className="relative h-[38px] sm:h-[55px] lg:h-[80px] overflow-hidden text-center w-full">
          {texts.map((text, i) => {
            const y = useTransform(index, (val) => `${(i - val) * 100}%`);
            return (
              <motion.div
                key={i}
                style={{ y }}
                className="absolute text-3xl h-[45px] sm:h-[65px] lg:h-[100px] w-full sm:text-5xl lg:text-7xl font-semibold text-yellow-400"
              >
                {text}
              </motion.div>
            );
          })}
        </div>

        {/* Text Section 3 */}
        <div className="relative h-[15px] sm:h-[23px] lg:h-[30px] overflow-hidden text-center w-full">
          {texts.map((text, i) => {
            const y = useTransform(index, (val) => `${(i - val) * 100}%`);
            return (
              <motion.div
                key={i}
                style={{ y }}
                className="absolute w-full h-[38px] sm:h-[53px] lg:h-[72px] text-3xl sm:text-5xl lg:text-7xl text-gray-300 opacity-15 -bottom-0.5"
              >
                {text}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
