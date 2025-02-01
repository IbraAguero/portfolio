import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/project";
import Skills from "./components/skills";

function App() {
  return (
    <main className="z-[-10] min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(50,50,50,0.7),rgba(0,0,0,0))]">
      <div className="max-w-4xl px-6 mx-auto">
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
