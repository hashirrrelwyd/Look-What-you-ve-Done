import { useCursor } from "../../context/CursorContext";

export default function AboutUsSection() {
  const { setHoverType } = useCursor();
  return (
    <div
      className="flex px-6 md:px-10 h-screen bg-white py-16 gap-12"
      onMouseEnter={() => setHoverType("black")}
      onMouseLeave={() => setHoverType("default")}
    >
      <div className="w-2/4">
        <img
          src="/images/about.jpg"
          alt=""
          className=" h-[600px] w-[500px] object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between w-2/4">
        <div className="flex">
          <h2
            className="text-black text-xs lg:text-lg"
            onMouseEnter={() => setHoverType("big-black")}
            onMouseLeave={() => setHoverType("black")}
          >
            <span className="text-lwyd-yellow">/</span>about
          </h2>
        </div>
        <p
          className="text-xl text-gray-400"
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
