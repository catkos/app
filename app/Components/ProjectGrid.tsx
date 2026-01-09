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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col w-full
            bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-filter backdrop-blur-sm rounded-lg
            transition-shadow duration-300 min-h-[500px]"
        >
          <div className="relative" style={{ height: 300 }}>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 flex flex-col flex-1">
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
            <p className="pb-3 flex">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
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
