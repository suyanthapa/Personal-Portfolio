import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#081b29] text-white shadow-md">
      <div className="flex justify-between items-center py-5 px-8">
        <a
          href="https://www.instagram.com/suyantm_/"
          className="text-lg font-extrabold"
        >
          Suyan
        </a>
    
        {/* Hamburger Button (mobile only) */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Nav Links (desktop) */}
        <nav className="hidden sm:flex space-x-8 font-medium text-base">
          <a href="#home" className="hover:text-[#00abf0] transition">Home</a>
          <a href="#myJourney" className="hover:text-[#00abf0] transition">My Journey</a>
          <a href="#skills" className="hover:text-[#00abf0] transition">Skills</a>
          {/* <a href="#services" className="hover:text-[#00abf0] transition">Services</a> */}
          {/* <a href="#portfolio" className="hover:text-[#00abf0] transition">Portfolio</a> */}
          <a href="#contact" className="hover:text-[#00abf0] transition">Contact</a>
        </nav>
      </div>

      {/* Nav Links (mobile dropdown) */}
      {isOpen && (
        <div className="sm:hidden px-8 pb-4 flex flex-col space-y-2 font-medium text-base">
          <a href="#home" className="hover:text-[#00abf0] transition">Home</a>
          <a href="#myJourney" className="hover:text-[#00abf0] transition">My Journey</a>
          <a href="#skills" className="hover:text-[#00abf0] transition">Skills</a>
          {/* <a href="#services" className="hover:text-[#00abf0] transition">Services</a> */}
          {/* <a href="#portfolio" className="hover:text-[#00abf0] transition">Portfolio</a> */}
          <a href="#contact" className="hover:text-[#00abf0] transition">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
