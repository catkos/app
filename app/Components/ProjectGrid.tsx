import Image from "next/image";

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  demo?: string;
  image: {
    src: string;
    alt: string;
  };
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div
      className="flex gap-6 overflow-x-auto"
      style={{ width: "100%", scrollSnapType: "x mandatory" }}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full sm:w-[calc(100vw/3-1.5rem)]
            bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-filter backdrop-blur-sm rounded-lg
            transition-shadow duration-300 overflow-hidden scroll-snap-align-start"
        >
          <div className="relative" style={{ height: 300 }}>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 font-nata">
              {project.name}{" "}
              {project.demo && (
                <span className="underline text-sm uppercase">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (Demo)
                  </a>
                </span>
              )}
            </h3>
            <p className="pb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-avocado-100 text-gray-900 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
