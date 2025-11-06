// // import React, { useState } from "react"; // 👈 Import useState
// // import { useNavigate } from "react-router-dom";
// // import { useCursor } from "../../context/CursorContext";
// // import MobileNavMenu from "./MobileNavMenu";

// // export default function Navbar() {
// //   const navigate = useNavigate();
// //   const { setHoverType } = useCursor();
// //   const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);

// //   // Function to handle navigation and close the menu
// //   const handleNavigation = (path) => {
// //     navigate(path);
// //     setShowMobileNavMenu(false);
// //   };

// //   return (
// //     <>
// //       <nav className="absolute z-999 top-0 left-0 w-full h-16 flex items-center justify-between px-6 md:px-10 py-14 lg:py-0 text-white bg-linear-to-b from-black/30 via-black/20 to-black/0 ">
// //         <div>
// //           <a onClick={() => handleNavigation("/")}>
// //             <img
// //               src="/svg/logo.svg"
// //               alt="Lwyd logo"
// //               className="w-8"
// //               onMouseEnter={() => setHoverType("button")}
// //               onMouseLeave={() => setHoverType("default")}
// //             />
// //           </a>
// //         </div>

// //         {/* ... Desktop Links (Unchanged) ... */}
// //         <div className="hidden lg:flex items-center space-x-16">
// //           <a
// //             onMouseEnter={() => setHoverType("button")}
// //             onMouseLeave={() => setHoverType("default")}
// //             onClick={() => handleNavigation("/about")}
// //             className="nav-link"
// //           >
// //             About Us
// //           </a>
// //           <a
// //             onMouseEnter={() => setHoverType("button")}
// //             onMouseLeave={() => setHoverType("default")}
// //             onClick={() => handleNavigation("/services")}
// //             className="nav-link"
// //           >
// //             Services
// //           </a>
// //           <a
// //             onMouseEnter={() => setHoverType("button")}
// //             onMouseLeave={() => setHoverType("default")}
// //             onClick={() => handleNavigation("/contact-us")}
// //             className="nav-link"
// //           >
// //             Contact Us
// //           </a>
// //         </div>

// //         <div
// //           onMouseEnter={() => setHoverType("button")}
// //           onMouseLeave={() => setHoverType("default")}
// //           className="nav-link"
// //         >
// //           <a
// //             onClick={() => handleNavigation("/careers")}
// //             className="hidden lg:flex gap-4"
// //           >
// //             Work with us <img src="/svg/arrow.svg" alt="" className="" />
// //           </a>
// //         </div>

// //         {/* Mobile Hamburger Icon: Toggles the menu ON */}
// //         <div
// //           className="lg:hidden cursor-pointer"
// //           onClick={() => setShowMobileNavMenu(true)} // 👈 Open the menu
// //           onMouseEnter={() => setHoverType("button")}
// //           onMouseLeave={() => setHoverType("default")}
// //         >
// //           <a className="flex w-8 h-8">
// //             <img
// //               src="/svg/Hamburger.svg"
// //               alt="Menu"
// //             />
// //           </a>
// //         </div>
// //       </nav>

// //       {/* MobileNavMenu is rendered conditionally and passed the close function */}
// //       {showMobileNavMenu && (
// //         <MobileNavMenu
// //           setShowMobileNavMenu={setShowMobileNavMenu}
// //           handleNavigation={handleNavigation} // Pass navigation handler
// //         />
// //       )}
// //     </>
// //   );
// // }

// import React, { useState, useEffect, useCallback } from "react"; // 👈 Added useEffect, useCallback
// import { useNavigate } from "react-router-dom";
// import { useCursor } from "../../context/CursorContext";
// import MobileNavMenu from "./MobileNavMenu";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const { setHoverType } = useCursor();
//   const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);

//   // New State for Scroll-Aware Header
//   const [isScrolledUp, setIsScrolledUp] = useState(false);
//   const [isAtTop, setIsAtTop] = useState(true);

//   // Function to handle navigation and close the menu
//   const handleNavigation = (path) => {
//     navigate(path);
//     setShowMobileNavMenu(false);
//   };

//   // --- Smart Header Logic ---
//   const SCROLL_THRESHOLD = 50; // Scroll distance to hide/show the header

//  // Inside Navbar.jsx

// // Function to handle scroll and determine header state
// const handleScroll = useCallback(() => {
//   const currentScrollY = window.scrollY;

//   // 1. Check if the page is at the very top
//   setIsAtTop(currentScrollY === 0);

//   // --- Revised Scroll Up/Down Logic for Mobile Stability ---
//   const prevScrollY = window.prevScrollY || 0;
//   const SCROLL_THRESHOLD = 50;

//   // Condition to show the header (Scrolled Up significantly)
//   const shouldShowHeader =
//     // Case 1: Scrolling Up past the threshold
//     currentScrollY < prevScrollY - SCROLL_THRESHOLD && currentScrollY > 0;

//   // Condition to hide the header (Scrolled Down past the threshold)
//   const shouldHideHeader =
//     // Case 2: Scrolling Down past the threshold
//     currentScrollY > prevScrollY + SCROLL_THRESHOLD;

//   if (shouldShowHeader) {
//     // If we scroll up significantly, show the smart header
//     setIsScrolledUp(true);
//   } else if (shouldHideHeader) {
//     // If we scroll down significantly, hide the header
//     setIsScrolledUp(false);
//   }

//   // Update previous scroll position only if currentScrollY is above 0,
//   // preventing a bug where the header flashes when hitting the very bottom.
//   if (currentScrollY >= 0) {
//     window.prevScrollY = currentScrollY;
//   }
// }, []);

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, [handleScroll]);

//   const navClasses = `
//     // Base Classes: fixed, full-width (w-full), centered horizontally (left-0 right-0)
//     fixed z-50 top-0 left-0 right-0 w-full flex items-center justify-between transition-all duration-300 ease-in-out

//     // Conditional State Logic
//     ${
//       isAtTop
//         ? "h-10 px-0 md:px-10 py-14 lg:py-0 bg-linear-to-b from-black/30 via-black/20 to-black/0" // State 1: Full width at the top (Original styles)
//         : isScrolledUp
//         ? "translate-y-0 p-2" // State 2: Pill container is visible and has padding for the gap
//         : "-translate-y-full" // State 3: Hidden
//     }

//     // Height Adjustment (Applies to all visible states)
//     ${isAtTop || isScrolledUp ? "" : "h-16"}
//   `;

//   // New: Container for the actual pill shape (inside the return)
//   const pillContentClasses = `
//     w-full h-14 flex items-center justify-between px-6 md:px-10 py-14 lg:py-0 text-white
//     ${
//       isAtTop
//         ? "" // No specific pill style when at top
//         : "backdrop-blur-xl bg-black/30 rounded-full shadow-xl" // Pill style applied when visible
//     }
//   `;

//   return (
//     <>
//       <nav className={navClasses}>
//         <div className={pillContentClasses}>
//           <div>
//             <a onClick={() => handleNavigation("/")}>
//               <img
//                 src="/svg/logo.svg"
//                 alt="Lwyd logo"
//                 className="w-8"
//                 onMouseEnter={() => setHoverType("button")}
//                 onMouseLeave={() => setHoverType("default")}
//               />
//             </a>
//           </div>

//           {/* ... Desktop Links (Unchanged) ... */}
//           <div className="hidden lg:flex items-center space-x-16">
//             <a
//               onMouseEnter={() => setHoverType("button")}
//               onMouseLeave={() => setHoverType("default")}
//               onClick={() => handleNavigation("/about")}
//               className="nav-link"
//             >
//               About Us
//             </a>
//             <a
//               onMouseEnter={() => setHoverType("button")}
//               onMouseLeave={() => setHoverType("default")}
//               onClick={() => handleNavigation("/services")}
//               className="nav-link"
//             >
//               Services
//             </a>
//             <a
//               onMouseEnter={() => setHoverType("button")}
//               onMouseLeave={() => setHoverType("default")}
//               onClick={() => handleNavigation("/contact-us")}
//               className="nav-link"
//             >
//               Contact Us
//             </a>
//           </div>

//           <div
//             onMouseEnter={() => setHoverType("button")}
//             onMouseLeave={() => setHoverType("default")}
//             className="nav-link"
//           >
//             <a
//               onClick={() => handleNavigation("/careers")}
//               className="hidden lg:flex gap-4"
//             >
//               Work with us <img src="/svg/arrow.svg" alt="" className="" />
//             </a>
//           </div>

//           {/* Mobile Hamburger Icon: Toggles the menu ON */}
//           <div
//             className="lg:hidden cursor-pointer"
//             onClick={() => setShowMobileNavMenu(true)}
//             onMouseEnter={() => setHoverType("button")}
//             onMouseLeave={() => setHoverType("default")}
//           >
//             <a className="flex w-8 h-8">
//               <img src="/svg/Hamburger.svg" alt="Menu" />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* MobileNavMenu is rendered conditionally and passed the close function */}
//       {showMobileNavMenu && (
//         <MobileNavMenu
//           setShowMobileNavMenu={setShowMobileNavMenu}
//           handleNavigation={handleNavigation}
//         />
//       )}
//     </>
//   );
// }

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCursor } from "../../context/CursorContext";
import MobileNavMenu from "./MobileNavMenu";

export default function Navbar() {
  const navigate = useNavigate();
  const { setHoverType } = useCursor();
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);

  // State for Scroll-Aware Header
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // Function to handle navigation and close the menu
  const handleNavigation = (path) => {
    navigate(path);
    setShowMobileNavMenu(false);
  };

  // --- Mobile-Optimized Smart Header Logic ---
  const SCROLL_THRESHOLD = 20; // Lowered threshold for greater sensitivity on mobile

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // 1. Check if the page is at the very top
    setIsAtTop(currentScrollY === 0);

    const prevScrollY = window.prevScrollY || 0;

    // Condition to show the header (Scrolling Up)
    const shouldShowHeader =
      // Scrolling Up significantly AND past the initial threshold
      currentScrollY < prevScrollY - SCROLL_THRESHOLD && currentScrollY > 100;

    // Condition to hide the header (Scrolling Down)
    const shouldHideHeader =
      // Scrolling Down significantly
      currentScrollY > prevScrollY + SCROLL_THRESHOLD;

    // Condition for when the user is scrolled past the top but stops scrolling (e.g., address bar shift bug)
    const isPausedAfterScroll =
      currentScrollY > 0 && currentScrollY === prevScrollY && !isAtTop;

    if (shouldShowHeader) {
      setIsScrolledUp(true);
    } else if (shouldHideHeader) {
      setIsScrolledUp(false);
    }
    // Edge case handling: Ensure header is visible if we are very close to the top (but not exactly 0)
    // to catch scroll bounce or address bar shifts.
    else if (currentScrollY < 100 && currentScrollY > 0) {
      setIsScrolledUp(true);
    }

    // Update previous scroll position
    window.prevScrollY = currentScrollY;
  }, [isAtTop]); // Added isAtTop to dependencies just in case the state updates influence this.

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  // --- End Smart Header Logic ---

  // Conditional Class Names for the full-width NAV wrapper (Handles positioning and hiding/showing)
  const navClasses = `
    // Base Classes: fixed, full-width, centered horizontally
    fixed z-50 top-0 left-0 right-0 w-full flex items-center justify-between transition-all duration-300 ease-in-out
    
    // Conditional State Logic
    ${
      isAtTop
        ? "h-16 py-14 lg:py-0" // State 1: Full width at the top
        : isScrolledUp
        ? "translate-y-0 h-auto p-2" // State 2: Pill container is visible and has padding for the gap
        : "-translate-y-full h-16" // State 3: Hidden
    }
  `;

  // Container for the actual pill shape (Handles styling: blur, rounding, background)
  const pillContentClasses = `
    w-full h-14 flex items-center justify-between px-6 md:px-10 py-8 lg:py-6 text-white
    ${
      isAtTop
        ? "bg-linear-to-b from-black/30 via-black/20 to-black/0 h-16 py-14 lg:py-0" // Default style when at top
        : "backdrop-blur-md bg-black/30 rounded-full shadow-xl" // Pill style applied when visible
    }
  `;

  return (
    <>
      <nav className={navClasses}>
        {/* Everything inside the nav moves into this new div (The actual styled header) */}
        <div className={pillContentClasses}>
          {/* Logo */}
          <div>
            <a onClick={() => handleNavigation("/")}>
              <img
                src="/svg/logo.svg"
                alt="Lwyd logo"
                className="w-8"
                onMouseEnter={() => setHoverType("button")}
                onMouseLeave={() => setHoverType("default")}
              />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-16">
            <a
              onMouseEnter={() => setHoverType("button")}
              onMouseLeave={() => setHoverType("default")}
              onClick={() => handleNavigation("/about")}
              className="nav-link"
            >
              About Us
            </a>
            <a
              onMouseEnter={() => setHoverType("button")}
              onMouseLeave={() => setHoverType("default")}
              onClick={() => handleNavigation("/services")}
              className="nav-link"
            >
              Services
            </a>
            <a
              onMouseEnter={() => setHoverType("button")}
              onMouseLeave={() => setHoverType("default")}
              onClick={() => handleNavigation("/contact-us")}
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
              onClick={() => handleNavigation("/careers")}
              className="hidden lg:flex gap-4"
            >
              Work with us <img src="/svg/arrow.svg" alt="" className="" />
            </a>
          </div>

          {/* Mobile Hamburger Icon: Toggles the menu ON */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setShowMobileNavMenu(true)}
            onMouseEnter={() => setHoverType("button")}
            onMouseLeave={() => setHoverType("default")}
          >
            <a className="flex w-8 h-8">
              <img src="/svg/Hamburger.svg" alt="Menu" />
            </a>
          </div>
        </div>
      </nav>

      {/* MobileNavMenu is rendered conditionally and passed the close function */}
      {showMobileNavMenu && (
        <MobileNavMenu
          setShowMobileNavMenu={setShowMobileNavMenu}
          handleNavigation={handleNavigation}
        />
      )}
    </>
  );
}
