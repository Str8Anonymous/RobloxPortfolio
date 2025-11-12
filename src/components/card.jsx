import { useRef, useEffect } from "react";

export default function Card({ title, description, shouldExpandCard, onToggle }) {
  const oldState = useRef(shouldExpandCard);

  function openCard() {
    console.log("Opening card...");
  }

  function closeCard() {
    console.log("Closing card...");
  }

  useEffect(() => {
    if (shouldExpandCard && !oldState.current) {
      openCard();
    } else if (!shouldExpandCard && oldState.current) {
      closeCard();
    }

    oldState.current = shouldExpandCard;
  }, [shouldExpandCard]);

  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer card transition-all duration-500 rounded-xl border border-gray-300 p-6 bg-white shadow-lg
      ${shouldExpandCard
          ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[400px] z-50"
          : "relative w-[300px] min-h-[250px]"
        }`}
    >
      {/* Title always shown */}
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>

      {/* Conditional content */}
      {shouldExpandCard ? (
        <div className="space-y-3 text-center">
          <p className="text-gray-700">{description}</p>
          <p className="text-gray-500">
            This is extra info that only appears when expanded. You can put
            more details, images, or buttons here later.
          </p>
        </div>
      ) : (
        <p className="text-gray-600 line-clamp-2">{description}</p>
      )}

      <p className="mt-6 text-sm text-gray-500 italic">
        {shouldExpandCard ? "Click to close" : "Click to expand"}
      </p>
    </div>
  );
}
