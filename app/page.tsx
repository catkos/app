"use client";
import ProjectGrid from "./Components/ProjectGrid";
import Connect from "./Components/Connect";
import ProjectCarousel from "./Components/ProjectCarousel";
import { projectInfo } from "./data/arrays";
import { useRef } from "react";

export default function Home() {
  const sectionProjects = useRef(null);
  return (
    <>
      <main className="grid-bg wrapper p-10 flex flex-col gap-10">
        <section ref={sectionProjects} className="">
          <h2>Projects</h2>
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
