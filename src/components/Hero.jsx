import { Send, Mail } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen scroll-mt-20 w-full overflow-hidden bg-[#0B1120] pt-20 text-white md:pt-0"
    >
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center gap-12 px-6 py-12 md:min-h-screen md:flex-row md:justify-between md:gap-8 md:px-12 md:py-12 lg:gap-12 lg:px-16">

        {/* LEFT SIDE */}
        <div className="w-full max-w-[560px] text-center md:text-left">

          <p className="font-sans text-xl text-gray-300 md:text-2xl">
            Hi, I'm
          </p>

          <h1 className="mt-1 text-5xl font-bold sm:text-6xl lg:text-7xl">
            Kula<span className="text-blue-600">deep</span>
          </h1>

          <h2 className="mt-3 text-xl font-bold sm:text-2xl">
            Full Stack Developer &amp; CS Student
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            I build modern, responsive web applications that turn ideas
            into real-world solutions. Passionate about full-stack
            development, I enjoy creating intuitive user experiences and
            exploring technologies like React, Node.js, and MongoDB.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              <Send size={17} />
              View My Work
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-gray-500 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
            >
              <Mail size={17} />
              Get In Touch
            </a>

          </div>

        </div>

        {/* RIGHT SIDE: PORTRAIT AND RINGS */}
        <div className="relative flex h-[350px] w-full max-w-[350px] shrink-0 items-end justify-center sm:h-[420px] sm:max-w-[400px] md:h-[420px] md:max-w-[380px] lg:h-[500px] lg:max-w-[480px]">

          {/* OUTER BLUE RING */}
          <div
            className="absolute left-1/2 top-[45%] h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500/80 shadow-[0_0_18px_rgba(59,130,246,0.2)]"
            aria-hidden="true"
          />

          {/* PURPLE RING */}
          <div
            className="absolute left-[49%] top-[45%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-500/70"
            aria-hidden="true"
          />

          {/* OFFSET BLUE RING */}
          <div
            className="absolute left-[51%] top-[47%] h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/40"
            aria-hidden="true"
          />

          {/* PROFILE IMAGE */}
          <img
            src="/images/myprofile.png"
            alt="Kuladeep profile portrait"
            className="relative z-10 h-full w-full object-contain object-bottom"
          />

          {/* ANNOTATION */}
          <div className="absolute -right-1 top-8 z-20 rotate-[-8deg] text-blue-400 sm:right-0 sm:top-10">

            <p className="font-mono text-xs italic leading-5 sm:text-sm sm:leading-6">
              Turning
              <br />
              ideas into
              <br />
              products
              <br />
              &lt;/&gt;
            </p>

            {/* CURVED ARROW */}
            <svg
              width="75"
              height="65"
              viewBox="0 0 75 65"
              fill="none"
              className="ml-[-8px] mt-1"
              aria-hidden="true"
            >
              <path
                d="M65 3 C64 28 48 42 13 53"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M24 43 L13 53 L28 55"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;