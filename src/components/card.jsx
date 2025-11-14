import { useState } from "react";
import { motion } from "framer-motion";

export default function Card({ title, description, media, contributions, technologies }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "linear" } },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.3, ease: "linear" } },
  };

  return (
    <>
      {/* Regular collapsed card */}
      <motion.div
        onClick={() => setIsExpanded(true)}
        className={`cursor-pointer transition-transform duration-150 rounded-xl shadow-lg p-6
        bg-background border border-primary/50 ${!isExpanded ? "hover:border-primary hover:scale-105 hover:shadow-xl" : ""}
        ${isExpanded ? "hidden" : "relative w-[300px] min-h-[250px]"}`}
        whileTap={{ scale: 0.95 }}
        whileHover={!isExpanded ? { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", transition: { duration: 0.05 }, ease: "easeOut" } : {}}
      >
        {/* Content for the collapsed card */}
        <h3 className="text-2xl font-bold mb-4 text-center text-primary font-poppins">{title}</h3>

        {/* Use text-text for the main description */}
        <p className="line-clamp-2 text-text">{description}</p>

        {/* Use text-muted for the subtle instruction */}
        <p className="mt-6 text-sm text-muted italic">
          Click to expand
        </p>
      </motion.div>

      {isExpanded && (
        <motion.div
          /* Modal Overlay: Dark background opacity to maintain dark mode feel */
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
        >
          {/* Expanded card (Modal Content) */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            /* Dark Mode Styling: bg-background for the content, bright border/shadow */
            className="cursor-default transition-transform duration-300 rounded-xl p-8 bg-background border border-primary shadow-xl shadow-primary/10 w-[80vw] h-[80vh] max-w-6xl max-h-[90vh] overflow-y-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            layout
          >
            {/* Modal Content Colors (All text is now light against the dark background) */}
            <h3 className="text-2xl font-bold mb-4 text-center text-primary font-poppins">{title}</h3>

            {/* Media Loop */}
            {media && media.map((mediaItem, mediaIndex) => (
              <div key={mediaIndex} className="mb-8">
                <h4 className="text-xl font-semibold mb-2 text-primary font-poppins">{mediaItem.title}</h4>
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
                <h4 className="text-xl font-semibold mb-4 text-primary font-poppins">Key Contributions</h4>
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
                <h4 className="text-xl font-semibold mb-3 text-primary font-poppins">Technologies Used</h4>
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
          </motion.div>
        </motion.div>
      )}
    </>
  );
}