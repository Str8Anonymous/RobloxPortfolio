import { motion } from "motion/react";

export default function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-10 mt-[35vh] space-y-6 text-center"
      >
        <h1 className="text-3xl font-bold">About me</h1>

        <p className="max-w-2xl mx-auto text-lg opacity-90">
          My name is Nathaniel, but you can call me Nat. I'm 22 years old and a
          Canadian Roblox Developer with ~6 years of experience. I specialize in
          backend systems, but I'm comfortable with frontend when needed. I
          enjoy designing clean, modular, well commented systems especially
          unique mechanics and complex gameplay problems that require creative
          backend solutions.
        </p>
      </motion.div>
    </>
  );
}
