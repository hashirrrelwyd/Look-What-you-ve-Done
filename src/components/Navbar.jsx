import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full h-16 flex items-center justify-between px-10 py-14 lg:py-0 text-white">
        <div>
          <a href="/">
            <img src="/svg/logo.svg" alt="Lwyd logo" className="w-8" />
          </a>
        </div>
        <div className="hidden lg:flex items-center space-x-16">
          <a href="#" className="nav-link">
            About Us
          </a>
          <a href="#" className="nav-link">
            Services
          </a>
          <a href="#" className="nav-link">
            Our Works
          </a>
          <a href="#" className="nav-link">
            Blog
          </a>
        </div>

        <div className="nav-link">
          <a href="/careers" className="hidden lg:flex gap-4">
            Work with us <img src="/svg/arrow.svg" alt="" className="" />
          </a>
        </div>
        <div className="lg:hidden">
          <a className="flex w-8 h-8">
            <img src="/svg/Hamburger.svg" alt="" />
          </a>
        </div>
      </nav>

      <style jsx>{`
        .nav-link {
          position: relative;
          display: inline-block;
          padding-bottom: 2px;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 2px;
          background-color: var(--lwyd-yellow);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
