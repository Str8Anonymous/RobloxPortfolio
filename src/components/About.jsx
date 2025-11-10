import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mb-8 max-w-3xl mx-auto text-center">
       <h1 className="text-4xl mb-4 font-bold">About me</h1>
        <p className="text-lg leading-relaxed opacity-90 max-w-2xl mx-auto">
          My name is Nathaniel, but you can
          call me Nat. I'm 22 years old and
          a Canadian Roblox Developer with
          ~6 years of experience. I specialize in
          backend systems, but I'm
          comfortable with frontend when needed. I enjoy designing
          clean,
          modular, well commented systems
          especially unique mechanics and complex gameplay problems that require{" "}
          creative backend solutions.
        </p>
      </div>

        <div className="flex justify-center pt-6">
            <p className="text-gray-400 text-sm">
              “Good systems make great games possible”
            </p>
        </div>
    </section>
  );
}
