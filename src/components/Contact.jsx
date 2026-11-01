import React from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#0B1120] px-6 text-white sm:px-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center py-16 sm:py-20 md:px-8 lg:px-12">

          <p className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-indigo-400">
            <Send size={15} />
            CONTACT
          </p>

          <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            Let's Build Something Great
          </h2>

          <p className="mb-8 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
            I'm always open to new opportunities, collaborations,
            or just a friendly chat about technology.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">

            <a
              href="mailto:kuladeepb995@gmail.com"
              className="flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold transition hover:bg-indigo-700 sm:w-fit"
            >
              <Send size={17} />
              Get In Touch
            </a>

            <a
              href="https://www.linkedin.com/in/kuladeep-botcha-092493364"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-gray-500 px-6 py-3 text-sm font-semibold transition hover:border-indigo-400 hover:text-indigo-400 sm:w-fit"
            >
              <FaLinkedin size={18} />
              Connect on LinkedIn
            </a>

          </div>
        </div>

        {/* RIGHT CONTACT DETAILS */}
        <div className="relative flex flex-col justify-center gap-7 overflow-hidden border-t border-gray-800 py-12 sm:py-16 md:border-l md:border-t-0 md:px-8 lg:px-12">

          {/* EMAIL */}
          <a
            href="mailto:kuladeepb995@gmail.com"
            className="group relative z-10 flex min-w-0 items-center gap-4"
          >
            <Mail
              size={22}
              className="shrink-0 text-gray-300 transition group-hover:text-indigo-400"
            />

            <span className="break-all text-sm text-gray-300 transition group-hover:text-white sm:text-base">
              kuladeepb995@gmail.com
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/kuladeep-botcha-092493364"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-10 flex min-w-0 items-center gap-4"
          >
            <FaLinkedin
              size={22}
              className="shrink-0 text-gray-300 transition group-hover:text-indigo-400"
            />

            <span className="break-all text-sm text-gray-300 transition group-hover:text-white sm:text-base">
              linkedin.com/in/kuladeep-botcha-092493364
            </span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/kuladeepb"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-10 flex min-w-0 items-center gap-4"
          >
            <FaGithub
              size={22}
              className="shrink-0 text-gray-300 transition group-hover:text-indigo-400"
            />

            <span className="text-sm text-gray-300 transition group-hover:text-white sm:text-base">
              github.com/kuladeepb
            </span>
          </a>

          {/* LOCATION */}
          <div className="relative z-10 flex items-center gap-4">
            <MapPin size={22} className="shrink-0 text-gray-300" />

            <span className="text-sm text-gray-300 sm:text-base">
              India
            </span>
          </div>

          {/* DECORATIVE BACKGROUND LINES */}
          <div className="pointer-events-none absolute -right-20 bottom-0 opacity-20">
            <svg
              width="450"
              height="250"
              viewBox="0 0 450 250"
              fill="none"
              className="max-w-none"
            >
              <path
                d="M0 220 C120 80 250 300 450 40"
                stroke="#6366F1"
                strokeWidth="2"
              />

              <path
                d="M0 240 C130 100 260 320 450 60"
                stroke="#6366F1"
                strokeWidth="2"
              />

              <path
                d="M0 200 C110 60 240 280 450 20"
                stroke="#6366F1"
                strokeWidth="2"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;