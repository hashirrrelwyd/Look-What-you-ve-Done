const cards = [
  {
    title: "Godawan",
    image: "/images/work-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Kingfisher",
    image: "/images/work-2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Baileys",
    image: "/images/work-3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Bacardi",
    image: "/images/work-4.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function WorksSection() {
  return (
    <div className="h-screen flex justify-center items-center px-10 py-10 bg-[#111111] rounded-b-4xl text-white">
      <div className="flex gap-12">
        <div className="flex flex-col justify-between items-start w-1/3">
          <h2 className="text-md">
            <span className="text-lwyd-yellow">/</span>Look what we've done
          </h2>
          <div className="flex flex-col gap-4 mt-10">
            <h2 className="work-title text-md">Godawan.</h2>
            <p className="work-desc text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            </p>
          </div>
        </div>
        <div className=" flex">
          <img src="/images/work-1.png" className="object-cover w-[380px] h-[500px] rounded-lg" alt="" />
          <img src="/images/work-2.png" className="object-cover w-[380px] h-[400px] rounded-lg" alt="" />
          <img src="/images/work-3.png" className="object-cover w-[380px] h-[500px] rounded-lg" alt="" />
          <img src="/images/work-4.png" className="object-cover w-[380px] h-[500px] rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
}
