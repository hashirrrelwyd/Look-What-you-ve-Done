"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {useCursor} from "../../context/CursorContext"

const cards = [
  {
    title: "Amrut",
    image: "/images/work-amrut.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Kingfisher",
    image: "/images/work-KF.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Baileys",
    image: "/images/work-baileys.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Godawan",
    image: "/images/work-godawan.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Knorr",
    image: "/images/work-knorr.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Smirnoff",
    image: "/images/work-smirnoff.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "The Bar",
    image: "/images/work-thebar.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function WorksSection() {
  const [current, setCurrent] = useState(0);

  const {setHoverType} = useCursor()

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Function to handle manual navigation
  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  // Get visible cards for desktop (4 cards starting from current)
  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < Math.min(4, cards.length); i++) {
      const index = (current + i) % cards.length;
      visible.push({ ...cards[index], originalIndex: index });
    }
    return visible;
  };

  const visibleCards = getVisibleCards();



  return (
    <div className="min-h-screen flex px-6 md:px-10 py-10 bg-[#111111] rounded-b-4xl text-white">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
        {/* Left content - Desktop */}
        <div className="hidden xl:flex flex-col justify-between items-start w-1/3">
          <h2 className="text-md" onMouseEnter={() => setHoverType("big-white")} onMouseLeave={() => setHoverType("default")}>
            <span className="text-lwyd-yellow">/ </span>Look what we've done
          </h2>
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex"><h2 className="work-title text-3xl" onMouseEnter={() => setHoverType("big-white")} onMouseLeave={() => setHoverType("default")}>
              {cards[current].title}
              <span className="text-lwyd-yellow">.</span>{" "}
            </h2></div>
            <p className="work-desc text-gray-400 " onMouseEnter={() => setHoverType("big-white")} onMouseLeave={() => setHoverType("default")}>
              {cards[current].description}
            </p>
            <div className="flex space-x-4 mt-6">
              <button
                onMouseEnter={() => setHoverType("button")} onMouseLeave={() => setHoverType("default")}
                onClick={goPrev}
                className="p-3 rounded-full transition-colors cursor-none"
                aria-label="Previous"
              >
                <img src="/icons/left-chevron.png" alt="" className="w-6" />
              </button>
              <button
                onMouseEnter={() => setHoverType("button")} onMouseLeave={() => setHoverType("default")}
                onClick={goNext}
                className="p-3 rounded-full transition-colors cursor-none"
                aria-label="Next"
              >
                <img src="/icons/right-chevron.png" alt="" className="w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile header */}
        <div className="xl:hidden text-left mb-8">
          <h2 className="text-xs">
            <span className="text-lwyd-yellow">/</span>Look what we've done
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full lg:w-2/3 flex items-center justify-center">
          {/* Desktop Carousel */}
          <div className="hidden xl:block relative w-full h-[500px]">
            {visibleCards.map((card, index) => {
              const isActive = index === 0;

              // Calculate positioning for staggered effect
              const leftOffset = index * 200; // Horizontal spacing
              const topOffset = index * 40; // Vertical stagger
              const scale = isActive ? 1 : 1 - index * 0.15;
              const zIndex = 4 - index;

              return (
                <div
                  key={`${card.originalIndex}-${index}`}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    left: `${leftOffset}px`,
                    top: `${topOffset}px`,
                    transform: `scale(${scale})`,
                    zIndex: zIndex,
                  }}
                  onClick={() => {
                    if (index > 0) {
                      setCurrent(card.originalIndex);
                    }
                  }}
                >
                  <div className="relative">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      className={`w-[450px] h-[550px] object-cover rounded-2xl transition-all duration-700 ${
                        isActive
                          ? "shadow-2xl border-4 border-[#ffcc00]"
                          : "shadow-xl hover:opacity-100"
                      }`}
                      draggable={false}
                    />
                    {!isActive && (
                      <div className="absolute inset-0 rounded-2xl" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel */}
          <div className="xl:hidden flex flex-col relative w-full max-w-sm mx-auto">
            <div className="relative h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cards[current].title} // unique key to trigger animation on slide change
                  initial={{ opacity: 0, x: 50 }} // start faded and shifted right
                  animate={{ opacity: 1, x: 0 }} // animate to visible and centered
                  exit={{ opacity: 0, x: -50 }} // fade out and shift left
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={cards[current].image || "/placeholder.svg"}
                    alt={cards[current].title}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-[#ffcc00]"
                    draggable={false}
                  />

                  {/* Mobile overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 rounded-b-2xl">
                    <h2 className="text-lg mb-3 text-white">
                      {cards[current].title}.
                    </h2>
                    <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-3">
                      {cards[current].description}
                    </p>

                    {/* Mobile navigation buttons */}
                    <div className="flex justify-center space-x-4">
                      <button onClick={goPrev} aria-label="Previous">
                        <img
                          src="/icons/left-chevron.png"
                          alt=""
                          className="w-3"
                        />
                      </button>
                      <button onClick={goNext} aria-label="Next">
                        <img
                          src="/icons/right-chevron.png"
                          alt=""
                          className="w-3"
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? "bg-yellow-400" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
