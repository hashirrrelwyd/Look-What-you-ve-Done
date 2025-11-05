import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useCursor } from "../../context/CursorContext";

const whyUs = [
  {
    title: "Innovative Approach",
    description:
      "We apply fresh thinking to every project, crafting solutions that truly stand out.",
  },
  {
    title: "Proven Track Record",
    description:
      "Trusted by clients across industries, we consistently deliver on our promises.",
  },
  {
    title: "Dedicated Support",
    description:
      "We're always here for you — pre, during, and post project delivery.",
  },
  {
    title: "Expert Team",
    description:
      "Our skilled team blends tech expertise with business insight.",
  },
  {
    title: "Client-Centric",
    description:
      "Our approach starts and ends with understanding your goals and needs.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We use the latest tools to keep you ahead of the curve.",
  },
];

export default function WhyBrandsChooseUs() {
  const { setHoverType } = useCursor();
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Drag to Scroll Logic
  const handlePointerDown = (e) => {
    isDragging.current = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startX.current = e.clientX;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const x = e.clientX;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;

    ref.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      ref.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <div className="bg-[#111111] px-6 md:px-10 py-12 rounded-t-4xl text-white">
      {/* Title */}
      <div className="flex">
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

      {/* Native Scrollable Container with Drag Support */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar select-none"
        onMouseEnter={() => setHoverType("button")}
        onMouseLeave={() => setHoverType("default")}
      >
        <div className="flex gap-8" style={{ minWidth: "max-content" }}>
          {whyUs.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[450px] lg:w-[550px] h-[300px] flex flex-col gap-4 pt-8"
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
