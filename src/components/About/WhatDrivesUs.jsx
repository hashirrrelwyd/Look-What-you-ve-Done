import "./css/drivesus.css";
import { useCursor } from "../../context/CursorContext";

export default function WhatDrivesUs() {
  const { setHoverType } = useCursor();
  return (
    <div className="bg-[#111111] lg:h-screen px-6 md:px-10 py-12">
      <div className="flex justify-between pb-10">
        <div className="flex justify-between">
          <h2
            className="text-white text-xs lg:text-lg"
            onMouseEnter={() => setHoverType("big-white")}
            onMouseLeave={() => setHoverType("default")}
          >
            <span className="text-lwyd-yellow">/ </span>What Drives Us
          </h2>
        </div>
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
      <div className="hidden md:flex gap-4 md:gap-6 lg:gap-8 flex-col text-[#7D7D7D]">
        <hr />
        <div className="box flex justify-between">
          <div className="flex gap-12 lg:gap-24 w-2/4 items-center">
            <h3 className="text-[12px] lg:text-[15px] ">01</h3>
            <h3 className="text-xl lg:text-2xl">
              <span className="title-roller">
                <span className="normal">Creativity with Purpose</span>
                <span className="hovered">Creativity with Purpose</span>
              </span>
            </h3>
          </div>
          <div className="w-2/5">
            <p className="description text-[10px] lg:text-sm line-clamp-3 text-[#111111]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do Lorem ipsumLorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
          </div>
        </div>
        <hr />

        <div className="box flex justify-between">
          <div className="flex gap-12 lg:gap-24 w-2/4 items-center">
            <h3 className="text-[12px] lg:text-[15px] ">02</h3>
            <h3 className="text-xl lg:text-2xl">
              <span className="title-roller">
                <span className="normal">Boldness</span>
                <span className="hovered">Boldness</span>
              </span>
            </h3>
          </div>
          <div className="w-2/5">
            <p className="description text-[10px] lg:text-sm line-clamp-3 text-[#111111]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do Lorem ipsumLorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
          </div>
        </div>
        <hr />
        <div className="box flex justify-between">
          <div className="flex gap-12 lg:gap-24 w-2/4 items-center">
            <h3 className="text-[12px] lg:text-[15px] ">03</h3>
            <h3 className="text-xl lg:text-2xl">
              <span className="title-roller">
                <span className="normal">Collaboration</span>
                <span className="hovered">Collaboration</span>
              </span>
            </h3>
          </div>
          <div className="w-2/5">
            <p className="description text-[10px] lg:text-sm line-clamp-3 text-[#111111]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do Lorem ipsumLorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
          </div>
        </div>
        <hr />
        <div className="box flex justify-between">
          <div className="flex gap-12 lg:gap-24 w-2/4 items-center">
            <h3 className="text-[12px] lg:text-[15px] ">04</h3>
            <h3 className="text-xl lg:text-2xl">
              <span className="title-roller">
                <span className="normal">Growth</span>
                <span className="hovered">Growth</span>
              </span>
            </h3>
          </div>
          <div className="w-2/5">
            <p className="description text-[10px] lg:text-sm line-clamp-3 text-[#111111]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do Lorem ipsumLorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
