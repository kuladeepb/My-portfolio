import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiCplusplus
} from "react-icons/si";

function Skills() {

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-800" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-600" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" }
  ];

  return (
    <section
      id="skills"
      className="w-full bg-gray-100 px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16"
    >

      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-10 text-center sm:mb-12">

          <p className="mb-3 text-sm font-semibold tracking-wider text-blue-600">
            MY SKILLS
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Technologies and tools I use to build modern web applications,
            solve problems and turn ideas into practical solutions.
          </p>

        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="group flex min-h-[125px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:min-h-[145px] sm:gap-4 sm:p-6"
            >

              {/* SKILL ICON */}
              <div
                className={`text-3xl sm:text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}
              >
                {skill.icon}
              </div>

              {/* SKILL NAME */}
              <h3 className="text-center text-xs font-semibold text-gray-800 sm:text-sm">
                {skill.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;