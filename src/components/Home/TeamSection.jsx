import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useCursor } from "../../context/CursorContext";
import { ArrowUpRight } from "lucide-react";

const firstLiftStart = 0.65;
const firstLiftEnd = 0.7;
const holdUntil = 0.75;
const secondLiftEnd = 0.9;

const firstLiftAmount = -100;
const secondLiftAmount = -200;

const teamImages = [
  "/images/team-1.jpg",
  "/images/team-2.png",
  "/images/team-3.png",
  "/images/team-4.png",
  "/images/team-1.jpg",
  "/images/team-2.png",
  "/images/team-3.png",
];

const getRandomSize = (index) => {
  const sizes = [
    { width: 200, height: 120 },
    { width: 260, height: 190 },
    { width: 260, height: 190 },
    { width: 200, height: 140 },
    { width: 190, height: 130 },
    { width: 210, height: 145 },
    { width: 170, height: 115 },
  ];
  return sizes[index] || sizes[0];
};

export default function TeamSection() {
  const containerRef = useRef(null);
  const { setHoverType } = useCursor();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
    setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // 🖥️ DESKTOP ANIMATION LOGIC (unchanged from your version)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const surroundingImageScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.8],
    [1, 0.8, 0]
  );

  const imagesFadeOut = useTransform(
    scrollYProgress,
    [0.35, 0.55, 0.65],
    [1, 1, 0]
  );

  const combinedTextY = useTransform(scrollYProgress, [0.75, 0.8], [0, -100]);
  const descriptionOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const descriptionY = useTransform(scrollYProgress, [0.8, 0.9], [-60, -100]);

  const liftYRaw = useTransform(
    scrollYProgress,
    [firstLiftStart, firstLiftEnd, holdUntil, secondLiftEnd],
    [0, firstLiftAmount, firstLiftAmount, secondLiftAmount]
  );
  const liftY = useSpring(liftYRaw, { stiffness: 150, damping: 25 });
  const combinedYForText = useTransform(
    [combinedTextY, liftY],
    ([baseY, lift]) => baseY + lift
  );

  const getImagePosition = (
    index,
    containerWidth = window.innerWidth,
    containerHeight = window.innerHeight,
    imageWidth = 200,
    imageHeight = 200
  ) => {
    const positions = [
      { top: "10%", left: "10%" },
      { top: "10%", left: "70%" },
      { top: "35%", left: "75%" },
      { top: "75%", left: "15%" },
      { top: "65%", left: "80%" },
      { top: "55%", left: "5%" },
      { top: "80%", left: "70%" },
    ];

    const pos = positions[index] || positions[0];
    const startX = (parseFloat(pos.left) / 100) * containerWidth;
    const startY = (parseFloat(pos.top) / 100) * containerHeight;
    const centerX = containerWidth / 2 - imageWidth / 2;
    const centerY = containerHeight / 2 - imageHeight / 2;
    const targetX = centerX - startX;
    const targetY = centerY - startY;
    return { ...pos, targetX, targetY };
  };

  // 📱 MOBILE VARIANTS
  const mobileImageVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.45 },
    }),
  };

  const mobileTextVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex ${
        isMobile ? "h-[220vh]" : isTablet ? "h-[250vh]" : "h-[400vh]"
      } items-start justify-center bg-background`}
      onMouseEnter={() => setHoverType("black")}
      onMouseLeave={() => setHoverType("white")}
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* ============= DESKTOP VERSION ============= */}
        <div className="hidden lg:flex w-full h-full relative flex items-center justify-center px-6">
          {teamImages.map((image, index) => {
            const size = getRandomSize(index);
            const pos = getImagePosition(
              index,
              window.innerWidth,
              window.innerHeight,
              size.width,
              size.height
            );

            const individualX = useTransform(
              scrollYProgress,
              [0, 0.55],
              [0, pos.targetX]
            );
            const individualY = useTransform(
              scrollYProgress,
              [0, 0.55],
              [0, pos.targetY]
            );

            return (
              <motion.div
                key={index}
                className="absolute bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  top: pos.top,
                  left: pos.left,
                  width: `${size.width}px`,
                  height: `${size.height}px`,
                  x: individualX,
                  y: individualY,
                  scale: imagesFadeOut,
                  opacity: useTransform(scrollYProgress, [0.35, 0.5], [1, 1]),
                  zIndex: 1,
                }}
              />
            );
          })}

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/team-1.jpg)`,
              width: "550px",
              height: "400px",
              scale: imagesFadeOut,
              zIndex: 10,
            }}
          />

          <motion.div
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2"
            style={{
              x: useTransform(
                scrollYProgress,
                [0.35, 0.65],
                [-200, windowWidth / 2 - 117]
              ),
              y: combinedYForText,
            }}
          >
            <motion.span
              className="text-6xl font-bold"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.1, 0.3, 0.65],
                  [0, 0, 1, 1]
                ),
              }}
            >
              <span className="text-[#FFD700]">/</span>
              <span className="text-foreground">LW</span>
            </motion.span>
          </motion.div>

          <motion.div
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2"
            style={{
              x: useTransform(
                scrollYProgress,
                [0.35, 0.65],
                [100, -(windowWidth / 2 - 117)]
              ),
              y: combinedYForText,
            }}
          >
            <motion.span
              className="text-6xl font-bold text-foreground"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.1, 0.3, 0.65],
                  [0, 0, 1, 1]
                ),
              }}
            >
              YD
            </motion.span>
          </motion.div>

          <motion.div
            className="absolute bottom-60 z-20 flex w-full max-w-2xl flex-col items-center gap-4 px-8 text-center"
            style={{
              opacity: descriptionOpacity,
              y: descriptionY,
            }}
          >
            <p
              className="text-lg text-muted-foreground"
              onMouseEnter={() => setHoverType("big-black")}
              onMouseLeave={() => setHoverType("black")}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="/contact"
              className="group flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-primary cursor-none"
              onMouseEnter={() => setHoverType("button")}
              onMouseLeave={() => setHoverType("black")}
            >
              Contact Us
              <ArrowUpRight className="text-[#ffcc00]" />
            </a>
          </motion.div>
        </div>

        {/* ============= TABLET VERSION ============= */}
        <div className="hidden md:flex lg:hidden w-full flex-col items-center justify-center px-6">
          <motion.h2
            className="mt-8 mb-4 text-5xl font-bold text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={mobileTextVariant}
          >
            <span className="text-[#FFD700]">/</span> LWYD
          </motion.h2>

          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
            {teamImages.slice(0, 6).map((src, i) => (
              <motion.div
                key={i}
                className="h-36 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={mobileImageVariant}
              />
            ))}
          </div>

          <motion.p
            className="mt-8 max-w-2xl text-center text-lg text-muted-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={mobileTextVariant}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>

          <motion.a
            href="/contact"
            className="mt-6 mb-16 inline-flex items-center gap-2 text-lg font-medium text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={mobileTextVariant}
          >
            Contact Us
            <ArrowUpRight className="text-[#ffcc00]" />
          </motion.a>
        </div>

        {/* ============= MOBILE VERSION ============= */}
        <div className="flex md:hidden w-full flex-col items-center justify-center px-6">
          <motion.h2
            className="mt-8 mb-4 text-4xl font-bold text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={mobileTextVariant}
          >
            <span className="text-[#FFD700]">/</span> LWYD
          </motion.h2>

          <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            {teamImages.slice(0, 4).map((src, i) => (
              <motion.div
                key={i}
                className="h-28 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={mobileImageVariant}
              />
            ))}
          </div>

          <motion.p
            className="mt-6 max-w-md text-center text-base text-muted-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={mobileTextVariant}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>

          <motion.a
            href="/contact"
            className="mt-4 mb-12 inline-flex items-center gap-2 text-base font-medium text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={mobileTextVariant}
          >
            Contact Us
            <ArrowUpRight className="text-[#ffcc00]" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
