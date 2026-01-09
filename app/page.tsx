"use client";
import ProjectGrid from "./Components/ProjectGrid";
import Connect from "./Components/Connect";
import { projectInfo } from "./data/arrays";
import { useRef } from "react";

export default function Home() {
  const sectionProjects = useRef(null);
  return (
    <>
      <main className="grid-bg wrapper p-10 flex flex-col gap-10 w-full items-center justify-center">
        <section ref={sectionProjects} className="w-full lg:w-5/6">
          <div className="p-5 bg-linear-to-r from-black to-90% md:to-70% to-black/0 my-5 rounded-lg flex flex-row items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 256 256"
              className="rotate-45 text-primary-red motion-safe:animate-spin"
            >
              <path
                fill="currentColor"
                d="M240 128a15.79 15.79 0 0 1-10.5 15l-63.44 23.07L143 229.5a16 16 0 0 1-30 0l-23.06-63.44L26.5 143a16 16 0 0 1 0-30l63.44-23.06L113 26.5a16 16 0 0 1 30 0l23.07 63.44L229.5 113a15.79 15.79 0 0 1 10.5 15"
              ></path>
            </svg>
            <h2 className="text-avocado-100 text-4xl font-bold font-cutiveMono w-full bg-clip-text transparent">
              Projects
            </h2>
          </div>
          <ProjectGrid projects={projectInfo} />
        </section>
        <section className="py-32">
          <Connect />
        </section>
      </main>
      <div className="round-ani -z-10">
        <div className="green-ball"></div>
        <div className="red-ball"></div>
      </div>
    </>
  );
}
