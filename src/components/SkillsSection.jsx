import React, { useState } from "react";

const categories = ["All", "FullStack", "Java", "Python"];

const skills = [
  { name: "React", level: 80, category: "FullStack" },
  { name: "Node.js", level: 75, category: "FullStack" },
  { name: "MongoDB", level: 70, category: "FullStack" },
  { name: "Java Spring", level: 65, category: "Java" },
  { name: "Core Java", level: 85, category: "Java" },
  { name: "Python", level: 60, category: "Python" },

];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary/80 text-primary-foreground px-5 py-2 rounded-full transition-colors duration-300 capitalize"
                  : "bg-secondary/70 text-foreground hover:bg-secondary px-5 py-2 rounded-full transition-colors duration-300 capitalize"
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="bg-secondary/50 p-5 rounded-xl shadow">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
