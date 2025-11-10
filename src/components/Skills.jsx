import { motion } from "motion/react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <h1 className="text-4xl font-extrabold mb-10">Skills</h1>

      {/*backend*/}
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-semibold">Backend</h2>
          <ul className="list-disc list-inside mt-2 space-y-2 text-lg text-left mx-auto max-w-sm">
            <li>AI Systems</li>
            <li>Combat Systems</li>
            <li>Status/Stun Effect Systems</li>
            <li>Data Systems</li>
            <li>Matchmaking Systems</li>
            <li>Progression Systems</li>
            <li>RNG Systems</li>
          </ul>
        </div>

        {/*frontend*/}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold">Frontend</h2>
          <ul className="list-disc list-inside mt-2 space-y-2 text-lg text-left mx-auto max-w-sm">
            <li>UI Scripting</li>
            <li>Animation Scripting</li>
          </ul>
        </div>

        {/*skills*/}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold">Tools</h2>
          <ul className="list-disc list-inside mt-2 space-y-2 text-lg text-left mx-auto max-w-sm">
            <li>Lua / Luau</li>
            <li>VS Code</li>
            <li>Git / GitHub</li>
            <li>Rojo</li>
            <li>Profilestore</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>React + Tailwind</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
