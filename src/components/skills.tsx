const tools = [
  {
    name: "Typescript",
    description: "Language",
    icon: "typescript-icon.svg",
  },

  {
    name: "NextJS",
    description: "React Framework",
    icon: "nextjs.svg",
  },
  {
    name: "React",
    description: "Framework",
    icon: "react-icon.svg",
  },
  {
    name: "Node.JS",
    description: "Web Server",
    icon: "node-js-icon.svg",
  },
  {
    name: "Express.JS",
    description: "Node Framework",
    icon: "express-icon.svg",
  },
  {
    name: "MongoDB",
    description: "Database",
    icon: "mongodb-icon.svg",
  },

  {
    name: "PostgreSQL",
    description: "Database",
    icon: "postgresql-icon.svg",
  },
  {
    name: "TailwindCSS",
    description: "CSS Framework",
    icon: "tailwind-icon.svg",
  },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20">
      <h3 className="text-3xl font-medium">Herramientas que uso</h3>
      <p className="text-zinc-400 font-medium">
        Estas son algunas de las herramientas que uso en mi dia a dia
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="ring-2 ring-inset ring-zinc-700 hover:bg-zinc-800 rounded-xl shadow-sm p-3 flex items-center gap-3 transition-colors group"
          >
            <div className="h-12 w-12 p-2 bg-zinc-700/50 rounded-lg group-hover:bg-zinc-900 overflow-hidden transition-colors">
              <img
                src={`./icons/${tool.icon}`}
                width={48}
                height={48}
                alt={`icon ${tool.name}`}
              />
            </div>
            <div>
              <h4>{tool.name}</h4>
              <p className="text-sm text-zinc-400">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
