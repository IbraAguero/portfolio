const About = () => {
  const birthDate = new Date(2002, 4, 28);
  const today = new Date();

  const age = today.getFullYear() - birthDate.getFullYear();

  return (
    <section className="mt-36 mb-20 p-10 bg-zinc-800 rounded-2xl shadow-xl">
      <p className="text-zinc-300 ">
        Tengo {age} años y soy Técnico en Programación. Me especializo en
        desarrollo web, utilizando tecnologías modernas como React, Next.js, y
        más. Estoy comprometido con crear aplicaciones funcionales y eficientes,
        siempre buscando mejorar y aprender nuevas herramientas. 🚀
      </p>
    </section>
  );
};
export default About;
