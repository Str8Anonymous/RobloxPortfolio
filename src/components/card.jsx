export default function Card({ title, description, link }) {
  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-blue-500 font-medium hover:underline">
        View Project →
      </a>
    </div>
  );
}