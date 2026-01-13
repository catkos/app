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
          <div className="my-5 relative">
            <div className="relative z-10 flex flex-row items-center justify-center gap-5 py-5 w-full text-center bg-black/30 ring-2 ring-black/20 rounded backdrop-blur-sm">
              <h2 className="text-avocado-100 text-4xl font-bold font-cutiveMono bg-clip-text transparent text-shadow-md">
                projects
              </h2>
            </div>
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
