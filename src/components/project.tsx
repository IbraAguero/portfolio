import { Github, Link } from "lucide-react";

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
  github?: string;
  tags: {
    name: string;
    class: string;
    icon: string;
  }[];
};

const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: "/icons/nextjs-icon.svg",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: "/icons/tailwind-icon.svg",
  },
  PRISMA: {
    name: "PostgreSQL",
    class: "bg-[#4f6e86] text-white",
    icon: "/icons/postgresql-icon.svg",
  },
  DRIZZLE: {
    name: "DrizzleORM",
    class: "bg-[#1a1a1a] text-white",
    icon: "/icons/drizzle-icon.svg",
  },
};

const PROJECTS: Project[] = [
  {
    title: "TurnosMedicos - Gestiona los turnos, pacientes y cobros",
    description:
      "Plataforma SaaS para organizar turnos, historiales clínicos y pagos online con Mercado Pago. Emite links de pago, gestion de suscripciones.",
    link: "https://turnos-medicos.com/",
    image: "/projects/project-1.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.PRISMA],
  },
  {
    title: "MisFinanzas - Lleva el control de tus ingresos y gastos",
    description:
      "Una web muy simple para llevar el control de los gastos e ingresos en tus diferentes billeteras.",
    link: "https://mis-finanzas-ibra.vercel.app/",
    github: "https://github.com/IbraAguero/mis-finanzas",
    image: "/projects/mis-finanzas.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.DRIZZLE],
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="grid place-content-center py-20">
      <h3 className="text-3xl font-medium">Proyectos</h3>
      <p className="text-zinc-400 font-medium">
        Estos son algunos de mis proyectos mas destacados
      </p>
      <div className="flex flex-col gap-y-20 pt-8">
        {PROJECTS.map((el) => (
          <article
            className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
            key={el.title}
          >
            <div className="w-full md:w-1/2 aspect-video flex-shrink-0">
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-lg transition duration-500 ease-in-out">
                <img
                  src={el.image}
                  alt={el.title}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <h3 className="text-2xl font-bold">{el.title}</h3>
              <ul className="flex gap-1.5">
                {el.tags.map((tag) => (
                  <li
                    key={tag.name}
                    className={`text-xs p-0.5 px-1.5 rounded-3xl flex items-center gap-1 ${tag.class}`}
                  >
                    <div className="size-4.5">
                      <img src={tag.icon} alt="" />
                    </div>
                    {tag.name}
                  </li>
                ))}
              </ul>
              <p className="flex-1 text-zinc-400">{el.description}</p>
              <div className="flex gap-2">
                {el.github && (
                  <a
                    href={el.github}
                    target="_blank"
                    className="bg-zinc-800 hover:bg-zinc-800/80 p-2 px-3 text-sm border rounded-lg flex gap-1 items-center transition-opacity"
                  >
                    <Github width={16} height={16} className="" />
                    Code
                  </a>
                )}
                <a
                  target="_blank"
                  href={el.link}
                  className="bg-zinc-800 hover:bg-zinc-800/80 p-2 px-3 text-sm border rounded-lg flex gap-1 items-center transition-opacity"
                >
                  <Link width={16} height={16} className="" />
                  Preview
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Projects;
