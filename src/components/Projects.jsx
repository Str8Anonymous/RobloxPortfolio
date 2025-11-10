import Card from "./card";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Projects() {
  return (
    <>
      <section id="projects" className="py-24 px-6">
        {/*Name*/}

        <div>
          <h1 className="text-4xl mb-2 font-bold">Projects</h1>
        </div>

        <div className="relative flex items-center justify-center">
          <button className="absolute -left-2 text-4xl">
            <ChevronLeft />
          </button>

          <div className= "px-6 py-4">
          <Card
            title="Rogueblox"
            description="Deepwoken-inspired game focused on AI and combat systems."
            link="https://streamable.com/example"
          />
          </div>
        <button className="absolute -right-2 text-4xl">
          <ChevronRight />
        </button>
        </div>
      </section>
    </>
  );
}
