import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";

function Home() {
  return (
    <main className="bg-zinc-50 dark:bg-gray-700">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
