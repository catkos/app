// not in use, old

"use client";

import React, { useRef } from "react";
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

const ProjectCarousel: React.FC<ProjectGridProps> = ({ projects }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollAmount = 400;

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === "left") {
      if (scrollLeft === 0) {
        // Loop to end
        container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    } else {
      if (scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        // Loop to start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative w-full h-[500px]">
      {/* Arrows */}
      <button
        onClick={() => handleScroll("left")}
        className="cursor-pointer z-10 absolute -left-10 top-0 bottom-0 m-auto h-20 w-20 rounded-full drop-shadow-2xl ring-1 ring-black/5 bg-primary-red/50 backdrop-filter backdrop-blur-sm transition delay-150 duration-300 ease-in-out hover:bg-primary-red/80"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="p-5"
        >
          <path
            fillRule="evenodd"
            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="cursor-pointer z-10 absolute -right-10 top-0 bottom-0 m-auto h-20 w-20 rounded-full drop-shadow-2xl ring-1 ring-black/5 bg-primary-red/50 backdrop-filter backdrop-blur-sm transition delay-150 duration-300 ease-in-out hover:bg-primary-red/80"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="p-5"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Carousel container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth h-full"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-full flex-shrink-0 w-full sm:w-[calc(100vw/3-1.5rem)]
              bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden scroll-snap-align-start"
          >
            <div className="relative h-1/2">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col h-1/2">
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
              <p className="pb-3 grow">{project.description}</p>
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
    </div>
  );
};

export default ProjectCarousel;
