import React from "react";

export default function Contact() {
  return (
    <section className="bg-background py-12 px-6 text-center" id="contact">
      <h2 className="text-3xl font-bold text-primary mb-6">Contact Me</h2>
      <p className="text-text mb-4">Feel free to reach out to me on Discord or other platforms!</p>
      <a
        href="https://discord.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/80 transition"
      >
        Connect on Discord
      </a>
    </section>
  );
}