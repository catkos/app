"use client";
import ProjectGrid from "./Components/ProjectGrid";
import Connect from "./Components/Connect";
import { projectInfo } from "./data/arrays";
import { useRef } from "react";

export default function Home() {
  const sectionProjects = useRef(null);
  return (
    <>
      <main className="grid-bg wrapper p-10 flex flex-col gap-10 w-full items-center">
        <section ref={sectionProjects} className="w-full lg:w-5/6">
          <div className="p-5 shadow-lg bg-linear-to-r from-black to-black/60 my-5 rounded-lg">
            <h2 className="text-5xl text-center md:text-left font-bold uppercase font-cutiveMono w-full">
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
