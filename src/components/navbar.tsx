import { useEffect, useState } from "react";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Contacto", href: "#contacto" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-950/60 backdrop-blur-md" : "bg-transparent"
      } rounded-full py-2 px-8`}
    >
      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="font-medium text-zinc-200 hover:text-white transition-colors"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
export default Navbar;

/* function Navbar() {
  return (
    <header className="py-6 fixed top-0 text-gray-200">
      <nav className="w-full flex items-center justify-center gap-x-8 font-bold transition-all">
        <a className="hover:underline cursor-pointer">Experiencia</a>
        <a className="hover:underline cursor-pointer">Proyectos</a>
        <a className="hover:underline cursor-pointer">Habilidades</a>
        <a className="hover:underline cursor-pointer">Contacto</a>
      </nav>
    </header>
  );
}
export default Navbar; */
