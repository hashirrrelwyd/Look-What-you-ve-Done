import { useCursor } from "../../context/CursorContext";
const clients = [
  "icons/amrut.png",
  "icons/antiquity.png",
  "icons/baileys.png",
  "icons/black dog.png",
  "icons/black n white.jpeg",
  "icons/donjulio.jpeg",
  "icons/godawan.jpeg",
  "icons/JW.jpeg",
  "icons/KF.png",
  "icons/knorr.jpeg",
  "icons/OM.png",
  "icons/signature.png",
];

export default function AboutUsSection() {
  const { setHoverType } = useCursor();
  return (
    <>
      <div
        className="w-full px-6 md:px-10 py-10 text-black bg-white"
        onMouseEnter={() => setHoverType("black")}
        onMouseLeave={() => setHoverType("default")}
      >
        <div className="flex flex-col gap-4 md:flex-row justify-between py-6">
          <h2
            className="text-xs lg:text-lg"
            onMouseEnter={() => setHoverType("big-black")}
            onMouseLeave={() => setHoverType("black")}
          >
            {" "}
            <span className="text-lwyd-yellow">/</span> about us
          </h2>
          <p
            className="text-xs md:text-sm lg:text-xl lg:w-[500px]"
            onMouseEnter={() => setHoverType("big-black")}
            onMouseLeave={() => setHoverType("black")}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            <span className="text-lwyd-yellow">sed do Lorem</span> ipsum
          </p>
        </div>

        {/* Client logos container with infinite marquee */}
        <div className="pt-12 overflow-hidden">
          <div className="client-logos-wrapper flex animate-marquee">
            {/* First batch of logos */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex justify-center items-center px-4 sm:w-32 lg:w-44 w-28 h-auto"
              >
                <img
                  onMouseEnter={() => setHoverType("big-black")}
                  onMouseLeave={() => setHoverType("black")}
                  src={client}
                  alt="client logo"
                  className="w-full h-auto object-contain p-2"
                />
              </div>
            ))}

            {/* Second batch of logos to ensure continuous scrolling */}
            {clients.map((client, index) => (
              <div
                key={index + clients.length}
                className="flex justify-center items-center px-4 sm:w-32 lg:w-44 w-28 h-auto"
              >
                <img
                  src={client}
                  alt="client logo"
                  className="w-full h-auto object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .client-logos-wrapper {
          display: flex;
          width: max-content;
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
