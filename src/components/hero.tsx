import { Download, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="max-w-6xl mx-auto pt-28">
      <div className="flex justify-center w-full sm:justify-between items-center">
        <div className="space-y-1 max-w-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 relative bg-emerald-400 rounded-full">
              <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></span>
            </span>
            <p className="text-zinc-400 font-semibold text-sm tracking-wide">
              Disponible para trabajar
            </p>
          </div>
          <h2 className="text-4xl font-extrabold">
            Hola soy Ibrahim, Desarrollador FullStack
          </h2>
          <div className="flex gap-2 pt-3">
            <a
              href="https://drive.google.com/file/d/1DXHPoM_4TcStXAcfyp7dJhq_KqJJ4Lel/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-500/50 p-1 px-3 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              Descargar CV
              <Download width={17} height={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahim-aguero/"
              target="_blank"
              className="border-white border-2 p-1 rounded-lg text-sm font-bold flex items-center gap-1 transition-colors cursor-pointer hover:bg-white hover:text-zinc-600"
            >
              <Linkedin width={18} height={18} />
            </a>
            <a
              href="https://github.com/IbraAguero"
              target="_blank"
              className="border-white border-2 p-1 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer hover:bg-white hover:text-zinc-600"
            >
              <Github width={18} height={18} />
            </a>
          </div>
        </div>
        <div className="relative hidden md:flex w-72 h-72 border-3 bg-zinc-800 rounded-full overflow-hidden shadow select-none pointer-events-none">
          <img
            src="/foto-perfil.png"
            alt="Persona"
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
