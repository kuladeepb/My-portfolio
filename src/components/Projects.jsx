import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";

function Projects() {
  const scrollRef = useRef(null);

  // Automatically handles GitHub Pages and Vercel paths
  const baseUrl = import.meta.env.BASE_URL;

  const projects = [
    {
      title: "AV Forensics",
      image: `${baseUrl}images/av-forensics.png`,
      description:
        "An audio and video forensics project focused on digital media analysis and examining multimedia content.",
      technologies: ["Python", "Digital Forensics"],
      github: "https://github.com/kuladeepb",
    },
    {
      title: "Plant Pulse",
      image: `${baseUrl}images/plant-pulse.png`,
      description:
        "A plant monitoring and management application designed to help users manage plant care and track plant-related information.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/kuladeepb",
    },
    {
      title: "Expense Tracker",
      image: `${baseUrl}images/expense-tracker.png`,
      description:
        "A personal finance application that helps users record expenses, track spending and manage their budgets.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/kuladeepb",
    },
    {
      title: "Developer Portfolio",
      image: `${baseUrl}images/portfolio.png`,
      description:
        "A personal developer portfolio showcasing my technical skills, projects and development journey.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/kuladeepb",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="w-full overflow-hidden bg-[#F8FAFC] px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="mb-3 text-sm font-semibold tracking-wider text-blue-600">
              MY PROJECTS
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Some of the projects I've built or am currently working on.
            </p>
          </div>

          {/* SCROLL BUTTONS */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => scroll("left")}
              aria-label="Scroll projects left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-gray-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Scroll projects right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-gray-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

        {/* HORIZONTAL PROJECT CARDS */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 sm:gap-6"
          style={{
            scrollbarWidth: "thin",
            WebkitOverflowScrolling: "touch",
          }}
        >

          {projects.map((project) => (

            <div
              key={project.title}
              className="w-[85vw] max-w-[340px] flex-none snap-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[340px] sm:snap-start"
            >

              {/* PROJECT IMAGE */}
              <div className="h-44 w-full overflow-hidden bg-slate-200 sm:h-48">

                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    console.error("Image failed to load:", project.image);
                  }}
                />

              </div>

              {/* PROJECT DETAILS */}
              <div className="flex min-h-[250px] flex-col p-5">

                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mb-5 min-h-[72px] text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                {/* TECHNOLOGY TAGS */}
                <div className="flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* GITHUB LINK */}
                <div className="mt-auto flex justify-end pt-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-gray-800 transition hover:text-blue-600"
                  >
                    <FaGithub size={21} />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* MORE PROJECTS */}
        <div className="mt-8 flex justify-center">

          <a
            href="https://github.com/kuladeepb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-blue-600 px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white sm:gap-3 sm:px-7 sm:text-base"
          >
            <FaGithub size={19} />
            Explore More on GitHub
            <ExternalLink size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;