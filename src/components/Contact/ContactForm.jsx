import { HiMail } from "react-icons/hi";
import { useCursor } from "../../context/CursorContext";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import FormComponent from "./FormComponent";

export default function ContactForm() {
  const { setHoverType } = useCursor();
  return (
    <div
      onMouseEnter={() => setHoverType("black")}
      onMouseLeave={() => setHoverType("default")}
      className="bg-white px-6 md:px-10 py-10"
    >
      <div className="flex">
        <h3 className="text-xs lg:text-lg w-3/5">
          <span className="text-lwyd-yellow">/ </span>Fill The Form Out
        </h3>
      </div>
      <div className="md:hidden flex flex-col gap-2 pt-4">
        <h3 className="text-xl">Let's Connect</h3>
        <p className="text-xs text-[#7D7D7D]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          tempore hic odit corporis laborum.
        </p>
      </div>
      <div className="flex justify-between mt-6">
        <div className="hidden md:flex flex-col w-2/6 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl lg:text-4xl">Let's Connect</h3>
            <p className="text-xs lg:text-sm text-[#7D7D7D]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident tempore hic odit corporis laborum.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-sm lg:text-md xl:text-base">
            <hr className="text-[#7D7D7D33]" />
            <div className="flex gap-4 items-start">
              {/* <HiMail className="text-lwyd-yellow text-xl" /> */}
              <img className="w-4" src="/svg/email.svg" alt="" />
              <div className="flex flex-col">
                <span className="text-[#111111]">Email Address</span>
                <a
                  href="mailto:contact@lwyd.in"
                  className="text-[#7D7D7D] cursor-none"
                  onMouseEnter={() => setHoverType("button")}
                  onMouseLeave={() => setHoverType("black")}
                >
                  contact@lwyd.in
                </a>
              </div>
            </div>
            <hr className="text-[#7D7D7D33]" />
            <div className="flex gap-4 items-start">
              {/* <FaPhone className="text-lwyd-yellow text-md rotate-90" /> */}
              <img className="w-4" src="/svg/phone.svg" alt="" />
              <div className="flex flex-col">
                <span className="text-[#111111]">Phone Number</span>
                <a
                  href="tel:+919677207522"
                  className="text-[#7D7D7D] cursor-none"
                  onMouseEnter={() => setHoverType("button")}
                  onMouseLeave={() => setHoverType("black")}
                >
                  +91 96772 07522
                </a>
              </div>
            </div>
            <hr className="text-[#7D7D7D33]" />
            <div className="flex gap-4 items-start">
              {/* <FaLocationDot className="text-lwyd-yellow text-md" /> */}
              <img className="w-4" src="/svg/location.svg" alt="" />
              <div className="flex flex-col">
                <span className="text-[#111111]">Location</span>
                <a
                  href="https://www.google.com/search?q=lwyd+interactive+llp&sca_esv=5482522f8e04891b&source=hp&ei=P7j6ZaWNGIbg2roPsIifcA&iflsig=ANes7DEAAAAAZfrGTwfNU-6DdUtD-1sTe0BWyxQP7l1z&gs_ssp=eJzj4tVP1zc0TDaxSCuoKskxYLRSNagwTkpMNTQ1S7Y0NLMwMjAztjKoMExJTTRMNDc1MU61NDEwTPUSySmvTFHIzCtJLUpMLsksS1XIySkAADwSFvE&oq=lwy&gs_lp=Egdnd3Mtd2l6IgNsd3kqAggAMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEC4YgAQyCBAuGIAEGOUEMgUQABiABDIHEAAYgAQYCjIFEAAYgAQyBxAAGIAEGApIhx1QvQpYkQ5wAXgAkAEAmAGRAaABqwOqAQMwLjO4AQHIAQD4AQGYAgSgAsMDqAIKwgIQEAAYAxiPARjlAhjqAhiMA8ICEBAuGAMYjwEY5QIY6gIYjAPCAgsQABiABBixAxiDAcICERAuGIAEGLEDGIMBGMcBGNEDwgIIEC4YgAQYsQPCAhEQLhiABBiKBRixAxjHARjRA8ICDhAuGIAEGLEDGMcBGNEDwgIIEAAYgAQYsQPCAg4QABiABBiKBRixAxiDAZgDB5IHAzEuM6AHliI&sclient=gws-wiz"
                  className="text-[#7D7D7D] cursor-none"
                  onMouseEnter={() => setHoverType("button")}
                  onMouseLeave={() => setHoverType("black")}
                >
                  Bengaluru & Mumbai
                </a>
              </div>
            </div>
            <hr className="text-[#7D7D7D33]" />
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <div className="absolute border-r-0 border-b-0 border-1 border-[#ffcc00] w-[20px] h-[20px]"></div>
          <FormComponent />
        </div>
      </div>
      {/* Contact Details for Mobile View */}
      <div className="md:hidden flex flex-col gap-5 text-sm lg:text-md xl:text-base m-5">
        <hr className="text-[#7D7D7D33]" />
        <div className="flex gap-4 items-start">
          {/* <HiMail className="text-lwyd-yellow text-xl" /> */}
          <img className="w-4" src="/svg/email.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-[#111111]">Email Address</span>
            <a
              href="mailto:contact@lwyd.in"
              className="text-[#7D7D7D] cursor-none"
              onMouseEnter={() => setHoverType("button")}
              onMouseLeave={() => setHoverType("black")}
            >
              contact@lwyd.in
            </a>
          </div>
        </div>
        <hr className="text-[#7D7D7D33]" />
        <div className="flex gap-4 items-start">
          {/* <FaPhone className="text-lwyd-yellow text-md rotate-90" /> */}
          <img className="w-4" src="/svg/phone.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-[#111111]">Phone Number</span>
            <a
              href="tel:+919677207522"
              className="text-[#7D7D7D] cursor-none"
              onMouseEnter={() => setHoverType("button")}
              onMouseLeave={() => setHoverType("black")}
            >
              +91 96772 07522
            </a>
          </div>
        </div>
        <hr className="text-[#7D7D7D33]" />
        <div className="flex gap-4 items-start">
          {/* <FaLocationDot className="text-lwyd-yellow text-md" /> */}
          <img className="w-4" src="/svg/location.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-[#111111]">Location</span>
            <a
              href="https://www.google.com/search?q=lwyd+interactive+llp&sca_esv=5482522f8e04891b&source=hp&ei=P7j6ZaWNGIbg2roPsIifcA&iflsig=ANes7DEAAAAAZfrGTwfNU-6DdUtD-1sTe0BWyxQP7l1z&gs_ssp=eJzj4tVP1zc0TDaxSCuoKskxYLRSNagwTkpMNTQ1S7Y0NLMwMjAztjKoMExJTTRMNDc1MU61NDEwTPUSySmvTFHIzCtJLUpMLsksS1XIySkAADwSFvE&oq=lwy&gs_lp=Egdnd3Mtd2l6IgNsd3kqAggAMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEC4YgAQyCBAuGIAEGOUEMgUQABiABDIHEAAYgAQYCjIFEAAYgAQyBxAAGIAEGApIhx1QvQpYkQ5wAXgAkAEAmAGRAaABqwOqAQMwLjO4AQHIAQD4AQGYAgSgAsMDqAIKwgIQEAAYAxiPARjlAhjqAhiMA8ICEBAuGAMYjwEY5QIY6gIYjAPCAgsQABiABBixAxiDAcICERAuGIAEGLEDGIMBGMcBGNEDwgIIEC4YgAQYsQPCAhEQLhiABBiKBRixAxjHARjRA8ICDhAuGIAEGLEDGMcBGNEDwgIIEAAYgAQYsQPCAg4QABiABBiKBRixAxiDAZgDB5IHAzEuM6AHliI&sclient=gws-wiz"
              className="text-[#7D7D7D] cursor-none"
              onMouseEnter={() => setHoverType("button")}
              onMouseLeave={() => setHoverType("black")}
            >
              Bengaluru & Mumbai
            </a>
          </div>
        </div>
        <hr className="text-[#7D7D7D33]" />
      </div>
    </div>
  );
}
