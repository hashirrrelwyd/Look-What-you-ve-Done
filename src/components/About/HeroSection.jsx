import { useCursor } from "../../context/CursorContext";
import Navbar from "../Common/Navbar";

export default function HeroSection() {
  const { setHoverType } = useCursor();
  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      <Navbar />
      <div
        style={{
          backgroundImage: `url('/images/hero-3.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          position: "relative",
          zIndex: 0,
        }}
      >
        <div className="flex items-baseline-last justify-between h-full px-6 md:px-10 pb-10 ">
          <div className="flex flex-col gap-2">
            <h2
              className="text-3xl lg:text-4xl  text-white"
              onMouseEnter={() => setHoverType("big-white")}
              onMouseLeave={() => setHoverType("default")}
            >
              Let's Work Your
            </h2>
            <div className="flex">
              <h2
                className="text-3xl lg:text-6xl text-lwyd-yellow"
                onMouseEnter={() => setHoverType("big-white")}
                onMouseLeave={() => setHoverType("default")}
              >
                Dream.
              </h2>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-3">
            <p
              className="text-gray-400 text-xs lg:text-sm "
              onMouseEnter={() => setHoverType("big-white")}
              onMouseLeave={() => setHoverType("default")}
            >
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              sed do{" "}
            </p>

            <div className="gap-4 flex text-xs lg:text-sm">
              <a
                onMouseEnter={() => setHoverType("button")}
                onMouseLeave={() => setHoverType("default")}
                href="/careers"
                className="cursor-none flex gap-2"
              >
                Start a Project{" "}
                <img src="/svg/arrow.svg" alt="" className="w-2 lg:w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
