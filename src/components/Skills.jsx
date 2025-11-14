export default function Skills() {
  const backendSkills = ["AI Systems", "Combat Systems", "Status/Stun Effect Systems", "Data Systems", "Matchmaking Systems", "Progression Systems", "RNG Systems"];
  const frontendSkills = ["UI Scripting", "Animation Scripting"];
  const tools = ["Lua / Luau", "VS Code", "Git / GitHub", "Rojo", "Profilestore", "JavaScript", "Python", "React + Tailwind"];

  const SkillCategory = ({ title, skills }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-semibold text-primary mb-6">{title}</h2>
      <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-primary/10 text-text px-4 py-2 rounded-full text-base font-medium border border-primary/30 hover:bg-primary/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 px-6 text-center">
      <h1 className="text-4xl font-extrabold mb-16 text-accent">Skills</h1>

      <div className="max-w-4xl mx-auto">
        <SkillCategory title="Backend" skills={backendSkills} />
        <SkillCategory title="Frontend" skills={frontendSkills} />
        <SkillCategory title="Tools" skills={tools} />
      </div>
    </section>
  );
}