import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white px-6 py-5">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

        {/* LOGO */}
        <a
          href="#home"
          className="text-2xl font-extrabold text-[#0B1120]"
        >
          K<span className="text-indigo-600">.</span>
        </a>

        {/* NAVIGATION */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">

          <a href="#home" className="text-sm text-gray-600 hover:text-indigo-600">
            Home
          </a>

          <a href="#about" className="text-sm text-gray-600 hover:text-indigo-600">
            About
          </a>

          <a href="#projects" className="text-sm text-gray-600 hover:text-indigo-600">
            Projects
          </a>

          <a href="#skills" className="text-sm text-gray-600 hover:text-indigo-600">
            Skills
          </a>

          <a href="#contact" className="text-sm text-gray-600 hover:text-indigo-600">
            Contact
          </a>

        </div>

        {/* BACK TO TOP */}
        <a
          href="#home"
          aria-label="Back to top"
          className="rounded-full border border-gray-200 p-2 text-gray-600 transition hover:border-indigo-500 hover:text-indigo-600"
        >
          <ArrowUp size={18} />
        </a>

      </div>

    </footer>
  );
};

export default Footer;