import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Common/Navbar";
import { useCursor } from "../../context/CursorContext";

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
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [nextIndex, setNextIndex] = useState((currentIndex + 1) % heroContent.length);
  const {setHoverType} = useCursor()

  // Progress bar and auto change logic
  useEffect(() => {
    setNextIndex((currentIndex + 1) % heroContent.length);
    if (isAnimating) return; // pause progress during animation

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 100);

    if (progress >= 100 && !isAnimating) {
      setIsAnimating(true);
      setNextIndex((currentIndex + 1) % heroContent.length);
      setProgress(0);
    }

    return () => clearInterval(progressInterval);
  }, [progress, currentIndex, isAnimating]);

  // Called when growing animation completes
  const onAnimationComplete = () => {
    setCurrentIndex(nextIndex);
    setIsAnimating(false);
  };

  const currentHero = heroContent[currentIndex];
  const upcomingHero = heroContent[nextIndex];

  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      <Navbar />

      {/* Current Hero Background */}
      <div
        style={{
          backgroundImage: `url(${currentHero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          position: "relative",
          zIndex: 0,
        }}
      >
        {/* Content Section with fade on animation */}
        <motion.div
          key={`content-${currentIndex}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: isAnimating ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-2 flex justify-between w-full px-6 md:px-10 pb-10 text-white"
          style={{ zIndex: 10 }}
        >
          <div className="flex flex-col gap-4 max-w-[60%]">
            <div className="flex gap-4 items-center">
              <h2 onMouseEnter={()=> setHoverType("big-white")} onMouseLeave={()=> setHoverType("default")} className="text-4xl lg:text-6xl">{currentHero.title1}</h2>
              <img
              onMouseEnter={()=> setHoverType("button")} onMouseLeave={()=> setHoverType("default")}
                src="/svg/Button - Showreel.svg"
                alt="play button"
                className="w-10 lg:w-14"
              />
            </div>
            <div className="flex gap-4 items-start">
              <h2 onMouseEnter={()=> setHoverType("big-white")} onMouseLeave={()=> setHoverType("default")} className="text-4xl lg:text-6xl">{currentHero.title2}</h2>
              <p onMouseEnter={()=> setHoverType("big-white")} onMouseLeave={()=> setHoverType("default")} className="opacity-60 text-xs lg:text-md pt-1 w-[150px] lg:w-[300px] lg:mt-6 lg:pt-0 line-clamp-2 h-[35px] lg:h-[30px]">
                {currentHero.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Thumbnail on the side */}
      <div
        className="hidden md:block"
        onMouseEnter={()=> setHoverType("button")} onMouseLeave={()=> setHoverType("default")}
        style={{
          backgroundImage: `url(${upcomingHero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "200px",
          height: "100px",
          borderRadius: "12px",
          position: "absolute",
          bottom: "50px",
          right: "50px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          zIndex: 20,
          opacity: isAnimating ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
        onClick={() => {
          if (!isAnimating) {
            setIsAnimating(true);
            setNextIndex((currentIndex + 1) % heroContent.length);
            setProgress(0);
          }
        }}
      >
        {/* Progress bar below thumbnail */}
        <div
          style={{
            position: "absolute",
            bottom: 6,
            left: 10,
            width: "180px",
            height: "4px",
            backgroundColor: "#fff",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
            style={{
              height: "100%",
              backgroundColor: "#f1683a",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      {/* Animate the growing image */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key="grow-image"
            initial={{
              width: 200,
              height: 100,
              borderRadius: 12,
              position: "absolute",
              bottom: 50,
              right: 50,
              backgroundImage: `url(${upcomingHero.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1000,
            }}
            animate={{
              width: "100vw",
              height: "100vh",
              bottom: 0,
              right: 0,
              borderRadius: 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={onAnimationComplete}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
