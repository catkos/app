"use client";
import Header from "./Components/Header";
import ProjectGrid from "./Components/ProjectGrid";
import Connect from "./Components/Connect";

export default function Home() {
  const projectInfo = [
    {
      name: "Luontomaps",
      description:
        "A mapping application that helps users discover and explore natural locations in Helsinki.",
      techStack: ["JavaScript", "Leaflet", "Citynature API"],
      image: {
        src: "/projects/luontomaps_result2.png",
        alt: "Picture project called Luontomaps",
      },
    },
    {
      name: "ScriptWiz",
      demo: "https://scriptwiz.vercel.app/",
      description:
        "AI-powered movie script visualizer where you can get the most important parts from the script that matters to you.",
      techStack: [
        "Vite",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Firebase",
        "OpenAI API",
      ],
      image: {
        src: "/projects/moviescript_fb.png",
        alt: "Picture project called ScriptWiz",
      },
    },
    {
      name: "AI Pagebuilder",
      description:
        "Drag-and-drop website builder with AI-generated content and layouts",
      techStack: [
        "Vite",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "OpenAI API",
      ],
      image: {
        src: "/projects/aipagebuilder_fb.png",
        alt: "Picture project called AI Pagebuilder",
      },
    },
    {
      name: "OnlyCats",
      description:
        "Instagram style media sharing application for cat lovers. Upload, modify, comment, rate and search photos.",
      techStack: ["Vite", "React", "Material UI"],
      image: {
        src: "/projects/onlycats.png",
        alt: "Picture project called OnlyCats",
      },
    },
    {
      name: "Pistokkaat",
      description: "Front-End website for selling and buying plant cuttings.",
      techStack: ["JavaScript"],
      image: {
        src: "/projects/pistokkaat.png",
        alt: "Picture project called Pistokkaat",
      },
    },
    {
      name: "Book Club",
      demo: "https://ck-book-club.vercel.app/",
      description:
        "Your personal book library. Saves notes to user's local storage. In the future, going to build backend and users, etc...",
      techStack: ["Vite", "React", "TypeScript"],
      image: {
        src: "/projects/bookclub.png",
        alt: "Picture project called Book Club",
      },
    },
  ];

  return (
    <>
      <main className="grid-bg wrapper">
        <section>
          <Header />
        </section>
        <section className="flex flex-col justify-center items-center gap-20">
          <h2 className="font-nata text-6xl font-bold uppercase">Projects</h2>
          <div className="section-content w-full md:px-36 py-0">
            <ProjectGrid projects={projectInfo} />
          </div>
        </section>
        <section className="flex justify-center items-center">
          <Connect />
        </section>
      </main>
      <div className="round-ani">
        <div className="green-ball"></div>
        <div className="red-ball"></div>
      </div>

      <div className="white-ball"></div>
    </>
  );
}
