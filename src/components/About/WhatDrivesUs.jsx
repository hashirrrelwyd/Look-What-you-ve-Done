import "./css/drivesus.css";
import { useCursor } from "../../context/CursorContext";
import { useState } from "react";
import { motion } from "framer-motion";

// --- Data for easy mapping ---
const drivesUsData = [
  {
    number: "01",
    title: "Creativity with Purpose",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    number: "02",
    title: "Boldness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing",
  },
];

export default function WhatDrivesUs() {
  const { setHoverType } = useCursor();
  return (
    <div className="bg-[#111111] lg:h-screen px-6 md:px-10 py-12">
      <div className="flex justify-between pb-10">
        {/* Header/Title */}
        <div className="flex justify-between">
          <h2
            className="text-white text-xs lg:text-lg"
            onMouseEnter={() => setHoverType("big-white")}
            onMouseLeave={() => setHoverType("default")}
          >
            <span className="text-lwyd-yellow">/ </span>What Drives Us
          </h2>
        </div>
        {/* Description/Context */}
        <div>
          <p
            className="text-white text-xs md:text-sm lg:text-xl"
            onMouseEnter={() => setHoverType("big-white")}
            onMouseLeave={() => setHoverType("default")}
          >
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,{" "}
            <span className="text-lwyd-yellow">sed do Lorem </span>
            ipsum
          </p>
        </div>
      </div>

      {/* Desktop Version (Unchanged, but using data array) */}
      <div className="hidden lg:flex gap-4 md:gap-6 lg:gap-8 flex-col text-[#7D7D7D]">
        {drivesUsData.map((item, index) => (
          <div key={item.number}>
            <hr />
            <div className="box flex justify-between py-4">
              <div
                className="flex gap-12 lg:gap-24 w-2/4 items-center"
                onMouseEnter={() => setHoverType("big-white")}
                onMouseLeave={() => setHoverType("default")}
              >
                <h3 className="text-[12px] lg:text-[15px] ">{item.number}</h3>
                <h3 className="text-xl lg:text-2xl">
                  <span className="title-roller">
                    <span className="normal">{item.title}</span>
                    <span className="hovered">{item.title}</span>
                  </span>
                </h3>
              </div>
              <div className="w-2/5">
                <p className="description text-[10px] lg:text-sm line-clamp-3 text-[#111111]">
                  {item.description}
                </p>
              </div>
            </div>
            {/* Render the last hr outside the loop or handle it here if needed */}
            {index === drivesUsData.length - 1 && <hr />} 
          </div>
        ))}
        {/* Note: I've slightly refactored the desktop loop to correctly place the <hr/> */}
      </div>

      {/* Mobile Version (Accordion) */}
      <div className="lg:hidden">
        {drivesUsData.map((item) => (
          <MobileAccordionItem
            key={item.number}
            number={item.number}
            title={item.title}
            description={item.description}
            setHoverType={setHoverType} // Pass down the cursor context setter
          />
        ))}
      </div>
    </div>
  );
}

const MobileAccordionItem = ({ number, title, description, setHoverType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentVariants = {
    open: { height: "auto", opacity: 1, marginTop: "1rem" },
    closed: { height: 0, opacity: 0, marginTop: "0rem" },
  };

  return (
    <motion.div
      className="border-b border-[#7D7D7D] py-4"
      onMouseEnter={() => setHoverType("link")}
      onMouseLeave={() => setHoverType("default")}
    >
      {/* Header/Toggle Area */}
      <div
        className="flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex gap-4 items-center">
          <h3 className="text-sm font-medium text-[#7D7D7D]">{number}</h3>
          <h3 className="text-lg text-white font-medium">{title}</h3>
        </div>
        {/* Chevron/Toggle Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 relative"
          onMouseEnter={() => setHoverType("big-white")}
          onMouseLeave={() => setHoverType('white')}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Simple plus/minus icon with rotation */}
            <span className="w-3 h-px bg-white absolute" />
            <span className="w-3 h-px bg-white absolute transform rotate-90" />
          </div>
        </motion.div>
      </div>

      {/* Collapsible Content */}
      <motion.div
        variants={contentVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-xs text-gray-400 leading-relaxed pt-2">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};