import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "../../context/CursorContext";
// import "./css/lwydteam.css"

const teamData = [
  {
    title: "Sumath Karnad",
    subtitle: "Give me an update?",
    category: "Leadership",
    image: "/team-imgs/Sumath1.svg",
  },
  {
    title: "Malavika Pai",
    subtitle: "Listen, Listen, Listen",
    category: "Leadership",
    image: "/team-imgs/Malavika1.svg",
  },
  {
    title: "Raghav Rithvik",
    subtitle: "I'm with you, but...",
    category: "Leadership",
    image: "/team-imgs/Raghav1.svg",
  },
  {
    title: "Sharath Menon",
    subtitle: "Basically...",
    category: "Lead",
    image: "/team-imgs/Sharath1.svg",
  },
  {
    title: "Vanmayi Shetty",
    subtitle: "HAHAHA 😂",
    category: "Lead",
    image: "/team-imgs/Vanmayi1.svg",
  },
  {
    title: "Sijin T G",
    subtitle: "Today not possible",
    category: "Lead",
    image: "/team-imgs/Sijin1.svg",
  },
  {
    title: "Vishnu",
    subtitle: "Question...",
    category: "Lead",
    image: "/team-imgs/VISHNU 2.png",
  },
  {
    title: "Yokeshwar Elangovan",
    subtitle: "Where's the calendar bro?",
    category: "Lead",
    image: "/team-imgs/yoke.jpeg",
  },
  {
    title: "Sanya Afreen",
    subtitle: "Guys, we can do this!",
    category: "Lead",
    image: "/team-imgs/Sanya1.svg",
  },
  {
    title: "Sujay H",
    subtitle: "Bedsheet Not Spreadshee",
    category: "Designer",
    image: "/team-imgs/Sujay1.svg",
  },
  {
    title: "Jishin A",
    subtitle: "May the fonts be with you",
    category: "Designer",
    image: "/team-imgs/Jishin-1.png",
  },
  {
    title: "Abdul Manaf K",
    subtitle: "Pssst....I see dead pixels",
    category: "Designer",
    image: "/team-imgs/Manaf-1.png",
  },
  {
    title: "Nihal Daniel",
    subtitle: "Guys, Drink Water!",
    category: "Designer",
    image: "/team-imgs/Nihaal1.svg",
  },
  {
    title: "Advaith MP",
    subtitle: "The city needs me",
    category: "Designer",
    image: "/team-imgs/Advaith-1.jpg",
  },
  {
    title: "Jolan Dsouza",
    subtitle: "That's what she said.",
    category: "Designer",
    image: "/team-imgs/Jolan-1.png",
  },
  {
    title: "Saumya Kharkar",
    subtitle: "I cared for eight seconds, then I got distracted.",
    category: "Designer",
    image: "/team-imgs/Soumya-1.png",
  },
  {
    title: "Ruthik A",
    subtitle: "It's rendering maga",
    category: "Designer",
    image: "/team-imgs/Ruthik-1.png",
  },
  ,
  {
    title: "Sagar",
    subtitle: "Lights, Camera, Caffiene!",
    category: "Designer",
    image: "/team-imgs/Sagar-1.png",
  },
  {
    title: "Samuel S",
    subtitle: "Game is game",
    category: "Designer",
    image: "/team-imgs/Samuel-1.png",
  },
  ,
  {
    title: "Muhammed Hashir",
    subtitle: "Let's go wild!",
    category: "Developer",
    image: "/team-imgs/Hashir-1.png",
  },
//   {
//     title: "Athin Samuel",
//     subtitle: ".......",
//     category: "Designer",
//     image: "/team-imgs/Athin.JPG",
//   },
//   {
//     title: "Athira",
//     subtitle: "A Designing force to be reckoned with!",
//     category: "Designer",
//     image: "/team-imgs/Athira.JPG",
//   },
//   {
//     title: "Greeshma",
//     subtitle: "Savage mode activated",
//     category: "Designer",
//     image: "/team-imgs/Greeshma.JPG",
//   },
//   {
//     title: "Maria Gargory Christopher",
//     subtitle: "Deadline? I thought you said wine",
//     category: "Designer",
//     image: "/team-imgs/Chris.JPG",
//   },
  {
    title: "Manoj",
    subtitle: "Força Barça",
    category: "AM",
    image: "/team-imgs/Manoj-1.png",
  },
  
  
];

export default function LwydTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("all");

  const { setHoverType } = useCursor();

  const filteredTeam =
    currentCategory === "all"
      ? teamData
      : teamData.filter((member) => member.category === currentCategory);

  const current = filteredTeam[currentIndex];
  const nextIndex = (currentIndex + 1) % filteredTeam.length;
  const next = filteredTeam[nextIndex];

  const handleNextClick = () => {
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="h-screen bg-[#111111] rounded-b-4xl px-6 md:px-10 py-10 text-white">
      <h2
        className="text-md"
        onMouseEnter={() => setHoverType("big-white")}
        onMouseLeave={() => setHoverType("default")}
      >
        <span className="text-lwyd-yellow">/ </span>The People Behind The Work
      </h2>

      <div className="flex pt-12">
        {/* Left panel: current content */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center w-2/3 items-center justify-center relative overflow-hidden"
          >
            <div className="flex justify-around">
              <div className="flex flex-col items-center justify-center w-2/4">
                <h2
                  onMouseEnter={() => setHoverType("big-white")}
                  onMouseLeave={() => setHoverType("default")}
                  className="text-4xl mb-4"
                >
                  {current.title}
                  <span className="text-lwyd-yellow">.</span>
                </h2>
                <p
                  onMouseEnter={() => setHoverType("big-white")}
                  onMouseLeave={() => setHoverType("default")}
                  className="text-xl mb-8 text-[#7D7D7D]"
                >
                  "{current.subtitle}"
                </p>
              </div>
              <div className="w-2/4">
                <img
                  src={current.image}
                  alt={current.title}
                  className="mx-auto rounded-lg max-h-[400px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right panel: next content preview */}
        <div
          className="w-1/3 flex flex-col justify-center items-center text-[#7D7D7D]"
          onClick={handleNextClick}
          onMouseEnter={() => setHoverType("next")}
          onMouseLeave={() => setHoverType("default")}
        >
          <h3 className="text-xl mb-2 transition-colors">{next.title}</h3>
          <p className="text-sm">"{next.subtitle}"</p>
        </div>
      </div>

      {/* Filter and Preview Images */}
      <div className="flex flex-col mt-12">
        {/* Category selection */}
        <div className="flex gap-4 mb-4">
          <div
            className={`flex ${
              currentCategory === "all" ? "text-lwyd-yellow" : ""
            } text-[#7D7D7D] items-center gap-2`}
          >
            <button
              onClick={() => {
                setCurrentCategory("all")
                setCurrentIndex(0);
              } }
              className={`text-lg px-2 py-2 rounded-full cursor-none ${
                currentCategory === "all"
                  ? "bg-yellow-400"
                  : "border border-[#7D7D7D]"
              }`}
            ></button>
            All
          </div>
          <div
            className={`flex ${
              currentCategory === "Leadership" ? "text-lwyd-yellow" : ""
            } text-[#7D7D7D] items-center gap-2`}
          >
            <button
              onClick={() => {
                setCurrentCategory("Leadership")
                setCurrentIndex(0);
              }}
              className={`text-lg px-2 py-2 rounded-full cursor-none ${
                currentCategory === "Leadership"
                  ? "bg-yellow-400"
                  : "border border-[#7D7D7D]"
              }`}
            ></button>
            Leadership
          </div>
          <div
            className={`flex ${
              currentCategory === "Lead" ? "text-lwyd-yellow" : ""
            } text-[#7D7D7D] items-center gap-2`}
          >
            <button
              onClick={() => {setCurrentCategory("Lead")
                setCurrentIndex(0);
              }}
              className={`text-lg px-2 py-2 rounded-full cursor-none ${
                currentCategory === "Lead"
                  ? "bg-yellow-400"
                  : "border border-[#7D7D7D]"
              }`}
            ></button>
            Lead
          </div>
          <div
            className={`flex ${
              currentCategory === "Designer" ? "text-lwyd-yellow" : ""
            } text-[#7D7D7D] items-center gap-2`}
          >
            <button
              onClick={() => {setCurrentCategory("Designer")
                setCurrentIndex(0);
              }}
              className={`text-lg px-2 py-2 rounded-full cursor-none ${
                currentCategory === "Designer"
                  ? "bg-yellow-400"
                  : "border border-[#7D7D7D]"
              }`}
            ></button>
            Designer
          </div>

          <div
            className={`flex ${
              currentCategory === "AM" ? "text-lwyd-yellow" : ""
            } text-[#7D7D7D] items-center gap-2`}
          >
            <button
              onClick={() => {setCurrentCategory("AM")
                setCurrentIndex(0);
              }}
              className={`text-lg px-2 py-2 rounded-full cursor-none ${
                currentCategory === "AM"
                  ? "bg-yellow-400"
                  : "border border-[#7D7D7D]"
              }`}
            ></button>
            Account Managers
          </div>
          <div
            className={`flex ${
              currentCategory === "Developer" ? "text-lwyd-yellow" : ""
            } text-[#7D7D7D] items-center gap-2`}
          >
            <button
              onClick={() => {setCurrentCategory("Developer")
                setCurrentIndex(0);
              }}
              className={`text-lg px-2 py-2 rounded-full cursor-none ${
                currentCategory === "Developer"
                  ? "bg-yellow-400"
                  : "border border-[#7D7D7D]"
              }`}
            ></button>
            Developer
          </div>
          <div
            className={`flex ${
              currentCategory === "Friyay" ? "text-lwyd-yellow" : ""
            } text-[#7D7D7D] items-center gap-2`}
          >
            <button
              onClick={() => {setCurrentCategory("Friyay")
                setCurrentIndex(0);
              }}
              className={`text-lg px-2 py-2 rounded-full cursor-none ${
                currentCategory === "Friyay"
                  ? "bg-yellow-400"
                  : "border border-[#7D7D7D]"
              }`}
            ></button>
            Friyay
          </div>
          <div
            className={`flex ${
              currentCategory === "Hr&Finance" ? "text-lwyd-yellow" : ""
            } text-[#7D7D7D] items-center gap-2`}
          >
            <button
              onClick={() => setCurrentCategory("Hr&Finance")}
              className={`text-lg px-2 py-2 rounded-full cursor-none ${
                currentCategory === "Hr&Finance"
                  ? "bg-yellow-400"
                  : "border border-[#7D7D7D]"
              }`}
            ></button>
            HR & Finance
          </div>
        </div>

        {/* Thumbnails Preview */}
        <div className="flex gap-4">
          {filteredTeam.map((member, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center ${
                index === currentIndex ? "border-1 border-white rounded-lg" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={member.image}
                alt={member.title}
                className={`transition-all duration-700 rounded-md object-cover w-15 h-20 ${
                  index === currentIndex ? "scale-80" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
