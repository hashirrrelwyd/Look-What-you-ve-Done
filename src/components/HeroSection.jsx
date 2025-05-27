import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const heroContent = [
  {
    title1: "Less. But",
    title2: "Better",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/hero.jpg",
    video: "/videos/hero.mp4",
  },
  {
    title1: "Simple. Yet",
    title2: "Powerful",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/hero-2.jpg",
    video: "/videos/hero-2.mp4",
  },
  {
    title1: "Bold. Still",
    title2: "Elegant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/hero-3.avif",
    video: "/videos/hero-3.mp4",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Automatically change to the next hero content
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
        setProgress(0); // Reset progress
      }, 0); // Wait for 2 seconds for the image to fade out

      // Increase the progress bar (simulate loading)
      const progressInterval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress < 100 ? prevProgress + 2 : 100
        );
      }, 100);

      // Clear progress interval after progress is 100
      if (progress >= 100) clearInterval(progressInterval);
    }, 1000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [progress]);

  const currentHero = heroContent[currentIndex];
  const nextHero = heroContent[(currentIndex + 1) % heroContent.length];

  return (
    <div className="relative w-full h-screen text-white">
      <Navbar />

      {/* Hero Content */}
      <div
        style={{
          backgroundImage: `url(${currentHero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-screen"
      >
        {/* Content Section */}
        <div className="absolute bottom-2 flex justify-between w-full px-10 pb-10">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <h2 className="text-4xl lg:text-6xl">{currentHero.title1}</h2>
              <img
                src="/svg/Button - Showreel.svg"
                alt="play button"
                className="w-10 lg:w-14 cursor-pointer"
              />
            </div>
            <div className="flex gap-4">
              <h2 className="text-4xl lg:text-6xl">{currentHero.title2}</h2>
              <p className="opacity-60 text-xs lg:text-md pt-1 w-[150px] lg:w-[300px] lg:mt-6 lg:pt-0 line-clamp-2 h-[35px] lg:h-[30px]">
                {currentHero.description}
              </p>
            </div>
          </div>

          {/* Thumbnail and progress bar */}
          <div
            style={{
              backgroundImage: `url(${nextHero.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="hidden md:flex relative w-[200px] h-[100px] rounded-md mt-7 shadow-2xl"
          >
            <div className="absolute bottom-2">
              <div className="relative w-[180px] h-1 bg-white rounded-full ml-2.5">
                <motion.div
                  style={{
                    width: `${progress}%`,
                  }}
                  className="absolute h-1 bg-lwyd-yellow rounded-full"
                  transition={{
                    duration: 0.1,
                    ease: "linear",
                  }}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
