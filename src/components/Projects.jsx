import Card from "./card";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24 px-6 md:py-24 md:px-6 text-center">
      <motion.h1
        className="text-4xl font-extrabold mb-16 text-accent font-poppins"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card
              title={project.title}
              description={project.description}
              media={project.media}
              contributions={project.contributions}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}