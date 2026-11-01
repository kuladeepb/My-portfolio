import {
  GraduationCap,
  Code2,
  Lightbulb,
  Target
} from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="w-full bg-gray-200 px-6 py-16 sm:py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:gap-12 lg:flex-row lg:gap-16">

        {/* LEFT SIDE - ABOUT ME */}
        <div className="w-full lg:w-1/2">

          <h2 className="py-2 text-sm font-semibold tracking-wider text-blue-600">
            ABOUT ME
          </h2>

          <h3 className="py-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl sm:leading-10">
            Passionate about
            <br className="hidden sm:block" />
            building real-world solutions
          </h3>

          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            I'm a Computer Science Engineering student passionate about
            technology, software development, and problem-solving. I enjoy
            exploring new technologies and transforming creative ideas into
            practical applications. Currently, I'm strengthening my skills
            in full-stack development with React, Node.js, and MongoDB while
            working on projects that solve real-world problems.
          </p>

        </div>

        {/* RIGHT SIDE - INFORMATION CARD */}
        <div className="w-full rounded-2xl border border-slate-200 bg-gray-100 p-5 shadow-sm sm:p-8 lg:w-1/2">

          <div className="flex flex-col gap-7 sm:gap-8">

            {/* 1. EDUCATION */}
            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:h-12 sm:w-12">
                <GraduationCap size={24} className="text-blue-600" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                  Computer Science Student
                </h3>

                <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                  Learning, building and growing every day.
                </p>
              </div>

            </div>

            {/* 2. FULL STACK DEVELOPMENT */}
            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:h-12 sm:w-12">
                <Code2 size={24} className="text-blue-600" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                  Full Stack Development
                </h3>

                <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                  React, Node.js, MongoDB and more.
                </p>
              </div>

            </div>

            {/* 3. PROBLEM SOLVER */}
            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:h-12 sm:w-12">
                <Lightbulb size={24} className="text-blue-600" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                  Problem Solver
                </h3>

                <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                  Love turning complex ideas into simple solutions.
                </p>
              </div>

            </div>

            {/* 4. CAREER GOAL */}
            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:h-12 sm:w-12">
                <Target size={24} className="text-blue-600" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                  Career Goal
                </h3>

                <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                  Build impactful products and grow as a developer.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;