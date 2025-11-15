import React from "react";
import { ExternalLink } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
export const Projects= () => {
  let projects = [
    {
      title: "Resume Analyzer",
      stack: "Python • NLP • Streamlit",
      desc: "Analyzes resumes using NLP, extracts key skills, compares them with job descriptions and generates a match score.",
      link: "#"
    },
    {
      title: "Gaming Tournament Platform",
      stack: "Flutter • Dart • Firebase",
      desc: "Mobile app for organizing and joining tournaments, including lobbies, admin panels and real-time match tracking.",
      link: "#"
    },
    {
      title: "Symbiote Life Simulator",
      stack: "C • Game Logic",
      desc: "Text-based simulation inspired by Venom. Dynamic branching decisions and stat mutation system.",
      link: "#"
    },
    {
      title: "MLBB Analyzer",
      stack: "Java • OOP",
      desc: "CLI tool that gives hero counter recommendations based on enemy draft and match data.",
      link: "#"
    },
    {
      title: "FakeKart",
      stack: "React • Bootstrap • CSS",
      desc: "A clean e-commerce UI built with React. Includes product listings, filtering, cart UI and responsive components.",
      link: "#"
    },
    {
      title: "FitTrack",
      stack: "JavaScript • HTML • CSS",
      desc: "Fitness tracking web app that calculates BMI, tracks water intake, and generates customized workout plans.",
      link: "#"
    },
    {
      title: "Music Player",
      stack: "React • Hooks • CSS",
      desc: "A modern music player with play/pause, next, previous, progress bar and song library.",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-neutral-950 text-slate-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 rounded-xl bg-secondary/30 bg-glass gradient-border shadow-lg 
                                        hover:scale-[1.02] transition-transform duration-300 card-hover">

              <h3 className="font-semibold text-xl mb-1">{project.title}</h3>
              <p className="text-xs text-primary mb-2">{project.stack}</p>

              <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
              >
                View Project <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
