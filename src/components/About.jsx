import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <motion.h2
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}>
      <div className="max-w-3xl mx-auto text-left">
        <h1 className="text-4xl font-extrabold mb-16 text-accent font-poppins text-center">About Me</h1>

        <p className="text-lg md:text-xl text-text/90 leading-relaxed mb-12">
          My name is Nathaniel, but you can call me Nat. I'm 23 years old and a Canadian
          Roblox Developer with ~5 years of experience. I specialize in backend systems, but
          I'm comfortable with frontend when needed. I enjoy designing clean, modular, well
          commented systems especially unique mechanics and complex gameplay problems
          that require creative backend solutions.
        </p>

        <p className="text-secondary text-xl italic">
          “Good systems make great games possible”
        </p>
      </div>
      </motion.h2>
    </section>
  );
}