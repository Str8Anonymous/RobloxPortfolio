import { useRef, useEffect } from "react";

export default function Card({ title, description, media, contributions, technologies, shouldExpandCard, onToggle }) {
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
    <>


      {/* Regular collapsed card */}
      <div
        onClick={onToggle}
        className={`cursor-pointer card transition-all duration-300 rounded-xl border border-gray-300 p-6 bg-white shadow-lg
        ${shouldExpandCard ? "hidden" : "relative w-[300px] min-h-[250px]"}`}
      >
        {/* Content for the collapsed card */}
        <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>

        <p className="text-gray-600 line-clamp-2">{description}</p>

        <p className="mt-6 text-sm text-gray-500 italic">
          Click to expand
        </p>
      </div>


      {shouldExpandCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4"
          onClick={onToggle}
        >
          {/* Expanded card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="cursor-pointer card transition-all duration-300 rounded-xl border border-gray-300 p-6 bg-white shadow-lg w-[80vw] h-[80vh] max-w-6xl max-h-[90vh] overflow-y-auto"
          >
            {/* Your expanded card content */}
            <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>

            <div className="space-y-3 text-center">
              <p className="text-gray-700">{description}</p>
              <p className="text-gray-500">
                This is extra info that only appears when expanded. You can put
                more details, images, or buttons here later.
              </p>
            </div>
            {/* Looping through media to add videos*/}
            {media && media.map((mediaItem, mediaIndex) => (
              <div key={mediaIndex} className="mb-8">
                <h4 className="text-xl font-semibold mb-2">{mediaItem.title}</h4>
                <p className="text-gray-600 mb-4">{mediaItem.description}</p>

                <div className={mediaItem.videoIDs.length > 1
                  ? "grid grid-cols-1 gap-6"
                  : "w-full"
                }>
                  {mediaItem.videoIDs.map((videoId, vidIndex) => (
                    <div key={vidIndex}>
                      <iframe
                        src={`https://streamable.com/e/${videoId}`}
                        className="w-full aspect-video rounded-lg border-0"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* Contributions Section */}
            {contributions && (
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Key Contributions</h4>
                <ul className="space-y-2">
                  {contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Section */}
            {technologies && (
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <p className="mt-6 text-sm text-gray-500 italic">
              Click outside to close
            </p>
          </div>
        </div>
      )}

    </>
  );
}