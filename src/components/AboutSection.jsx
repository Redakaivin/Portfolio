import { Code, ChartSpline, Palette, Briefcase } from "lucide-react";
import profilePic from '../assets/Vinit img old.jpg'
import { NavLink, Outlet } from "react-router-dom";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-12 items-center">
          {/* image / intro */}
          <div className="space-y-6 flex flex-col items-center">
            <img src={profilePic} alt="" className="rounded-full w-[160px] h-[160px] object-cover text-center"/>
            <h3 className="text-2xl font-semibold">
              Web Developer
            </h3>

            <p className="text-muted-foreground">
              My approach is engineering-first — grounded in logic, driven by curiosity.
            </p>

            <p className="text-muted-foreground">
              From web development to mobile apps, NLP, and game-like systems, I enjoy breaking down ideas and turning them into clean, intuitive solutions. I've worked with Java, Python and modern web tools — and I'm always experimenting, learning, and improving. Whether it's a resume analyzer, a gaming tournament platform, or a simulation system, I focus on creating meaningful projects that solve real problems and help me grow as a developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <NavLink to="/contact" className="cosmic-button">
                Get In Touch
              </NavLink>

              <a
                href="/Vinit_Resume_OVERLEAF.pdf"
                className="px-2.5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

              <NavLink
                to={`/MoreAbout`}
                className="px-2.5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                More About Vinit
              </NavLink>
            </div>
          </div>

          {/* feature cards */}
          <div className="grid grid-cols-1 gap-8">
            <div className="gradient-border bg-glass p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border bg-glass p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Engineering</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive, aesthetic interfaces with an engineering-first approach to user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border bg-glass p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Driving projects from idea to execution with technical precision, creativity, and agile execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
};