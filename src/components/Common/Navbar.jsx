import { useNavigate } from "react-router-dom";
import { useCursor } from "../../context/CursorContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { setHoverType } = useCursor();
  return (
    <>
      <nav className="absolute z-50 top-0 left-0 w-full h-16 flex items-center justify-between px-6 md:px-10 py-14 lg:py-0 text-white">
        <div>
          <a onClick={() => navigate("/")}>
            <img
              src="/svg/logo.svg"
              alt="Lwyd logo"
              className="w-8"
              onMouseEnter={() => setHoverType("button")}
              onMouseLeave={() => setHoverType("default")}
            />
          </a>
        </div>
        <div className="hidden lg:flex items-center space-x-16">
          <a
            onMouseEnter={() => setHoverType("button")}
            onMouseLeave={() => setHoverType("default")}
            onClick={() => navigate("/about")}
            className="nav-link"
          >
            About Us
          </a>
          <a
            onMouseEnter={() => setHoverType("button")}
            onMouseLeave={() => setHoverType("default")}
            onClick={() => navigate("/services")}
            className="nav-link"
          >
            Services
          </a>
          <a
            onMouseEnter={() => setHoverType("button")}
            onMouseLeave={() => setHoverType("default")}
            onClick={() => navigate("/contact")}
            className="nav-link"
          >
            Contact Us
          </a>
        </div>

        <div
          onMouseEnter={() => setHoverType("button")}
          onMouseLeave={() => setHoverType("default")}
          className="nav-link"
        >
          <a
            onClick={() => navigate("/careers")}
            className="hidden lg:flex gap-4"
          >
            Work with us <img src="/svg/arrow.svg" alt="" className="" />
          </a>
        </div>
        <div className="lg:hidden">
          <a className="flex w-8 h-8">
            <img
              src="/svg/Hamburger.svg"
              alt=""
              onMouseEnter={() => setHoverType("button")}
              onMouseLeave={() => setHoverType("default")}
            />
          </a>
        </div>
      </nav>
    </>
  );
}
