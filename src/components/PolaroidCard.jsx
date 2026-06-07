import { motion } from "framer-motion";
import { ProjectArtwork } from "./ProjectArtwork";

export function PolaroidCard({ project, tilt = 0, onOpen }) {
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
        <div className="aspect-[4/4.2] w-full">
          <ProjectArtwork project={project} />
        </div>
      </div>
      <div className="px-1 pb-1 pt-3">
        <p className="font-script text-[1.85rem] leading-none text-ink sm:text-[2.1rem]">
          {project.title}
        </p>
      </div>
    </motion.button>
  );
}
