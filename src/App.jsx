import "./App.css";
import Navbar from "./common/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default App;
