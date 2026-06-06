import { motion } from "framer-motion";
import { MaskedAsset } from "./MaskedAsset";
import { PolaroidCard } from "./PolaroidCard";

const tilts = [-2.5, -1, 1.6, 2.6];

export function SelectedWorkSection({ projects, onOpen }) {
  return (
    <section id="selected-work" className="relative py-12 sm:py-16">
      <div className="page-shell">
        <div className="relative overflow-hidden rounded-[2.8rem] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="absolute inset-0">
              <div className="absolute inset-3 bg-white/35" />
              <MaskedAsset
                backgroundImage='linear-gradient(180deg, rgba(249, 205, 220, 0.96), rgba(241, 170, 193, 0.92)), url("/assets/collage/paper-texture.jpg")'
                mask="/assets/collage/pink-paper-mask.png"
                className="absolute inset-2 opacity-95"
                backgroundSize="100% 100%, 320px"
                backgroundRepeat="no-repeat, repeat"
                backgroundBlendMode="multiply"
                maskSize="100% 100%"
              />
            </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <p className="section-kicker text-center text-white/80">Projetos em destaque</p>
            <h2 className="mt-4 text-center font-script text-[clamp(3.2rem,5.6vw,5.4rem)] leading-none text-white drop-shadow-[0_10px_18px_rgba(120,35,71,0.22)]">
              Algumas coisas em que tenho andado a trabalhar.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {projects.map((project, index) => (
                <PolaroidCard
                  key={project.id}
                  project={project}
                  tilt={tilts[index] ?? 0}
                  onOpen={onOpen}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
