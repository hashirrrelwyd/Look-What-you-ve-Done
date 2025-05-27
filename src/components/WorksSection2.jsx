import "./css/works.css";

const cards = [
  {
    title: "Godawan",
    image: "/images/work-1.png",
  },
  {
      title: "Kingfisher",
      image: "/images/work-2.png",
  },
  {
      title: "Baileys",
      image: "/images/work-3.png",
  },
];

export default function WorksSection2() {
  return (
    <>
      <div className="works h-screen bg-black px-10 items-center py-10 pb-24">
        <h1 className="text-md text-white">
          <span className="text-lwyd-yellow">/</span>Look what we've done
        </h1>
        <div className="container flex flex-row justify-center mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card h-[350px] w-[300px] md:h-[450px] md:w-[400px] lg:h-[450px] lg:w-[400px] flex justify-end items-end"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              {/* <h2 className="uppercase mb-4 px-6">{card.title}</h2> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
