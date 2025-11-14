import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl mb-2 font-bold text-primary font-poppins">
            Nathaniel
          </h1>

          <h2 className="text-3xl mb-4 font-semibold text-secondary font-poppins">
            Roblox Scripter
          </h2>

          <p className="text-lg text-text mb-8">
            I build backend systems, AI, movement, and combat mechanics for Roblox
            games.
          </p>

          <div className="flex justify-center gap-4">
            <motion.a
              href="#projects"
              className="bg-primary text-background font-bold py-3 px-6 rounded-lg hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              className="bg-primary text-background font-bold py-3 px-6 rounded-lg hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
