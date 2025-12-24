import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

/* ===================== PROJECT DATA ===================== */

const projects = [
  {
    title: "Personal Portfolio Website",
    category: "Web Application",
    description:
      "A modern, responsive personal portfolio showcasing my skills, projects, and contact details.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "#ffc2c7",
    image: "port.png",
    githubUrl: "https://github.com/Deekshitha-089/Deekshitha-portfolio",
    liveUrl: "https://deekshitha-089.github.io/deekshitha-portfolio/",
  },

  {
    title: "Simple Calculator",
    category: "Web Application",
    description:
      "A simple and functional calculator built to strengthen my JavaScript logic and UI structuring skills.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#8fdde7",
    image: "calculator.png",
    githubUrl: "https://github.com/Deekshitha-089/calculator",
    liveUrl: "https://deekshitha-089.github.io/calculator/",
  },

  {
    title: "Amazon Web Clone",
    category: "Web Application",
    description:
      "A frontend clone inspired by Amazon, focusing on layout design, UI structure, and responsiveness.",
    tags: ["React", "CSS", "JavaScript"],
    color: "#fbe5c8",
    image: "amazon.png",
    githubUrl: "https://github.com/Deekshitha-089/amazon-clone",
    liveUrl: "https://amazon-clone..app",
  },
];

/* ===================== PROJECTS SECTION ===================== */

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#8fdde7] font-bold tracking-widest uppercase text-sm">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Recent Works
            </h2>
          </div>

          <a
            href="https://github.com/Deekshitha-089"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors"
          >
            VIEW GITHUB
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== PROJECT CARD ===================== */

function ProjectCard({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="group"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg aspect-[4/3]">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />

        {/* Overlay Buttons */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
              title="View Code"
            >
              <Github size={20} />
            </a>
          )}
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Info */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: project.color }}
          />
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
