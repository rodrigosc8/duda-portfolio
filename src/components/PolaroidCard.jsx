import { motion } from "framer-motion";
import { ProjectArtwork } from "./ProjectArtwork";

export function PolaroidCard({ project, tilt = 0, onOpen }) {
  const fit = project.imageFit ?? "cover";

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      whileHover={{ rotate: tilt + 1.5, scale: 1.03, y: -8 }}
      whileTap={{ scale: 0.99 }}
      className="group polaroid flex w-full flex-col text-left"
      style={{ rotate: `${tilt}deg` }}
    >
      <div className="overflow-hidden rounded-[0.45rem] bg-[#f1e7e4]">
        {fit === "social" ? (
          <div className="aspect-[4/4.2] w-full">
            <ProjectArtwork project={project} />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className={`aspect-[4/4.2] w-full transition duration-500 group-hover:scale-[1.04] ${
              fit === "contain" ? "bg-[#fffaf7] object-contain p-4" : "object-cover"
            }`}
          />
        )}
      </div>
      <div className="px-1 pb-1 pt-3">
        <p className="font-script text-[1.85rem] leading-none text-ink sm:text-[2.1rem]">
          {project.title}
        </p>
      </div>
    </motion.button>
  );
}
