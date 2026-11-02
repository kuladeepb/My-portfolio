import React from "react";
import { Send, Mail } from "lucide-react";

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0B1120] text-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            <p className="text-gray-300 text-xl md:text-2xl mb-3">
              Hi, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Kula<span className="text-blue-600">deep</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-bold mb-5">
              Full Stack Developer & CS Student
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-8 max-w-xl mx-auto md:mx-0 mb-7">
              I build modern, responsive web applications that turn ideas
              into real-world solutions. Passionate about full-stack
              development, I enjoy creating intuitive user experiences
              and exploring technologies like React, Node.js, and MongoDB.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">

              <a
                href="#projects"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition duration-300"
              >
                <Send size={17} />
                View My Work
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 border border-gray-500 hover:border-blue-500 hover:text-blue-400 px-6 py-3 rounded-full font-semibold transition duration-300"
              >
                <Mail size={17} />
                Get In Touch
              </a>

            </div>
          </div>

          {/* RIGHT PROFILE IMAGE */}
          <div className="relative flex justify-center items-center mt-10 md:mt-0">

            {/* OUTER RING */}
            <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] rounded-full border border-blue-500 animate-pulse"></div>

            {/* INNER RING */}
            <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] rounded-full border-2 border-purple-600"></div>

            {/* PROFILE IMAGE */}
            <img
              src={`${baseUrl}images/myprofile.png`}
              alt="Kuladeep profile portrait"
              className="relative z-10 w-[280px] sm:w-[330px] md:w-[380px] h-[300px] sm:h-[350px] md:h-[400px] object-cover object-top rounded-b-full"
              onError={(e) => {
                console.error("Profile image could not be loaded:", e.currentTarget.src);
              }}
            />

            {/* ANNOTATION */}
            <div className="hidden md:block absolute top-10 right-0 text-blue-400 text-sm italic rotate-[-8deg]">
              <p>Turning</p>
              <p>ideas into</p>
              <p>products</p>
              <p className="text-lg mt-2">&lt;/&gt;</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;