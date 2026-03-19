const experiences = [
  {
    role: "Desarrollador Full Stack y Diseñador",
    company: "Asociación Civil Santiagueña de Powerlifting, ACISAP",
    period: "2025 — Actualidad",
    description:
      "Desarrollo de la página web institucional, herramienta de gestión de torneos en tiempo real y rebranding completo de la institución.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    role: "Programador FullStack",
    company: "Ministerio de Desarrollo Social de Santiago del Estero",
    period: "2022 — 2023",
    description:
      "Desarrollé junto a un equipo una aplicación para la gestión y control del parque informático del ministerio.",
    tags: ["React", "Node.js", "Java", "TypeScript", "PostgreSQL"],
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20">
      <h3 className="text-3xl font-medium">Experiencia</h3>
      <p className="text-zinc-400 font-medium">Mi trayectoria profesional</p>

      <div className="mt-8 flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="relative flex gap-5 p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all duration-300 group"
          >
            {/* Left accent bar */}
            <div className="hidden sm:flex flex-col items-center shrink-0">
              <div className="w-3 h-3 rounded-full bg-zinc-400 group-hover:bg-white mt-1.5 transition-colors duration-300 ring-4 ring-zinc-900" />
              <div className="w-px flex-1 bg-zinc-700 mt-2" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h4 className="font-semibold text-white text-base leading-tight">
                    {exp.role}
                  </h4>
                  <p className="text-zinc-400 text-sm font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs text-zinc-500 font-mono bg-zinc-800 px-2.5 py-1 rounded-full self-start sm:self-auto whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
