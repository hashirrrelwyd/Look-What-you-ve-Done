import React from "react";
import { useCursor } from "../../context/CursorContext";

export default function WhatDrivesUs() {
  const { setHoverType } = useCursor();
  return (
    <div className="bg-[#111111] h-screen px-6 md:px-10 py-12">
      <div className="flex justify-between pb-10">
        <div className="flex justify-between">
          <h2 className="text-white text-xs lg:text-lg" onMouseEnter={() => setHoverType("big-white")}
      onMouseLeave={() => setHoverType("default")}>
            <span className="text-lwyd-yellow">/</span>What Drives Us
          </h2>
        </div>
        <div >
          <p className="text-white text-xs md:text-sm lg:text-xl" onMouseEnter={() => setHoverType("big-white")}
      onMouseLeave={() => setHoverType("default")}>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,{" "}
            <span className="text-lwyd-yellow">sed do Lorem </span>
            ipsum 
          </p>
        </div>
      </div>
      <div className="flex flex-col text-[#7D7D7D]">
        <hr />
        <div></div>
      </div>
    </div>
  );
}
