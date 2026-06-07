import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectCategories } from "../data/projects";
import { ProjectArtwork } from "./ProjectArtwork";

function FilterButton({ active, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-3 text-sm font-black uppercase tracking-[0.18em] transition ${
        active
          ? "bg-cherry text-white shadow-sticker"
          : "border border-cherry/15 bg-white/80 text-cherry hover:bg-cherry/8"
      }`}
    >
      {label}
    </button>
  );
}

export function WorkSection({ projects, onOpen }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [previewProjectId, setPreviewProjectId] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="work" className="py-14 sm:py-16">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65 }}
          className="paper-card rounded-[2.9rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker">Portfólio de projetos</p>
              <h2 className="mt-3 font-script text-[clamp(3.2rem,6vw,5.3rem)] leading-none text-cherry">
                Mais coisas em que tenho andado a trabalhar.
              </h2>
              <p className="mt-4 max-w-[42rem] ink-copy">
                Explora os projetos de design de interfaces, programação, redes sociais, vídeo,
                fotografia e design gráfico, construídos com estratégia, narrativa e sobretudo,
                com muita dedicação.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {projectCategories.map((category) => (
                <FilterButton
                  key={category.id}
                  label={category.label}
                  active={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredProjects.map((project) => (
                <motion.button
                  key={project.id}
                  type="button"
                  onClick={() => onOpen(project)}
                  onBlur={() => setPreviewProjectId(null)}
                  onFocus={() => setPreviewProjectId(project.id)}
                  onMouseEnter={() => setPreviewProjectId(project.id)}
                  onMouseLeave={() => setPreviewProjectId(null)}
                  whileHover={{ y: -8, rotate: -0.3 }}
                  className="group overflow-hidden rounded-[2rem] border border-white/65 bg-white/75 text-left shadow-paper backdrop-blur-sm"
                >
                  <div className="relative h-[20.5rem] overflow-hidden sm:h-[21.5rem] xl:h-[21rem]">
                    <ProjectArtwork project={project} previewActive={previewProjectId === project.id} />
                    <div
                      className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.24em] text-white shadow-sticker"
                      style={{ backgroundColor: project.accent }}
                    >
                      {project.year}
                    </div>
                  </div>

                  <div className="space-y-4 px-5 pb-5 pt-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-black uppercase tracking-[0.26em] text-cherry/70">
                        {project.type}
                      </span>
                      <span className="text-xs font-semibold text-ink/60">Ver projeto</span>
                    </div>

                    <div>
                      <h3 className="font-script text-[2.35rem] leading-none text-cherry">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-ink/80">
                        {project.summary ?? project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-cherry/10 bg-cherry/5 px-3 py-1 text-xs font-semibold text-ink/75"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
