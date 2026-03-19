import { useState } from "react";
import { Github, Link, Eye } from "lucide-react";
import ProjectModal from "./project-modal";
import type { Project } from "../types/project";

const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: "/icons/nextjs-icon.svg",
  },
  REACT: {
    name: "React",
    class: "bg-[#1a1a2e] text-[#61dafb]",
    icon: "/icons/react-icon.svg",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: "/icons/tailwind-icon.svg",
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    class: "bg-[#4f6e86] text-white",
    icon: "/icons/postgresql-icon.svg",
  },
  DRIZZLE: {
    name: "DrizzleORM",
    class: "bg-[#1a1a1a] text-white",
    icon: "/icons/drizzle-icon.svg",
  },
  NODE: {
    name: "Node.js",
    class: "bg-[#1a2e1a] text-[#68a063]",
    icon: "/icons/node-js-icon.svg",
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#1a1a3e] text-[#3178c6]",
    icon: "/icons/typescript-icon.svg",
  },
  MONGODB: {
    name: "MongoDB",
    class: "bg-[#1a2e1a] text-[#4db33d]",
    icon: "/icons/mongodb-icon.svg",
  },
  JAVA: {
    name: "Java",
    class: "bg-[#2e1a1a] text-[#f89820]",
    icon: "/icons/java-icon.svg",
  },
  SPRING: {
    name: "Spring Boot",
    class: "bg-[#1a2e1a] text-[#6db33f]",
    icon: "/icons/spring-boot-icon.svg",
  },
  HIBERNATE: {
    name: "Hibernate",
    class: "bg-[#2b2b1a] text-[#bcae79]",
    icon: "/icons/hibernate-icon.svg",
  },
};

const PROJECTS: Project[] = [
  {
    title: "ACISAP — Trabajo Integral",
    description:
      "Página web institucional, herramienta de gestión de torneos en tiempo real y rebranding completo de la institución.",
    longDescription:
      "Proyecto integral para ACISAP (Asociación) que abarcó múltiples áreas: desarrollo de la página web institucional, creación de una herramienta de gestión de torneos con sistema de luces para jueces y visualización en tiempo real vía OBS, y un rebranding completo de la marca con nuevo logo, flyers, remeras, banners y material gráfico.",
    link: "#",
    image: "/projects/logo-acisap.webp",
    tags: [TAGS.NEXT, TAGS.NODE, TAGS.TYPESCRIPT, TAGS.TAILWIND],
    subProjects: [
      {
        icon: "🌐",
        title: "Página Web Institucional",
        description:
          "Diseño y desarrollo de la página web oficial de ACISAP. Incluye información institucional, records regionales, calendario de eventos, galería de fotos y formulario de contacto. Diseño responsive y optimizado para SEO.",
        images: [
          {
            src: "/projects/pagina-acisap.webp",
            alt: "Página principal de ACISAP",
          },
          {
            src: "/projects/record-acisap.webp",
            alt: "Records de ACISAP",
          },
        ],
      },
      {
        icon: "⚡",
        title: "Herramienta de Gestión de Torneos",
        description:
          "Sistema completo para la gestión automatizada de torneos. Manejo de atletas, sistema de luces para jueces con votación en tiempo real, control centralizado y visualización en vivo integrable con OBS para transmisiones. Los jueces votan desde sus dispositivos y los resultados se muestran instantáneamente en pantalla, sistema para los cargadores, overlay para el stream en OBS.",
        images: [
          {
            src: "/projects/herramienta-competencia.webp",
            alt: "Panel de control del torneo",
          },
          {
            src: "/projects/herramienta-cargadores.webp",
            alt: "Panel de cargadores",
          },
          {
            src: "/projects/control-juez.webp",
            alt: "Panel de control del juez",
          },
          {
            src: "/projects/luces-pantalla.webp",
            alt: "Luces en pantalla",
          },
          {
            src: "/projects/overlay-obs.webp",
            alt: "Overlay para OBS",
          },
          {
            src: "/projects/uso-torneo.webp",
            alt: "Uso en torneo",
          },
        ],
      },
      {
        icon: "🎨",
        title: "Rebranding Completo",
        description:
          "Rediseño integral de la identidad visual de ACISAP. Creación de nuevo logo, manual de marca, diseño de flyers para eventos, remeras oficiales, banners para redes sociales y material gráfico para torneos.",
        images: [
          {
            src: "/projects/logos-acisap.webp",
            alt: "Nuevo logo de ACISAP",
          },
          {
            src: "/projects/flyer-acisap.webp",
            alt: "Flyer de ACISAP",
          },
          {
            src: "/projects/remeras-torneo.webp",
            alt: "Remeras de ACISAP",
          },
          {
            src: "/projects/atleta-confirmado.webp",
            alt: "Atleta confirmado",
          },
          {
            src: "/projects/flyer-principal.webp",
            alt: "Flyer principal",
          },
          {
            src: "/projects/banner.webp",
            alt: "Banner de torneo",
          },
        ],
      },
    ],
    challenges: [
      "Lograr la sincronización en tiempo real del sistema de luces entre múltiples dispositivos de jueces",
      "Integrar la visualización del sistema de torneos con OBS para transmisiones en vivo",
      "Mantener coherencia visual en todo el material gráfico del rebranding",
      "Diseñar una UX intuitiva para jueces que usan el sistema en condiciones de torneo bajo presión",
    ],
    learnings: [
      "Aprendí a trabajar con WebSockets para comunicación en tiempo real entre múltiples dispositivos",
      "Desarrollé habilidades de diseño gráfico y branding aplicadas a una institución real",
      "Mejoré mi capacidad de gestionar un proyecto integral que abarca desarrollo web, software y diseño",
    ],
  },
  {
    title: "3Luces",
    description:
      "Sistema para la gestión y visualizacion de las desiciones de los jueces en torneos de powerlifting.",
    longDescription:
      "3Luces es una plataforma SaaS diseñada para simplificar y profesionalizar el sistema de jueces en competencias de powerlifting. Permite mostrar en tiempo real el estado de la competencia en pantallas (las luces y un temporizador), facilitando la experiencia tanto para jueces, como el público. El sistema está pensado para funcionar con cualquier dispositivo conectado a internet, incluyendo Smart TVs, computadoras o incluso mediante datos móviles compartidos. Además, ofrece una interfaz moderna, rápida y fácil de usar, enfocada en eventos en vivo.",
    link: "https://3luces.vercel.app",
    image: "/projects/3luces.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.POSTGRESQL],
    features: [
      "Visualización en tiempo real de los veredictos de los jueces",
      "Pantalla optimizada para proyectar en televisores o displays de eventos",
      "Actualización en vivo mediante sockets para reflejar cambios instantáneamente",
      "Interfaz simple para jueces",
      "Compatible con cualquier dispositivo con navegador (Smart TV, PC, tablet)",
      "Funciona con conexión WiFi o datos móviles compartidos",
      "Diseño enfocado en legibilidad a distancia (eventos en vivo)",
    ],
    challenges: [
      "Implementar sincronización en tiempo real confiable usando WebSockets",
      "Garantizar consistencia de estado en tiempo real entre múltiples dispositivos, minimizando problemas de latencia y desincronización",
      "Optimizar la visualización para pantallas grandes manteniendo claridad y jerarquía visual",
      "Manejar estados concurrentes de múltiples usuarios (jueces/operadores)",
      "Garantizar bajo consumo de red para eventos con conexiones inestables",
    ],
    learnings: [
      "Profundicé en el uso de WebSockets para aplicaciones en tiempo real",
      "Aprendí a diseñar interfaces enfocadas en eventos en vivo y lectura a distancia",
      "Mejoré la gestión de estado compartido entre múltiples clientes",
      "Optimicé rendimiento en apps críticas donde cada segundo importa",
      "Desarrollé criterio UX orientado a velocidad y simplicidad operativa",
    ],
  },
  {
    title: "TurnosMedicos",
    description:
      "Plataforma SaaS para organizar turnos, historiales clínicos y pagos online con Mercado Pago.",
    longDescription:
      "Plataforma SaaS completa diseñada para profesionales de la salud que necesitan gestionar su consultorio de forma eficiente. Permite organizar turnos con un calendario interactivo, mantener historiales clínicos digitales de cada paciente, y procesar pagos online integrados con Mercado Pago. Incluye generación de links de pago, gestión de suscripciones y notificaciones automáticas.",
    link: "https://turnos-medicos.vercel.app/",
    image: "/projects/project-1.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.POSTGRESQL],
    features: [
      "Calendario interactivo para gestión de turnos con vista diaria, semanal y mensual",
      "Historial clínico digital por paciente con notas y archivos adjuntos",
      "Integración con Mercado Pago para cobros online y suscripciones",
      "Generación de links de pago compartibles por WhatsApp o email",
      "Sistema de notificaciones automáticas por email para recordatorios de turnos",
    ],
    challenges: [
      "Integrar la API de Mercado Pago para manejar pagos recurrentes y suscripciones con webhooks",
      "Diseñar un esquema de base de datos flexible para soportar múltiples profesionales con distintas especialidades",
      "Implementar un calendario que maneje correctamente zonas horarias y disponibilidad dinámica",
    ],
    learnings: [
      "Profundicé en la integración de pasarelas de pago y manejo de webhooks en producción",
      "Aprendí a diseñar sistemas multi-tenant con aislamiento de datos por profesional",
      "Mejoré mis habilidades en UX para flujos de agendamiento complejos",
    ],
  },
  {
    title: "MisFinanzas",
    description:
      "Web para llevar el control de gastos e ingresos en diferentes billeteras.",
    longDescription:
      "Una aplicación web diseñada para el control personal de finanzas. Permite registrar gastos e ingresos categorizados en diferentes billeteras (efectivo, banco, crypto, etc.), visualizar estadísticas con gráficos interactivos y llevar un seguimiento detallado de tus movimientos financieros mes a mes.",
    link: "https://mis-finanzas-ibra.vercel.app/",
    github: "https://github.com/IbraAguero/mis-finanzas",
    image: "/projects/mis-finanzas.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.DRIZZLE],
    features: [
      "Registro de ingresos y gastos con categorías personalizables",
      "Soporte para múltiples billeteras (efectivo, banco, crypto)",
      "Gráficos interactivos para visualización de estadísticas mensuales",
      "Filtros avanzados por fecha, categoría y billetera",
    ],
    challenges: [
      "Implementar DrizzleORM como alternativa ligera a Prisma y aprender su sistema de migraciones",
      "Diseñar una interfaz intuitiva que muestre datos financieros complejos de forma simple",
    ],
    learnings: [
      "Aprendí a usar DrizzleORM y su enfoque type-safe para consultas SQL",
      "Mejoré en el diseño de dashboards con visualización de datos",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <>
      <section id="proyectos" className="py-20">
        <h3 className="text-3xl font-medium">Proyectos</h3>
        <p className="text-zinc-400 font-medium">
          Estos son algunos de mis proyectos mas destacados
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-600/50 hover:shadow-lg hover:shadow-zinc-900/50"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h4 className="text-lg font-bold leading-snug">
                  {project.title}
                </h4>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`text-[11px] py-0.5 px-2 rounded-full flex items-center gap-1 ${tag.class}`}
                    >
                      <img src={tag.icon} alt="" className="size-3.5" />
                      {tag.name}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-zinc-400 line-clamp-2">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 bg-zinc-800 hover:bg-zinc-700 py-2 px-3 text-sm font-medium rounded-lg flex gap-1.5 items-center justify-center transition-colors cursor-pointer"
                  >
                    <Eye width={15} height={15} />
                    Ver más
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-800 hover:bg-zinc-700 py-2 px-3 text-sm rounded-lg flex gap-1.5 items-center transition-colors"
                    >
                      <Github width={15} height={15} />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-zinc-700 py-2 px-3 text-sm rounded-lg flex gap-1.5 items-center transition-colors"
                  >
                    <Link width={15} height={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Projects;
