import { useCursor } from "../../context/CursorContext";
import "./css/about.css"

export default function AboutUsSection() {
  const { setHoverType } = useCursor();
  return (
    <div
      className="about-section flex px-6 md:px-10 bg-white py-16 gap-12"
      onMouseEnter={() => setHoverType("black")}
      onMouseLeave={() => setHoverType("default")}
    >
      <div className="hidden md:block w-2/4">
        <img
          src="/images/about.jpg"
          alt=""
          className="about-img h-[600px] w-[800px] object-cover rounded-md"
        />
      </div>
      <div className="hidden md:flex flex-col justify-between w-2/4">
        <div className="flex">
          <h2
            className="text-black text-xs lg:text-lg"
            onMouseEnter={() => setHoverType("big-black")}
            onMouseLeave={() => setHoverType("black")}
          >
            <span className="text-lwyd-yellow">/</span> About Us
          </h2>
        </div>
        <p
          className="text-sm lg:text-xl text-gray-400"
          onMouseEnter={() => setHoverType("big-black")}
          onMouseLeave={() => setHoverType("black")}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
          <span className="text-lwyd-yellow">sed do Lorem </span>
          ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
          <span className="text-lwyd-yellow">sed do Lorem </span> ipsumLorem
          ipsum dolor sit amet, consectetur adipiscing{" "}
        </p>
      </div>

      {/* Mobile Version */}
      <div className="flex md:hidden flex-col gap-4 justify-between">
        <div className="flex">
          <h2
            className="text-black text-xs lg:text-lg"
            onMouseEnter={() => setHoverType("big-black")}
            onMouseLeave={() => setHoverType("black")}
          >
            <span className="text-lwyd-yellow">/ </span>About Us
          </h2>
        </div>
        <div className="md:hidden">
        <img
          src="/images/about.jpg"
          alt=""
          className="about-img-mobile h-[300px] w-full object-cover rounded-md"
        />
      </div>
        <p
          className="text-sm lg:text-xl text-gray-400"
          onMouseEnter={() => setHoverType("big-black")}
          onMouseLeave={() => setHoverType("black")}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
          <span className="text-lwyd-yellow">sed do Lorem </span>
          ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
          <span className="text-lwyd-yellow">sed do Lorem </span> ipsumLorem
          ipsum dolor sit amet, consectetur adipiscing{" "}
        </p>
      </div>

    </div>
  );
}
