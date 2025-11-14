import { motion } from "framer-motion";

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const skillItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 90,
    },
  },
};

export default function Skills() {
  const backendSkills = ["AI Systems", "Combat Systems", "Status/Stun Effect Systems", "Data Systems", "Matchmaking Systems", "Progression Systems", "RNG Systems"];
  const frontendSkills = ["UI Scripting", "Animation Scripting"];
  const tools = ["Lua / Luau", "VS Code", "Git / GitHub", "Rojo", "Profilestore", "JavaScript", "Python", "React + Tailwind"];

  const SkillCategory = ({ title, skills }) => (
    <div>
      <motion.h2
        className="text-2xl font-semibold text-secondary mb-6 font-poppins"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-start gap-3"
        variants={skillsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-primary/10 text-text px-4 py-2 rounded-full text-base font-medium border border-primary/30 hover:bg-primary/20 transition-colors"
            variants={skillItemVariants}
            whileHover={{ scale: 1.1, rotate: 2, transition: { duration: 0.3 } }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="skills" className="py-24 px-6">
      <motion.h1
        className="text-4xl font-extrabold mb-16 text-accent font-poppins text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <SkillCategory title="Backend" skills={backendSkills} />
        <SkillCategory title="Frontend" skills={frontendSkills} />
        <SkillCategory title="Tools" skills={tools} />
      </div>
    </section>
  );
}