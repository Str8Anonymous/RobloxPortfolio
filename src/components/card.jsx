import { useState } from "react";

export default function Card({ title, description, media, contributions, technologies }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Regular collapsed card */}
      <div
        onClick={() => setIsExpanded(true)}
        className={`cursor-pointer transition-all duration-300 rounded-xl shadow-lg p-6
        
        /* Dark Mode Styling: bg-background, border-primary, text-text */
        bg-background border border-primary/50 hover:border-primary

        ${isExpanded ? "hidden" : "relative w-[300px] min-h-[250px]"}`}
      >
        {/* Content for the collapsed card */}
        <h3 className="text-2xl font-bold mb-4 text-center text-primary">{title}</h3>

        {/* Use text-text for the main description */}
        <p className="line-clamp-2 text-text">{description}</p>

        {/* Use text-muted for the subtle instruction */}
        <p className="mt-6 text-sm text-muted italic">
          Click to expand
        </p>
      </div>


      {isExpanded && (
        <div
          /* Modal Overlay: Dark background opacity to maintain dark mode feel */
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
        >
          {/* Expanded card (Modal Content) */}
          <div
            onClick={(e) => e.stopPropagation()}
            /* Dark Mode Styling: bg-background for the content, bright border/shadow */
            className="cursor-pointer transition-all duration-300 rounded-xl p-8 bg-background border border-primary shadow-xl shadow-primary/10 w-[80vw] h-[80vh] max-w-6xl max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Content Colors (All text is now light against the dark background) */}
            <h3 className="text-2xl font-bold mb-4 text-center text-accent">{title}</h3>

            {/* Media Loop */}
            {media && media.map((mediaItem, mediaIndex) => (
              <div key={mediaIndex} className="mb-8">
                <h4 className="text-xl font-semibold mb-2 text-primary">{mediaItem.title}</h4>
                <p className="text-text/80 mb-4">{mediaItem.description}</p>

                {/* Video Embeds */}
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
                <h4 className="text-xl font-semibold mb-4 text-primary">Key Contributions</h4>
                <ul className="space-y-2 text-text">
                  {contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start">
                      {/* Use text-primary for bullets for consistency and pop */}
                      <span className="text-primary mr-2">•</span> 
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Section */}
            {technologies && (
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-3 text-primary">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      /* Use primary color for tech tags (subtle background, dark text) */
                      className="bg-primary/20 text-text px-3 py-1 rounded-full text-sm font-medium border border-primary/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Use text-muted for the subtle instruction */}
            <p className="mt-6 text-sm text-muted italic">
              Click outside to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}