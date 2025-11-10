import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl mb-2 font-bold">Nathaniel</h1>
        <h2 className="text-2xl mb-3.5 font-semibold">Roblox Scripter</h2>
        <p>
          I build backend systems, AI, movement, and combat mechanics for Roblox
          games.
        </p>
      </div>
    </section>
  );
}
