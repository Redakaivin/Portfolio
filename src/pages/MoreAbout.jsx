import React from "react";
import profilePic from "../assets/Vinit img old.jpg";
import { Download } from "lucide-react";
import { Github } from "lucide-react";
export default function MoreAbout() {
  return (
    <section className="py-20 px-4 bg-neutral-900 text-slate-100">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
          <img
            src={profilePic}
            alt="Vinit Sawant"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-primary"
          />

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              More about <span className="text-primary">Vinit Sawant</span>
            </h1>

            <p className="text-muted-foreground max-w-xl">
              I'm someone who enjoys blending engineering logic with creativity.  
              Whether it's front-end experiences, mobile apps, or AI/NLP tools,
              I like breaking ideas down, understanding them deeply, and turning
              them into clean, intentional solutions.
            </p>

            <div className="mt-4 flex gap-3 flex-wrap">
              <a
                href="/resume.pdf"
                download="Vinit-Sawant-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>

              <a
                href="https://github.com/Redakaivin"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800 transition"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800 transition"
              >
                Say Hi
              </a>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left Column */}
          <div className="space-y-6">

            <Card title="How I Think">
              I break things down to fundamentals — understand → simplify →
              build better.  
              I learn by experimenting, iterating, and refining until it feels
              clean, efficient, and meaningful.
            </Card>


            <Card title="What I'm Improving">
              Leveling up React & full-stack patterns, improving machine learning
              fundamentals, and building systems that combine UI, logic, and data.
            </Card>

          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-6">

            <Card title="What I Like Building">
              I enjoy working on projects that feel alive — things that react,
              calculate, analyze, recommend, or visualize something.  
              I like blending data, logic, and interaction into simple, useful
              experiences.
            </Card>

            <Card title="Technologies I Work With">
              <div className="grid sm:grid-cols-2 gap-3">
                <Skill name="Java (Core & Spring)" pct={85} />
                <Skill name="React / Front-end" pct={80} />
                <Skill name="Python (pandas, NLP)" pct={75} />
                <Skill name="Flutter / Dart" pct={70} />
                <Skill name="C / Systems" pct={60} />
                <Skill name="Data Visualization" pct={65} />
              </div>
            </Card>

            <Card title="What's Next">
              More full-stack apps, better UI/UX work, and turning my simulation
              ideas into something interactive on the web.
            </Card>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-3">
            Want to collaborate or chat about tech, lifting, mindset, or ideas?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-primary text-black font-semibold hover:opacity-90 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="p-6 rounded-xl bg-glass gradient-border">
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <div className="text-muted-foreground text-sm">{children}</div>
    </div>
  );
}

function Skill({ name, pct }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <span>{name}</span>
        <span className="text-sm">{pct}%</span>
      </div>
      <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        ></div>
      </div>
    </div>
  );
}
