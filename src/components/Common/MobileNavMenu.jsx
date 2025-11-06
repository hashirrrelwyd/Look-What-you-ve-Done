import { Instagram, Linkedin, LinkedinIcon, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

// Use Props: setShowMobileNavMenu to close, handleNavigation to navigate
const MobileNavMenu = ({ setShowMobileNavMenu, handleNavigation }) => {
  // 1. Animation State: start hidden (off screen)
  const [isAnimating, setIsAnimating] = useState(false);

  // 2. useEffect to Trigger Slide-In: runs once on mount
  useEffect(() => {
    // A small delay ensures the component has fully rendered before we change the state
    // which allows the transition utility class to work.
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);

    // Optional: Prevent scrolling on the body when the menu is open
    document.body.style.overflow = 'hidden';

    return () => {
      // Cleanup: Restore scrolling when the component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  // Function to close the menu with a slide-out animation
  const closeMenu = () => {
      setIsAnimating(false); // Start slide-out animation
      
      // Wait for the transition to finish (e.g., 300ms) before unmounting the component
      setTimeout(() => {
          setShowMobileNavMenu(false);
      }, 300); 
  }


  // Define colors
  const yellowText = 'text-white';
  const blackBg = 'bg-black';
  const iconBorder = 'border-[#f7ea0e]';
  
  // Helper for link click
  const navAndClose = (path) => {
      // Perform slide-out animation before navigating
      setIsAnimating(false);
      setTimeout(() => {
        handleNavigation(path); // Use the passed-down function for navigation
        setShowMobileNavMenu(false); // Unmount component
      }, 300);
  }

  return (
    // Conditional Animation Classes:
    // transform translate-x-full (Hidden State)
    // transform translate-x-0 (Visible State)
    <div 
      className={`
        fixed inset-0 z-100
        ${blackBg} 
        flex flex-col 
        p-6 sm:p-8 md:p-10 py-10
        lg:hidden 
        min-h-screen
        transition-transform duration-300 ease-in-out // 👈 Transition settings
        ${isAnimating ? 'translate-x-0' : 'translate-x-full'} // 👈 Conditional slide
      `}
    >

      {/* --- Header Section (Logo and Icon) --- */}
      <header className="flex justify-between items-center mb-12 md:mb-16">
        {/* Logo Placeholder (Yellow "/") */}
        <div>
          <a onClick={() => navAndClose("/")}>
            <img
              src="/svg/logo.svg"
              alt="Lwyd logo"
              className="w-8"
              onMouseEnter={() => setHoverType("button")}
              onMouseLeave={() => setHoverType("default")}
            />
          </a>
        </div>

        {/* Close Icon (9-Dot Grid): Toggles the menu OFF */}
        <div 
            className="w-6 h-6 grid grid-cols-3 gap-0.5 cursor-pointer"
            onClick={closeMenu} // 👈 Close the menu
        >
          <X className='text-[#f7ea0e]' />
        </div>
      </header>
      
      {/* --- Navigation Links --- */}
      <nav className="h-full flex flex-col justify-center">
        <ul className="list-none p-0 m-0 space-y-7 md:space-y-10">
          {/* Update <a> tags to use the new handler */}
          <li><a onClick={() => navAndClose("/")} className={`text-3xl md:text-4xl font-bold ${yellowText} hover:opacity-80 transition duration-150 cursor-pointer`}>Home</a></li>
          <li><a onClick={() => navAndClose("/about")} className={`text-3xl md:text-4xl font-bold ${yellowText} hover:opacity-80 transition duration-150 cursor-pointer`}>About Us</a></li>
          <li><a onClick={() => navAndClose("/services")} className={`text-3xl md:text-4xl font-bold ${yellowText} hover:opacity-80 transition duration-150 cursor-pointer`}>Services</a></li>
          <li><a onClick={() => navAndClose("/careers")} className={`text-3xl md:text-4xl font-bold ${yellowText} hover:opacity-80 transition duration-150 cursor-pointer`}>Careers</a></li>
          <li><a onClick={() => navAndClose("/contact-us")} className={`text-3xl md:text-4xl font-bold ${yellowText} hover:opacity-80 transition duration-150 cursor-pointer`}>Contact Us</a></li>
        </ul>
      </nav>

      {/* --- Social Media Links (Unchanged) --- */}
      <div className="flex space-x-4 mt-auto"> 
        {/* LinkedIn Icon */}
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`flex items-center justify-center size-12 border rounded-full hover:opacity-75 transition bg-[#1a1a1a]`}
        >
          <FaLinkedinIn className='text-white size-6' />
        </a>
        {/* Instagram Icon */}
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`flex items-center justify-center size-12 border rounded-full hover:opacity-75 transition bg-[#1a1a1a]`}
        >
          <FaInstagram className='text-white size-6' />
        </a>
      </div>
    </div>
  );
};

export default MobileNavMenu;