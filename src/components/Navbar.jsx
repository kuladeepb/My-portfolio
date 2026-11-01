import { useState } from "react";
import {
  CloudDownload,
  Menu,
  X,
} from "lucide-react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="relative z-50 bg-[#0B1120] px-6 py-4 text-white md:px-10 lg:px-16">

      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* LOGO */}
        <a href="#home" onClick={closeMenu}>
          <p className="text-3xl font-bold">
            K<span className="text-blue-500">.</span>
          </p>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 font-sans text-base text-slate-300 md:flex lg:gap-10 lg:text-lg">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="transition-colors hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* DESKTOP SOCIAL LINKS + RESUME */}
        <div className="hidden items-center gap-4 md:flex md:gap-5">

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/kuladeep-botcha-092493364"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-slate-300 transition-all hover:scale-110 hover:text-blue-400"
          >
            <FaLinkedin size={21} />
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/kuladeepb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-slate-300 transition-all hover:scale-110 hover:text-white"
          >
            <FaGithub size={22} />
          </a>

          {/* DOWNLOAD RESUME */}
          <a
            href="/Kuladeep_Botcha_Resume.docx"
            download
            className="flex items-center gap-2 rounded-lg border border-blue-500 px-3 py-2 text-sm font-semibold transition-colors hover:bg-blue-600 lg:px-4 lg:text-base"
          >
            <CloudDownload size={18} />
            <span>Download Resume</span>
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white transition hover:bg-slate-800 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-700 bg-[#0B1120] px-6 py-6 shadow-xl md:hidden">

          <nav className="flex flex-col gap-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={closeMenu}
                className="text-base text-slate-300 transition hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}

          </nav>

          {/* MOBILE SOCIAL LINKS */}
          <div className="mt-6 flex items-center gap-6 border-t border-slate-700 pt-5">

            <a
              href="https://www.linkedin.com/in/kuladeep-botcha-092493364"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-300 hover:text-blue-400"
            >
              <FaLinkedin size={23} />
            </a>

            <a
              href="https://github.com/kuladeepb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-300 hover:text-white"
            >
              <FaGithub size={24} />
            </a>

          </div>

          {/* MOBILE RESUME BUTTON */}
          <a
            href="/Kuladeep_Botcha_Resume.docx"
            download
            onClick={closeMenu}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-blue-500 px-4 py-3 font-semibold transition hover:bg-blue-600"
          >
            <CloudDownload size={18} />
            Download Resume
          </a>

        </div>
      )}

    </header>
  );
}

export default Navbar;