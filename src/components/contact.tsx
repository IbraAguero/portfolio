import { Github, Instagram, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contacto"
      className="flex flex-col space-x-4 space-y-8 group sm:flex-row md:space-x-8 md:space-y-0 py-20"
    >
      <div className="w-full sm:w-1/2 flex-shrink-0 space-y-3">
        <h3 className="text-3xl font-medium">Contáctame</h3>
        <p className="text-zinc-400 text-sm font-medium">
          Estoy aquí para ayudarte con tus proyectos o responder cualquier
          pregunta. ¡No dudes en contactarme!
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/IbraAguero"
            target="_blank"
            className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
            aria-label="Github"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ibrahim-aguero/"
            target="_blank"
            className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/ibra.aguero/"
            target="_blank"
            className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
      <form
        className="space-y-4"
        action="https://getform.io/f/broodqpa"
        method="POST"
      >
        <div className="flex gap-4">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              className="border text-sm rounded-lg block w-full p-2.5 bg-zinc-800 border-zinc-600 placeholder-zinc-400 text-white    "
              placeholder="Juan Perez"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-white"
            >
              Correo
            </label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              className="border text-sm rounded-lg block w-full p-2.5 bg-zinc-800 border-zinc-600 placeholder-zinc-400 text-white    "
              placeholder="juan@gmail.com"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            autoComplete="off"
            className="resize-none p-2.5 w-full text-sm rounded-lg border border-zinc-600 bg-zinc-800 placeholder-zinc-400"
            placeholder="Hola..."
          ></textarea>
          <button
            type="submit"
            className="font-medium p-1 w-full mt-4 rounded-lg bg-zinc-800 hover:bg-zinc-800/70 transition-colors cursor-pointer"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
export default Contact;
