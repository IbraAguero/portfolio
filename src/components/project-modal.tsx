import { useEffect, useRef } from "react";
import {
  Github,
  Link,
  X,
  Lightbulb,
  Zap,
  Trophy,
  Images,
} from "lucide-react";
import type { Project } from "../types/project";
import ImageGallery from "./image-gallery";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm modal-backdrop-enter" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-zinc-900 border border-zinc-700/50 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 modal-enter"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-full transition-colors backdrop-blur-sm cursor-pointer"
        >
          <X width={18} height={18} />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[90vh] modal-scrollbar">
          {/* Hero image */}
          <div className="relative w-full aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6 -mt-12 relative">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              {project.title}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-xs py-1 px-2.5 rounded-full flex items-center gap-1.5 ${tag.class}`}
                >
                  <img src={tag.icon} alt="" className="size-4" />
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-zinc-300 leading-relaxed text-base">
              {project.longDescription}
            </p>

            {/* Sub-projects */}
            {project.subProjects && project.subProjects.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-zinc-100">
                  <div className="p-1.5 bg-purple-500/10 rounded-lg">
                    <Zap
                      width={18}
                      height={18}
                      className="text-purple-400"
                    />
                  </div>
                  Trabajos Realizados
                </h3>
                <div className="space-y-4">
                  {project.subProjects.map((sub, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-zinc-700/50 bg-zinc-800/30 overflow-hidden"
                    >
                      <div className="p-4 space-y-3">
                        <h4 className="font-semibold flex items-center gap-2 text-zinc-100">
                          <span className="text-lg">{sub.icon}</span>
                          {sub.title}
                        </h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {sub.description}
                        </p>
                        {sub.images && sub.images.length > 0 && (
                          <ImageGallery images={sub.images} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* General gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="p-1.5 bg-violet-500/10 rounded-lg">
                    <Images
                      width={18}
                      height={18}
                      className="text-violet-400"
                    />
                  </div>
                  Galería
                </h3>
                <ImageGallery images={project.gallery} />
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="p-1.5 bg-emerald-500/10 rounded-lg">
                    <Zap
                      width={18}
                      height={18}
                      className="text-emerald-400"
                    />
                  </div>
                  Funcionalidades Principales
                </h3>
                <ul className="space-y-2 ml-1">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="p-1.5 bg-amber-500/10 rounded-lg">
                    <Lightbulb
                      width={18}
                      height={18}
                      className="text-amber-400"
                    />
                  </div>
                  Desafíos y Problemáticas
                </h3>
                <ul className="space-y-2 ml-1">
                  {project.challenges.map((challenge, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Learnings */}
            {project.learnings && project.learnings.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg">
                    <Trophy
                      width={18}
                      height={18}
                      className="text-blue-400"
                    />
                  </div>
                  Aprendizajes
                </h3>
                <ul className="space-y-2 ml-1">
                  {project.learnings.map((learning, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-3 pt-2 pb-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 hover:bg-zinc-700 py-2.5 px-5 text-sm font-medium border border-zinc-600/50 rounded-xl flex gap-2 items-center transition-colors"
                >
                  <Github width={18} height={18} />
                  Ver Código
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 py-2.5 px-5 text-sm font-medium rounded-xl flex gap-2 items-center transition-colors"
              >
                <Link width={18} height={18} />
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
