import Card from "./card";
import { projects } from "../data/projects";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { tr } from "framer-motion/client";
export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function handleArrowClick(prev, nextCard) {
    setCurrentIndex((prev) => {
      const delta = nextCard ? 1 : -1;
      return (prev + delta + projects.length) % projects.length;
    })
    setIsOpen(false)
  }


  return (
    <section id="projects" className="py-24 px-6 md:py-24 md:px-6">
      <h1 className="text-4xl mb-2 font-bold">Projects</h1>

      <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
        <button className="text-4xl" onClick={() => handleArrowClick(false)}>
          <ChevronLeft />
        </button>

        <div className="px-6 py-4 w-72 min-h-[280px] md:w-80 md:min-h-[320px]">
          <Card
            title={projects[currentIndex].title}
            description={projects[currentIndex].description}
            media={projects[currentIndex].media}
            contributions={projects[currentIndex].contributions}
            technologies={projects[currentIndex].technologies}
            shouldExpandCard={isOpen}
            onToggle={() => setIsOpen((prev) => !prev)}
          />
        </div>

        <button className="text-4xl" onClick={() => handleArrowClick(true)}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
