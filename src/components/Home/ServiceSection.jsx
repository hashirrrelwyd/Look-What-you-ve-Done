// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const texts = [
//   "Experience Design",
//   "Creative Development",
//   "Media Services",
//   "Video Production",
//   "Digital Marketing",
//   "Brand Strategy",
//   "Content Creation",
//   "Web Development",
//   "Social Media Management",
//   "",
//   "",
//   "",
// ];

// export default function ServiceSection() {
//   const containerRef = useRef(null);

//   // Track scroll progress inside this section
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"], // track entire section
//   });

//   // Map scroll progress to text index
//   const index = useTransform(scrollYProgress, [0, 1], [0, texts.length]);

//   return (
//     <div className="relative h-[300vh]" ref={containerRef}>
//       {/* Sticky full screen text section */}
//       <div
//         style={{
//           backgroundImage: "url(images/service-bg.png)",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//         className="sticky top-0 h-screen flex gap-1 flex-col items-center justify-center overflow-hidden bg-transparent"
//       >
//         <div className="absolute bg-black z-30"></div>
//         {/* Text Section 1 */}
//         <div className="relative h-[15px] sm:h-[23px] lg:h-[30px] overflow-hidden text-center w-full">
//           {texts.map((text, i) => {
//             const y = useTransform(index, (val) => `${(i - val) * 100}%`);
//             return (
//               <motion.div
//                 key={i}
//                 style={{ y }}
//                 className="absolute w-full h-[50px] sm:h-[58px] lg:h-[70px] text-3xl sm:text-5xl lg:text-7xl text-gray-300 opacity-15 -bottom-7"
//               >
//                 {text}
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Text Section 2 */}
//         <div className="relative h-[38px] sm:h-[55px] lg:h-[80px] overflow-hidden text-center w-full">
//           {texts.map((text, i) => {
//             const y = useTransform(index, (val) => `${(i - val) * 100}%`);
//             return (
//               <motion.div
//                 key={i}
//                 style={{ y }}
//                 className="absolute text-3xl h-[45px] sm:h-[65px] lg:h-[100px] w-full sm:text-5xl lg:text-7xl font-semibold text-yellow-400"
//               >
//                 {text}
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Text Section 3 */}
//         <div className="relative h-[15px] sm:h-[23px] lg:h-[30px] overflow-hidden text-center w-full">
//           {texts.map((text, i) => {
//             const y = useTransform(index, (val) => `${(i - val) * 100}%`);
//             return (
//               <motion.div
//                 key={i}
//                 style={{ y }}
//                 className="absolute w-full h-[38px] sm:h-[53px] lg:h-[72px] text-3xl sm:text-5xl lg:text-7xl text-gray-300 opacity-15 -bottom-0.5"
//               >
//                 {text}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }



import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Helper function to remove random letters while preserving exact spacing
const removeRandomLetters = (text, count = 3) => {
  if (!text || text.trim() === "") return text;

  const letters = text.split("");
  const letterIndices = letters
    .map((char, index) => (char !== " " ? index : -1))
    .filter((index) => index !== -1);

  if (letterIndices.length === 0) return text;

  const numToRemove = Math.min(count, letterIndices.length);
  const indicesToRemove = [];

  while (indicesToRemove.length < numToRemove) {
    const randomIndex = letterIndices[Math.floor(Math.random() * letterIndices.length)];
    if (!indicesToRemove.includes(randomIndex)) {
      indicesToRemove.push(randomIndex);
    }
  }

  // Use spans to create invisible placeholders that preserve exact letter width
  return letters.map((char, index) => {
    if (indicesToRemove.includes(index)) {
      return { char, invisible: true };
    }
    return { char, invisible: false };
  });
};

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

const texts2_top = [
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
].map((text) => removeRandomLetters(text, Math.ceil(text.length * (1/3))));

const texts2_bottom = [
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
].map((text) => removeRandomLetters(text, Math.ceil(text.length * (1/3))));

const texts3_top = [
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
].map((text) => removeRandomLetters(text, Math.ceil(text.length * (2/5))));

const texts3_bottom = [
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
].map((text) => removeRandomLetters(text, Math.ceil(text.length * (2/5))));

const texts4_top = [
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
].map((text) => removeRandomLetters(text, Math.ceil(text.length * (3/4))));

const texts4_bottom = [
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
].map((text) => removeRandomLetters(text, Math.ceil(text.length * (3/4))));

export default function ServiceSection() {
  const containerRef = useRef(null);

  // Track scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // track entire section
  });

  // Map scroll progress to discrete index with smooth transitions
  const textCount = texts.length - 3; // Exclude empty strings (9 actual words)
  const rawIndex = useTransform(scrollYProgress, (progress) => {
    return progress * textCount;
  });

  // Round to nearest word but with smooth spring transitions
  const targetIndex = useTransform(rawIndex, (latest) => {
    return Math.round(latest);
  });

  // Create smooth spring animation for the index
  const smoothIndex = useSpring(targetIndex, {
    stiffness: 80,
    damping: 30,
    mass: 1,
  });

  return (
    <div className="relative h-[800vh]" ref={containerRef}>
      {/* Sticky full screen text section */}
      <div
        style={{
          backgroundImage: "url(images/service-bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent gap-2"
      >
        {/* Top Layer 3 - Most clipped (shows very little) */}
        <div className="relative h-[20px] sm:h-[30px] lg:h-[40px] overflow-hidden text-center w-full">
          {texts4_top.map((text, i) => {
            const y = useTransform(smoothIndex, (val) => `${(i - val) * 100}%`);
            return (
              <motion.div
                key={`top3-${i}`}
                style={{ y }}
                className="absolute w-full text-4xl sm:text-6xl lg:text-8xl font-bold text-white"
              >
                {Array.isArray(text) ? (
                  text.map((item, idx) => (
                    <span key={idx} style={{ opacity: item.invisible ? 0 : 1 }}>
                      {item.char}
                    </span>
                  ))
                ) : (
                  text
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Top Layer 2 - Medium clipped */}
        <div className="relative h-[25px] sm:h-[35px] lg:h-[45px] overflow-hidden text-center w-full">
          {texts3_top.map((text, i) => {
            const y = useTransform(smoothIndex, (val) => `${(i - val) * 100}%`);
            return (
              <motion.div
                key={`top2-${i}`}
                style={{ y }}
                className="absolute w-full text-4xl sm:text-6xl lg:text-8xl font-bold text-white"
              >
                {Array.isArray(text) ? (
                  text.map((item, idx) => (
                    <span key={idx} style={{ opacity: item.invisible ? 0 : 1 }}>
                      {item.char}
                    </span>
                  ))
                ) : (
                  text
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Top Layer 1 - Less clipped */}
        <div className="relative h-[35px] sm:h-[45px] lg:h-[55px] overflow-hidden text-center w-full">
          {texts2_top.map((text, i) => {
            const y = useTransform(smoothIndex, (val) => `${(i - val) * 100}%`);
            return (
              <motion.div
                key={`top1-${i}`}
                style={{ y }}
                className="absolute w-full text-4xl sm:text-6xl lg:text-8xl font-bold text-white"
              >
                {Array.isArray(text) ? (
                  text.map((item, idx) => (
                    <span key={idx} style={{ opacity: item.invisible ? 0 : 1 }}>
                      {item.char}
                    </span>
                  ))
                ) : (
                  text
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Center Text Layer - Full text visible */}
        <div className="relative h-[60px] sm:h-[80px] lg:h-[100px] overflow-hidden text-center w-full ">
          {texts.map((text, i) => {
            const y = useTransform(smoothIndex, (val) => `${(i - val) * 100}%`);
            return (
              <motion.div
                key={`center-${i}`}
                style={{ y }}
                className="absolute text-4xl h-full w-full sm:text-6xl lg:text-8xl font-bold text-[#FFCC00] flex items-center justify-center"
              >
                {text}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Layer 1 - Less clipped */}
        <div className="relative h-[35px] sm:h-[45px] lg:h-[55px] overflow-hidden text-center w-full">
          {texts2_bottom.map((text, i) => {
            const y = useTransform(smoothIndex, (val) => `${(i - val) * 100}%`);
            return (
              <motion.div
                key={`bottom1-${i}`}
                style={{ y }}
                className="absolute w-full text-4xl sm:text-6xl lg:text-8xl font-bold text-white"
              >
                {Array.isArray(text) ? (
                  text.map((item, idx) => (
                    <span key={idx} style={{ opacity: item.invisible ? 0 : 1 }}>
                      {item.char}
                    </span>
                  ))
                ) : (
                  text
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Layer 2 - Medium clipped */}
        <div className="relative h-[25px] sm:h-[35px] lg:h-[45px] overflow-hidden text-center w-full">
          {texts3_bottom.map((text, i) => {
            const y = useTransform(smoothIndex, (val) => `${(i - val) * 100}%`);
            return (
              <motion.div
                key={`bottom2-${i}`}
                style={{ y }}
                className="absolute w-full text-4xl sm:text-6xl lg:text-8xl font-bold text-white"
              >
                {Array.isArray(text) ? (
                  text.map((item, idx) => (
                    <span key={idx} style={{ opacity: item.invisible ? 0 : 1 }}>
                      {item.char}
                    </span>
                  ))
                ) : (
                  text
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Layer 3 - Most clipped */}
        <div className="relative h-[20px] sm:h-[30px] lg:h-[40px] overflow-hidden text-center w-full">
          {texts4_bottom.map((text, i) => {
            const y = useTransform(smoothIndex, (val) => `${(i - val) * 100}%`);
            return (
              <motion.div
                key={`bottom3-${i}`}
                style={{ y }}
                className="absolute w-full text-4xl sm:text-6xl lg:text-8xl font-bold text-white"
              >
                {Array.isArray(text) ? (
                  text.map((item, idx) => (
                    <span key={idx} style={{ opacity: item.invisible ? 0 : 1 }}>
                      {item.char}
                    </span>
                  ))
                ) : (
                  text
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
