
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "../../context/CursorContext";
// import "./css/lwydteam.css"
import { teamData } from "../../data/teamData"; // Assuming this array is available

// --- Utility Components ---
const ArrowButton = ({ direction, onClick, setHoverType }) => {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHoverType("big-white")}
      onMouseLeave={() => setHoverType("default")}
      className="hidden md:block absolute top-1/2 -translate-y-1/2 p-2 z-10 text-white transition-colors hover:text-lwyd-yellow cursor-none"
      style={{ [isLeft ? "left" : "right"]: isLeft ? "-2.5rem" : "-2.5rem" }}
      aria-label={`${isLeft ? "Previous" : "Next"} thumbnail`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isLeft ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        ></path>
      </svg>
    </button>
  );
};

export default function LwydTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("all");
  // NEW STATE: Tracks if we are waiting for the filter delay
  const [isLoading, setIsLoading] = useState(false);
  // NEW STATE: Holds the team data currently being rendered.
  const [displayTeam, setDisplayTeam] = useState(teamData);

  // Ref for the thumbnail container to enable scrolling
  const thumbnailContainerRef = useRef(null);

  const { setHoverType } = useCursor();

  // Filter the full teamData based on the selected category
  const getFilteredTeam = (category) =>
    category === "all"
      ? teamData
      : teamData.filter((member) => member.category === category);

  // Check if filteredTeam is empty before accessing elements
  const current = displayTeam[currentIndex];
  const nextIndex =
    displayTeam.length > 0 ? (currentIndex + 1) % displayTeam.length : 0;
  const next = displayTeam[nextIndex];

  // Guard clause for empty team list
  if (displayTeam.length === 0) {
    return (
      <div className="min-h-screen bg-[#111111] px-6 md:px-10 py-10 text-white flex flex-col justify-center items-center">
        <h2 className="text-xl text-red-500">
          No team members found in this category.
        </h2>
        <button
          onClick={() => setCurrentCategory("all")}
          className="mt-4 text-lwyd-yellow underline"
        >
          Show All
        </button>
      </div>
    );
  }

  // --- Handlers ---
  const handleCategoryChange = (newCategory) => {
    if (newCategory === currentCategory) return;

    // 1. Start loading state immediately
    setIsLoading(true);
    setCurrentIndex(0);
    const newTeam = getFilteredTeam(newCategory);

    // 2. Introduce a delay (e.g., 300ms) before updating the category
    setTimeout(() => {
      setCurrentCategory(newCategory);
      setDisplayTeam(newTeam);
      // 3. End loading state after the update
      setIsLoading(false);
    }, 300); // 300 milliseconds delay
  };

  const handleNextClick = () => {
    setCurrentIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex =
      (currentIndex - 1 + displayTeam.length) % displayTeam.length;
    setCurrentIndex(prevIndex);
  };

  // --- Auto-Scroll Effect for Active Thumbnail ---
  useEffect(() => {
    if (thumbnailContainerRef.current && !isLoading) {
      const activeElement =
        thumbnailContainerRef.current.children[currentIndex];
      if (activeElement) {
        // Calculate scroll position to center the active element
        const containerRect =
          thumbnailContainerRef.current.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();

        const scrollLeft =
          activeElement.offsetLeft -
          containerRect.width / 2 +
          activeRect.width / 2;

        thumbnailContainerRef.current.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex, displayTeam.length, isLoading]); // Re-run when current item or filter changes

  // --- Category Data ---
  const categories = [
    { key: "all", label: "All" },
    { key: "Leadership", label: "Leadership" },
    { key: "Lead", label: "Lead" },
    { key: "Designer", label: "Designer" },
    { key: "AM", label: "Account Managers" },
    { key: "Developer", label: "Developer" },
    { key: "Friyay", label: "Friyay" },
    { key: "Hr&Finance", label: "HR & Finance" },
  ];

  return (
    <div className="min-h-screen bg-[#111111] rounded-b-4xl px-6 md:px-10 py-10 text-white overflow-x-hidden">
      <h2
        className="text-xs lg:text-lg"
        onMouseEnter={() => setHoverType("big-white")}
        onMouseLeave={() => setHoverType("default")}
      >
        <span className="text-lwyd-yellow">/ </span>The People Behind The Work
      </h2>

      {/* Main Content Area: Stacks on mobile, splits on large screens */}
      <div className="flex pt-12 flex-col lg:flex-row gap-8">
        {/* Left/Top Content: Current Member Details & Image */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.title + currentCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full lg:w-2/3 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="w-full md:w-2/4 max-w-xs md:max-w-md order-1 md:order-2 px-6 lg:px-10">
                <div className="relative w-full aspect-6/7 overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center justify-center w-full md:w-2/4  order-2 md:order-1 h-full">
                <h2
                  onMouseEnter={() => setHoverType("big-white")}
                  onMouseLeave={() => setHoverType("default")}
                  className="text-2xl mb-2 font-medium"
                >
                  {current.title}
                  <span className="text-lwyd-yellow">.</span>
                </h2>
                <p
                  onMouseEnter={() => setHoverType("big-white")}
                  onMouseLeave={() => setHoverType("default")}
                  className="text-sm mb-6 md:mb-8 text-[#7D7D7D]"
                >
                  "{current.subtitle}"
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right/Bottom Panel: Next Content Preview (Desktop Only) */}
        <div
          className="hidden lg:flex w-1/3 flex-col justify-center items-center text-[#7D7D7D]"
          onClick={handleNextClick}
          onMouseEnter={() => setHoverType("next")}
          onMouseLeave={() => setHoverType("default")}
        >
          <motion.div
            key={next.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-2xl mb-2 transition-colors">{next.title}</h3>
            <p className="text-sm">"{next.subtitle}"</p>
          </motion.div>
        </div>
      </div>

      {/* Filter and Thumbnails */}
      <div className="flex flex-col mt-12">
        {/* Category selection */}
        <div className="mb-8 flex items-center justify-end lg:justify-start">
          {/* Mobile/Tablet Dropdown (Visible on md and below) */}
          <div className="lg:hidden cursor-none w-full md:w-1/2">
            <label
              htmlFor="category-select"
              className="block text-sm font-medium text-[#7D7D7D] mb-2 cursor-none"
            >
              <span className="text-lwyd-yellow">/ </span>Filter by Department
            </label>
            <select
              id="category-select"
              value={currentCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full bg-[#111111] border-2 border-[#7D7D7D] text-[#7D7D7D] p-3 rounded-lg 
                         cursor-none appearance-none
                         focus:border-lwyd-yellow focus:text-lwyd-yellow focus:outline-none
                         transition-all duration-300"
              onMouseEnter={() => setHoverType("link")}
              onMouseLeave={() => setHoverType("default")}
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFC700'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              {categories.map((cat) => (
                <option 
                  key={cat.key} 
                  value={cat.key}
                  className="bg-[#111111] text-[#7D7D7D] hover:text-lwyd-yellow py-2"
                >
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Radio Buttons (Visible on lg and above) */}
          <div className="hidden lg:flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {categories.map((cat) => (
              <div
                key={cat.key}
                className={`flex items-center gap-2 transition-colors ${
                  currentCategory === cat.key
                    ? "text-lwyd-yellow"
                    : "text-[#7D7D7D] hover:text-white"
                }`}
                onClick={() => handleCategoryChange(cat.key)}
                onMouseEnter={() => setHoverType("button")}
                onMouseLeave={() => setHoverType("default")}
              >
                <button
                  className={`w-3 h-3 rounded-full cursor-none transition-all duration-300 border ${
                    currentCategory === cat.key
                      ? "bg-yellow-400 border-yellow-400"
                      : "bg-transparent border-[#7D7D7D]"
                  }`}
                  aria-label={`Filter by ${cat.label}`}
                ></button>
                {cat.label}
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnails Preview with Navigation */}
        <div className="relative">
          {/* Navigation Buttons (Desktop Only) */}
          <ArrowButton
            direction="left"
            onClick={handlePrevClick}
            setHoverType={setHoverType}
          />
          <ArrowButton
            direction="right"
            onClick={handleNextClick}
            setHoverType={setHoverType}
          />

          {/* Scrollable Thumbnails */}
          <div
            ref={thumbnailContainerRef}
            className="flex gap-4 w-full overflow-x-auto overflow-y-hidden pb-4 no-scrollbar"
          >
            {isLoading ? (
              // Show loader/placeholder when loading
              <div className="h-25"/>
            ) : (
              // Show filtered thumbnails when not loading (using displayTeam)
              <AnimatePresence>
                {displayTeam.map(
                  (
                    member,
                    index // Renders displayTeam
                  ) => (
                    <motion.div
                      key={member.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className={`relative flex shrink-0 flex-col items-center w-20 group 
                      transition-all duration-300 ease-in-out rounded-md 
                      ${
                        index === currentIndex
                          ? "border-2 border-[#ffffff]/50 p-2"
                          : ""
                      }`}
                      onClick={() => setCurrentIndex(index)}
                      onMouseEnter={() => setHoverType("image")}
                      onMouseLeave={() => setHoverType("default")}
                    >
                      {/* Thumbnail Image Container (Fixed Aspect Ratio) */}
                      <div className="relative w-full aspect-3/4 overflow-hidden rounded-md">
                        <img
                          src={member.image}
                          alt={member.title}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 `}
                        />
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
