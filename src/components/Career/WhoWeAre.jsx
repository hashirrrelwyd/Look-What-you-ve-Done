import { useCursor } from "../../context/CursorContext";

import Marquee from "react-fast-marquee";

export default function WhoWeAre() {
  const { setHoverType } = useCursor();
  return (
    <div
      onMouseEnter={() => setHoverType("black")}
      onMouseLeave={() => setHoverType("default")}
      className="flex flex-col px-6 md:px-10 py-10"
    >
      <div className="flex justify-between">
        <h3 className="text-[10px] md:text-sm lg:text-lg w-3/5">
          <span className="text-lwyd-yellow">/ </span>Who We Are
        </h3>
        <p className="w-2/5 lg:w-2/5 text-[10px] md:text-sm lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <span className="text-lwyd-yellow">Hic, maiores,</span> maxime minima
          fugiat{" "}
        </p>
      </div>
      <Marquee className="overflow-auto mt-6" speed={100}>
        <div className="flex items-end">
          <div className="w-[200px] h-[200px] lg:w-[300px] md:h-[350px] mr-4 flex items-end">
            <img
              src="/images/work-amrut.jpg"
              alt="Who We Are 1"
              className="w-full object-cover rounded-md"
            />
          </div>
          <div className="w-[200px] h-[200px] lg:w-[300px] md:h-[350px] mr-4 flex items-end">
            <img
              src="/images/work-3.png"
              alt="Who We Are 1"
              className="w-full object-cover rounded-md"
            />
          </div>
          <div className="w-[200px] h-[200px] lg:w-[300px] md:h-[350px] mr-4 flex items-end">
            <img
              src="/images/work-godawan.jpeg"
              alt="Who We Are 1"
              className="w-full object-cover rounded-md"
            />
          </div>
          <div className="w-[200px] h-[200px] lg:w-[300px] md:h-[350px] mr-4 flex items-end">
            <img
              src="/images/work-1.png"
              alt="Who We Are 1"
              className="w-full object-cover rounded-md"
            />
          </div>
          <div className="w-[200px] h-[200px] lg:w-[300px] md:h-[350px] mr-4 flex items-end">
            <img
              src="/images/work-KF.jpg"
              alt="Who We Are 1"
              className="w-full object-cover rounded-md"
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
}
