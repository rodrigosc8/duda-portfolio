import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectArtwork } from "./ProjectArtwork";
import { assetPath, resolveAssetUrls } from "../utils/assets";

function hexToRgba(hex, alpha) {
  const fallback = "dd1c5d";
  const value = (hex ?? fallback).replace("#", "");
  const normalized =
    value.length === 3 ? value.split("").map((character) => `${character}${character}`).join("") : value;
  const parsed = Number.parseInt(normalized, 16);

  if (Number.isNaN(parsed)) {
    return `rgba(221, 28, 93, ${alpha})`;
  }

  const red = (parsed >> 16) & 255;
  const green = (parsed >> 8) & 255;
  const blue = parsed & 255;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function getGalleryItems(project) {
  const items = [project?.modalImage, project?.image, ...(project?.gallery ?? [])].filter(Boolean);
  return [...new Set(items)];
}

function getProjectVideos(project) {
  return project?.videos?.filter(Boolean) ?? [];
}

function getYoutubeEmbedUrl(video) {
  if (video.youtubeId) {
    return `https://www.youtube-nocookie.com/embed/${video.youtubeId}`;
  }

  return video.src;
}

function MetaPill({ accent, filled = false, children }) {
  return (
    <span
      className={`inline-flex rounded-full px-3.5 py-2 text-[0.68rem] font-black uppercase tracking-[0.2em] ${
        filled ? "text-white shadow-sticker" : "border text-ink/68"
      }`}
      style={
        filled
          ? { backgroundColor: accent }
          : {
              borderColor: hexToRgba(accent, 0.18),
              backgroundColor: "rgba(255,255,255,0.72)",
            }
      }
    >
      {children}
    </span>
  );
}

function InfoBlock({ label, children }) {
  return (
    <section className="border-t border-[#edd7de] pt-4">
      <p className="text-[0.72rem] font-black uppercase tracking-[0.24em] text-cherry/72">{label}</p>
      <div className="mt-3 text-sm leading-7 text-ink/78 sm:text-[0.98rem]">{children}</div>
    </section>
  );
}

function HighlightBlock({ label, accent, children }) {
  return (
    <section
      className="rounded-[1.4rem] border px-4 py-4 sm:px-5"
      style={{
        borderColor: hexToRgba(accent, 0.16),
        backgroundImage: `linear-gradient(145deg, ${hexToRgba(accent, 0.12)}, rgba(255, 252, 249, 0.94) 72%)`,
      }}
    >
      <p className="text-[0.72rem] font-black uppercase tracking-[0.24em] text-cherry/72">{label}</p>
      <div className="mt-3 text-sm leading-7 text-ink/80 sm:text-[0.98rem]">{children}</div>
    </section>
  );
}

function ProjectVideo({ video, accent }) {
  const isYoutube = video.type === "youtube";

  return (
    <section
      className="rounded-[1.5rem] border bg-white/72 p-3 shadow-[0_14px_30px_rgba(92,38,64,0.08)]"
      style={{ borderColor: hexToRgba(accent, 0.14) }}
    >
      <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.22em] text-cherry/70">
        Vídeo do projeto
      </p>

      {isYoutube ? (
        <iframe
          title={video.title}
          src={getYoutubeEmbedUrl(video)}
          className="aspect-video w-full rounded-[1.1rem] bg-ink/10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <video
          src={assetPath(video.src)}
          className="aspect-video w-full rounded-[1.1rem] bg-ink/10 object-contain"
          controls
          playsInline
          preload="metadata"
        >
          O teu browser não suporta vídeo HTML5.
        </video>
      )}
    </section>
  );
}

function Thumb({ image, active, onClick, accent, index, fit = "cover" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver imagem ${index + 1}`}
      className="transition hover:-translate-y-0.5"
    >
      <div
        className="rounded-[1rem] border p-1.5"
        style={{
          borderColor: active ? hexToRgba(accent, 0.34) : "rgba(255,255,255,0.8)",
          backgroundColor: active ? hexToRgba(accent, 0.12) : "rgba(255,255,255,0.84)",
          boxShadow: active
            ? `0 12px 24px ${hexToRgba(accent, 0.12)}`
            : "0 8px 18px rgba(92,38,64,0.06)",
        }}
      >
        <img
          src={assetPath(image)}
          alt=""
          className={`aspect-[4/3] w-full rounded-[0.72rem] ${
            fit === "contain" ? "bg-[#fbf5f2] object-contain p-2" : "object-cover"
          }`}
        />
      </div>
    </button>
  );
}

function MediaCard({ project, activeImage, accent, fit = "cover", onOpenImage }) {
  return (
    <div className="rounded-[1.9rem] border border-white/80 bg-white/78 p-3 shadow-[0_16px_30px_rgba(92,38,64,0.1)] sm:p-4">
      {activeImage ? (
        <button
          type="button"
          onClick={() => onOpenImage(activeImage)}
          className="group/image block w-full cursor-zoom-in rounded-[1.35rem] text-left focus:outline-none focus:ring-2 focus:ring-cherry/45"
          aria-label={`Ampliar imagem de ${project.title}`}
        >
          <motion.img
            key={activeImage}
            src={assetPath(activeImage)}
            alt={project.title}
            initial={{ opacity: 0, y: 8, scale: 0.992 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className={`h-[20rem] w-full rounded-[1.35rem] bg-[#fbf5f2] object-center transition duration-300 group-hover/image:brightness-[0.98] sm:h-[23rem] lg:h-[25rem] ${
              fit === "contain" ? "object-contain p-4" : "object-cover"
            }`}
            style={{ boxShadow: `0 18px 32px ${hexToRgba(accent, 0.1)}` }}
          />
        </button>
      ) : (
        <div className="h-[20rem] overflow-hidden rounded-[1.35rem] sm:h-[23rem] lg:h-[25rem]">
          <ProjectArtwork project={project} showHoverHint={false} />
        </div>
      )}
    </div>
  );
}

function ImageZoomOverlay({ image, title, fit = "cover", onClose }) {
  return (
    <AnimatePresence>
      {image ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#160711]/78 p-4 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative max-h-[92vh] w-full max-w-[min(94vw,1180px)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar imagem ampliada"
              className="absolute -right-2 -top-12 inline-flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/92 px-4 text-[0.72rem] font-black uppercase tracking-[0.2em] text-cherry shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition hover:bg-white sm:right-0"
            >
              Fechar
            </button>

            <img
              src={assetPath(image)}
              alt={title}
              className={`max-h-[88vh] w-full rounded-[1.4rem] bg-[#fffaf7] shadow-[0_28px_80px_rgba(0,0,0,0.34)] ${
                fit === "contain" ? "object-contain p-3" : "object-contain"
              }`}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);
  const mediaFit = project?.modalFit ?? project?.imageFit ?? "cover";

  useEffect(() => {
    setActiveImage(getGalleryItems(project)[0] ?? null);
    setZoomImage(null);
  }, [project]);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (zoomImage) {
          setZoomImage(null);
          return;
        }

        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, onClose, zoomImage]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-[#26101b]/58 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="flex min-h-full items-start justify-center p-4 sm:p-6 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.988 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.992 }}
              transition={{ duration: 0.26, ease: "easeOut" }}
              className="relative my-2 w-full max-w-[900px] overflow-hidden rounded-[2.2rem] border border-white/72 shadow-[0_28px_70px_rgba(58,18,36,0.32)] lg:max-h-[calc(100vh-3rem)]"
              style={{
                backgroundImage: resolveAssetUrls(
                  'linear-gradient(180deg, rgba(255,255,255,0.94), rgba(255,249,245,0.98)), url("/assets/collage/paper-texture.jpg")',
                ),
                backgroundSize: "auto, 320px",
                backgroundRepeat: "no-repeat, repeat",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar projeto"
                className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cherry/12 bg-white/82 text-[1.4rem] leading-none text-cherry shadow-[0_10px_20px_rgba(92,38,64,0.08)] transition hover:bg-white"
              >
                ×
              </button>

              <div className="grid min-h-0 lg:h-[min(84vh,780px)] lg:grid-cols-[0.92fr_1.08fr]">
                <div className="border-b border-[#eedadf] bg-[linear-gradient(180deg,rgba(255,247,244,0.92),rgba(255,251,248,0.78))] p-4 sm:p-5 lg:min-h-0 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:p-6">
                  <MediaCard
                    project={project}
                    activeImage={activeImage}
                    accent={project.accent}
                    fit={mediaFit}
                    onOpenImage={setZoomImage}
                  />

                  {getGalleryItems(project).length > 1 ? (
                    <div className="mt-4 grid grid-cols-3 gap-2.5">
                      {getGalleryItems(project).map((image, index) => (
                        <Thumb
                          key={image}
                          image={image}
                          index={index}
                          active={image === activeImage}
                          accent={project.accent}
                          fit={mediaFit}
                          onClick={() => setActiveImage(image)}
                        />
                      ))}
                    </div>
                  ) : null}

                  {getProjectVideos(project).length ? (
                    <div className="mt-4 space-y-3">
                      {getProjectVideos(project).map((video) => (
                        <ProjectVideo
                          key={video.title ?? video.src ?? video.youtubeId}
                          video={video}
                          accent={project.accent}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="min-h-0 px-4 pb-5 pt-16 sm:px-6 sm:pb-6 sm:pt-[4.5rem] lg:overflow-y-auto lg:px-7 lg:pb-7 lg:pt-7">
                  <div className="flex flex-wrap gap-2.5">
                    <MetaPill accent={project.accent} filled>
                      {project.year}
                    </MetaPill>
                    <MetaPill accent={project.accent}>{project.type}</MetaPill>
                  </div>

                  <h3 className="mt-4 max-w-[13ch] font-script text-[clamp(2.5rem,4.2vw,4.2rem)] leading-[0.92] text-cherry">
                    {project.title}
                  </h3>

                  {project.summary ? (
                    <p className="mt-5 max-w-[32rem] text-[1rem] font-semibold leading-7 text-ink/84">
                      {project.summary}
                    </p>
                  ) : null}

                  <div className="mt-6 space-y-4">
                    {project.description ? (
                      <InfoBlock label="Contexto">{project.description}</InfoBlock>
                    ) : null}

                    {project.role ? <InfoBlock label="O meu papel">{project.role}</InfoBlock> : null}

                    {project.objective ? (
                      <InfoBlock label="Objetivo">{project.objective}</InfoBlock>
                    ) : null}

                    {project.result ? (
                      <HighlightBlock label="Resultado" accent={project.accent}>
                        {project.result}
                      </HighlightBlock>
                    ) : null}

                    {project.deliverables?.length ? (
                      <InfoBlock label="Entregáveis">
                        <div className="flex flex-wrap gap-2">
                          {project.deliverables.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border px-3 py-2 text-[0.82rem] font-medium text-ink/76"
                              style={{
                                borderColor: hexToRgba(project.accent, 0.16),
                                backgroundColor: "rgba(255,255,255,0.72)",
                              }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </InfoBlock>
                    ) : null}
                  </div>

                  {project.credits ? (
                    <div className="mt-6 border-t border-[#edd7de] pt-4">
                      <p className="text-[0.72rem] font-black uppercase tracking-[0.24em] text-cherry/72">
                        Em colaboração com
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ink/74">{project.credits}</p>
                    </div>
                  ) : null}

                  <div className="mt-7">
                    <a
                      href="#work"
                      onClick={onClose}
                      className="inline-flex rounded-full bg-cherry px-5 py-3 text-[0.72rem] font-black uppercase tracking-[0.22em] text-white shadow-sticker transition hover:-translate-y-0.5"
                    >
                      Voltar aos projetos
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <ImageZoomOverlay
            image={zoomImage}
            title={project.title}
            fit={mediaFit}
            onClose={() => setZoomImage(null)}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
