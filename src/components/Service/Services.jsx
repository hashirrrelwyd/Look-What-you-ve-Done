
import { useCursor } from "../../context/CursorContext";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const services = [
  {
    title: "Creative Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/creative.webp",
    tags: "Creative Development / Design & Development / Delivery & Refinement",
  },
  {
    title: "Media Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/media.webp",
    tags: "Strategy & Planning / Content Creation & Production / Distribution & Optimization",
  },
  {
    title: "Experience Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/experience.webp",
    tags: "Research & Empathy / Ideation & Prototyping / Design & Implementation",
  },
  {
    title: "Video Production",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/video.webp",
    tags: "Pre-Production / Production / Distribution & Optimization",
  },
  {
    title: "Digial Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/digital.webp",
    tags: "Research & Analysis / Planning & Strategy Development / Implementation & Optimization",
  },
  {
    title: "Social Media Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/social.webp",
    tags: "Strategy & Planning / Content Creation & Production / Monitoring & Optimization",
  },
  {
    title: "Website Design & Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/website.webp",
    tags: "Strategy & Planning / Content Creation & Production / Monitoring & Optimization",
  },
  {
    title: "Print & Production",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/printing.webp",
    tags: "Strategy & Planning / Content Creation & Production / Monitoring & Optimization",
  },
];

export default function Services() {
  const { setHoverType } = useCursor();
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [totalHeight, setTotalHeight] = useState(0);

  // Track scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Calculate Y translation for content
  const y = useTransform(scrollYProgress, [0, 1], [0, -totalHeight]);

  useEffect(() => {
    const calculateHeight = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const headerHeight = 200; // Approximate header height
        
        // Calculate how much the content needs to move
        const scrollDistance = contentHeight - (viewportHeight - headerHeight);
        setTotalHeight(scrollDistance > 0 ? scrollDistance : 0);
      }
    };

    // Calculate on mount
    const timer = setTimeout(calculateHeight, 100);
    
    // Recalculate on resize
    window.addEventListener("resize", calculateHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  // Calculate the actual section height needed for scroll
  const sectionHeight = totalHeight + (typeof window !== 'undefined' ? window.innerHeight : 0);

  return (
    <div
      ref={sectionRef}
      className="relative bg-white text-black"
      onMouseEnter={() => setHoverType("black")}
      onMouseLeave={() => setHoverType("default")}
      style={{ height: `${sectionHeight}px` }}
    >
      {/* Sticky Container that pins the entire section */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Fixed Header with white background */}
        <div className="absolute top-0 left-0 right-0 bg-white flex flex-col md:flex-row justify-between px-6 md:px-10 py-10 pb-8 gap-4 md:gap-0 z-20">
          <div className="w-full md:w-1/2">
            <h3 className="text-[10px] text-xs lg:text-lg">
              <span className="text-lwyd-yellow">/</span> End-to-End Creative
              Solutions
            </h3>
          </div>
          <div className="w-full md:w-2/5 lg:w-2/5 text-[10px] md:text-sm lg:text-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
              <span className="text-lwyd-yellow">sed do eiusmod</span> tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Scrolling Content Container */}
        <div className="h-full pt-[140px] md:pt-[180px] overflow-hidden bg-white">
          <motion.div
            ref={contentRef}
            style={{ y }}
            className="scrollable-section flex flex-col px-6 md:px-10 pb-10"
          >
            {/* Desktop Version */}
            {services.map((service, index) => (
              <div key={`desktop-${index}`}>
                <div className="scrollable-content hidden md:flex justify-between min-h-[500px] lg:min-h-[600px]">
                  <div className="flex flex-col justify-between w-1/2 pr-8">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-sm md:text-lg lg:text-xl font-semibold">
                        {service.title}
                        <span className="text-lwyd-yellow">.</span>
                      </h3>
                      <p className="text-[#7D7D7D] text-xs md:text-sm lg:text-base">
                        {service.description}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#7D7D7D] text-xs md:text-sm lg:text-base">
                        {service.tags}
                      </p>
                    </div>
                  </div>

                  <div className="w-2/5">
                    <img
                      className="object-cover h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-md"
                      src={service.image}
                      alt={service.title}
                    />
                  </div>
                </div>
                {index < services.length - 1 && (
                  <hr className="hidden md:block text-[#7D7D7D7D] opacity-25 my-8" />
                )}
              </div>
            ))}

            {/* Mobile Version */}
            {services.map((service, index) => (
              <div key={`mobile-${index}`}>
                <div className="md:hidden scrollable-content justify-between min-h-[400px] py-4">
                  <div className="flex flex-col w-full gap-4">
                    <h3 className="text-sm md:text-lg lg:text-xl font-semibold">
                      {service.title}
                      <span className="text-lwyd-yellow">.</span>
                    </h3>
                    <p className="text-[#7D7D7D] text-xs md:text-sm lg:text-base">
                      {service.description}
                    </p>
                    <div className="w-full">
                      <img
                        className="object-cover h-[250px] sm:h-[350px] w-full rounded-md"
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                      />
                    </div>
                    <p className="text-[#7D7D7D] text-xs md:text-sm lg:text-base">
                      {service.tags}
                    </p>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <hr className="md:hidden text-[#7D7D7D7D] opacity-25 my-8" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}