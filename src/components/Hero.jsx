export default function Hero() {
  return (
    <section id="hero" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl mb-2 font-bold text-primary">Nathaniel</h1>

        <h2 className="text-3xl mb-4 font-semibold text-secondary">
          Roblox Scripter
        </h2>

        <p className="text-lg text-text mb-8">
          I build backend systems, AI, movement, and combat mechanics for Roblox
          games.
        </p>

        <a
          href="#projects"
          className="bg-primary text-background font-bold py-3 px-6 rounded-lg hover:bg-secondary transition-colors"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
