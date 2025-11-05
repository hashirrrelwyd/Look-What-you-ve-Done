import { useState } from "react";
import { useCursor } from "../../context/CursorContext";
import { FiPlus } from "react-icons/fi";
const faqData = [
  {
    question: "What is your hiring process?",
    answer:
      "Our hiring process includes a resume review, technical interviews, and a final HR round.",
  },
  {
    question: "Do you offer remote roles?",
    answer:
      "Yes, we offer both onsite and remote opportunities depending on the role.",
  },
  {
    question: "Can freshers apply?",
    answer:
      "Absolutely! We welcome enthusiastic learners regardless of experience.",
  },
];

export default function FAQs() {
  const { setHoverType } = useCursor();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col px-6 md:px-10 bg-white py-16 gap-6"
      onMouseEnter={() => setHoverType("black")}
      onMouseLeave={() => setHoverType("default")}
    >
      <div className="flex">
        <h2
          className="text-black text-xs lg:text-lg"
          onMouseEnter={() => setHoverType("big-black")}
          onMouseLeave={() => setHoverType("black")}
        >
          <span className="text-lwyd-yellow">/ </span>FAQs
        </h2>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 transition-all"
          >
            {/* Question Row */}
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <p
                onMouseEnter={() => setHoverType("big-black")}
                onMouseLeave={() => setHoverType("black")}
                className="text-[#111111] font-medium"
              >
                {faq.question}
              </p>
              <div className="text-xl text-[#7D7D7D] transition-transform duration-300 ease-in-out">
                <FiPlus
                  onMouseEnter={() => setHoverType("button")}
                  onMouseLeave={() => setHoverType("black")}
                  className={`transform transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-45 text-black" : "rotate-0"
                  }`}
                />
              </div>
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p
                onMouseEnter={() => setHoverType("big-black")}
                onMouseLeave={() => setHoverType("black")}
                className="text-[#7D7D7D] text-sm"
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
