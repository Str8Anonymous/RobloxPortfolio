import { motion } from "motion/react";

export default function Skills() {
  return (
    <>
      <div className="p-10 mt-[35vh] max-w-2xl mx-auto text-center space-y-12">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold"
        >
          Skill Set
        </motion.h1>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="space-y-2"
        >
          <h2 className="text-xl font-semibold">Backend</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-left mx-auto">
            <li>AI Systems</li>
            <li>Combat Systems</li>
            <li>Status/Stun Effect Systems</li>
            <li>Data Systems</li>
            <li>Matchmaking Systems</li>
            <li>Progression Systems</li>
            <li>RNG Systems</li>
          </ul>
        </motion.div>

        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="space-y-2"
        >
          <h2 className="text-xl font-semibold">Frontend</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-left mx-auto">
            <li>UI Scripting</li>
            <li>Animation Scripting</li>
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="space-y-2"
        >
          <h3 className="text-xl font-semibold">Tools</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-left mx-auto">
            <li>Lua / Luau</li>
            <li>VS Code</li>
            <li>Git / GitHub</li>
            <li>Rojo</li>
            <li>Profilestore</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>React + Tailwind</li>
          </ul>
        </motion.div>

      </div>
    </>
  );
}
