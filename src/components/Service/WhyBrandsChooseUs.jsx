import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useCursor } from "../../context/CursorContext";

const whyUs = [
  {
    title: "Innovative Approach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Proven Track Record",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Dedicated Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Expert Team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Client-Centric",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function WhyBrandsChooseUs() {
  const { setHoverType } = useCursor();
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <div className="bg-[#111111] px-6 md:px-10 py-12 rounded-t-4xl text-white">
      <div>
        <h2
          className="text-md md:pb-8 pb-4"
          onMouseEnter={() => setHoverType("big-white")}
          onMouseLeave={() => setHoverType("default")}
        >
          <span className="text-lwyd-yellow">/ </span>Why Brands Choose Us
        </h2>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          scaleX: scrollXProgress,
          transformOrigin: "left",
          backgroundColor: "#ffcc00",
          height: 1,
          marginBottom: "1rem",
        }}
      />

      {/* Horizontal Scrollable Content */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar"
      >
        <div
          className="flex gap-8"
          style={{ minWidth: "max-content" }}
        >
          {whyUs.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[550px] h-[300px] flex flex-col gap-4 pt-8"
            >
              <p className="text-xs text-[#7D7D7D] pb-12">0{index + 1}</p>
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-[#7D7D7D] text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
