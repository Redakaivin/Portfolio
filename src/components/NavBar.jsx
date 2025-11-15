import React from "react";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // Common classes for ALL nav items (anchor or NavLink)
  const baseClass =
    "group relative flex flex-col justify-center items-center text-sm text-white";

  return (
    <div className="w-full h-full relative">
      <div
        className="flex fixed top-10 inset-x-0 mx-auto z-[5000]
        max-w-fit md:min-w-[70vw] lg:min-w-fit
        px-10 py-5 rounded-lg
        shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
        items-center justify-center space-x-4 bg-glass gradient-border"
      >

        {/* Home */}
        <a href="#hero" className={baseClass}>
          Home
          <div className="underline-hover" />
        </a>

        {/* About */}
        <a href="#about" className={baseClass}>
          About
          <div className="underline-hover" />
        </a>

        {/* Projects (React Router link) */}
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            baseClass + (isActive ? " opacity-100" : "")
          }
        >
          Projects
          <div className="underline-hover" />
        </NavLink>

        {/* Skills */}
        <a href="#skills" className={baseClass}>
          Skills
          <div className="underline-hover" />
        </a>
      </div>

      {/* Theme Toggle */}
      <div className="fixed gradient-border sm:top-12 sm:right-12 bottom-8 right-8 z-[6000] w-12 h-12 bg-glass rounded-full flex items-center justify-center">
        <ThemeToggle />
      </div>

      {/* Underline hover style */}
      <style>{`
        .underline-hover {
          width: 0;
          opacity: 0;
          padding: 0.65px;
          border-radius: 8px;
          background: white;
          transition: all 300ms ease-in-out;
        }
        .group:hover .underline-hover {
          width: 100%;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
