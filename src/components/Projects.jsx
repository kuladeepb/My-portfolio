
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const scrollRef = useRef(null);
  const baseUrl = import.meta.env.BASE_URL;

  const projects = [
    {
      title: "AV Forensics",
      description:
        "A project focused on audio and video forensics, exploring techniques for analyzing and examining digital multimedia content.",
      image: `${baseUrl}images/av-forensics.png`,
      technologies: ["Python", "Machine Learning", "Digital Forensics"],
      github: "https://github.com/kuladeepb",
    },
    {
      title: "Plant Pulse",
      description:
        "A plant monitoring project designed to explore smart technology solutions for plant care and monitoring.",
      image: `${baseUrl}images/plant-pulse.png`,
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/kuladeepb",
    },
    {
      title: "Expense Tracker",
      description:
        "A web application designed to help users manage expenses, monitor spending, and maintain better financial records.",
      image: `${baseUrl}images/expense-tracker.png`,
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/kuladeepb",
    },
    {
      title: "Developer Portfolio",
      description:
        "A personal developer portfolio showcasing my technical skills, projects, and development journey with a responsive interface.",
      image: `${baseUrl}images/portfolio.png`,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/kuladeepb/My-portfolio",
      live: "https://kuladeep-portfolio-ten.vercel.app/",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 370;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* SECTION HEADING */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold tracking-widest text-sm mb-3">
            MY WORK
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Featured Projects
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my
            development skills and passion for building applications.
          </p>
        </div>

        {/* SCROLL BUTTONS */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll projects left"
            className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll projects right"
            className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* PROJECT CARDS */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[85vw] max-w-[340px] sm:min-w-[340px] bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 snap-center"
            >
              {/* PROJECT IMAGE */}
              <div className="h-52 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    console.error(
                      `Failed to load project image: ${project.image}`
                    );
                  }}
                />
              </div>

              {/* PROJECT CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6 mb-5">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* PROJECT LINKS */}
                <div className="flex items-center gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 hover:text-blue-600 font-semibold text-sm transition"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition"
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EXPLORE MORE */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/kuladeepb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0B1120] text-white px-7 py-3 rounded-full hover:bg-blue-600 transition duration-300 font-semibold"
          >
            <Github size={19} />
            Explore More on GitHub
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
