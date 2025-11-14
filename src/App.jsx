import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-text relative">
      <div className="background-glow"></div>
      <div className="relative z-10 max-w-7xl mx-auto p-8 md:p-12">
        <Hero />
        <About />
        <Skills />
        <Projects />

      </div>
    </div>
  );
}

export default App;
