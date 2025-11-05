import { useCursor } from "../../context/CursorContext";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
  return (
    <div
      className="whole-section h-screen bg-white px-6 md:px-10 py-10 text-black"
      onMouseEnter={() => setHoverType("black")}
      onMouseLeave={() => setHoverType("default")}
    >
      <div className="flex justify-between pb-8">
        <div className="w-1/2">
          {" "}
          <h3 className="text-[10px] md:text-sm lg:text-lg">
            <span className="text-lwyd-yellow">/</span> End-to-End Creative
            Solutions
          </h3>
        </div>
        <div className="w-2/5 lg:w-2/5 text-[10px] md:text-sm lg:text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            <span className="text-lwyd-yellow">sed do eiusmod</span> tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div
        className="scrollable-section flex flex-col h-[500px] overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {services.map((service, index) => (
          <>
            <div
              key={index}
              className="scrollable-content hidden md:flex justify-between h-full"
            >
              <div className="flex flex-col justify-between w-1/2">
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
                  className="object-cover h-[500px] w-[500px] rounded-md"
                  src={service.image}
                  alt=""
                />
              </div>
            </div>
            <hr className="hidden md:block text-[#7D7D7D7D] opacity-25 mt-8 pb-8" />
          </>
        ))}
        {/* Mobile Version */}
        {services.map((service, index) => (
          <>
            <div
              key={index}
              className="md:hidden scrollable-content justify-between h-full"
            >
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
                    className="object-cover h-[350px] w-full rounded-md"
                    src={service.image}
                    alt=""
                  />
                </div>

                <p className="text-[#7D7D7D] text-xs md:text-sm lg:text-base">
                  {service.tags}
                </p>
              </div>
            </div>
            <hr className="md:hidden text-[#7D7D7D7D] opacity-25 mt-8 pb-8" />
          </>
        ))}
      </div>
    </div>
  );
}
