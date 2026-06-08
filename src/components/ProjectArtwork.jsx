import { useEffect, useRef } from "react";
import { assetPath } from "../utils/assets";

function DecorativeStars() {
  return (
    <>
      <span className="absolute left-[12%] top-[16%] h-2 w-2 rounded-full bg-white/80" />
      <span className="absolute left-[20%] top-[28%] h-1.5 w-1.5 rounded-full bg-white/60" />
      <span className="absolute right-[22%] top-[18%] h-2.5 w-2.5 rounded-full bg-white/75" />
      <span className="absolute right-[14%] top-[32%] h-1 w-1 rounded-full bg-white/65" />
      <span className="absolute left-[28%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-white/60" />
    </>
  );
}

function getPrimaryVideo(project) {
  return project?.videos?.[0] ?? null;
}

function getYoutubeThumbnail(video) {
  return `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
}

function getYoutubePreviewUrl(video) {
  const id = video.youtubeId;

  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1`;
}

function ProjectVideoCover({ project, video, active, showHoverHint }) {
  const videoRef = useRef(null);
  const isYoutube = video.type === "youtube";
  const posterTime = video.posterTime ?? 0;

  useEffect(() => {
    if (isYoutube || !videoRef.current) {
      return;
    }

    if (active) {
      if (videoRef.current.currentTime < posterTime) {
        videoRef.current.currentTime = posterTime;
      }

      videoRef.current.play()?.catch(() => {});
      return;
    }

    videoRef.current.pause();

    try {
      videoRef.current.currentTime = posterTime;
    } catch {
      // Some browsers block seeking until metadata is loaded.
    }
  }, [active, isYoutube, posterTime]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#170a12]">
      {isYoutube ? (
        <>
          <img
            src={getYoutubeThumbnail(video)}
            alt={project.title}
            className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
              active ? "scale-105 opacity-0" : "scale-100 opacity-100"
            }`}
          />

          {active ? (
            <iframe
              title={video.title ?? project.title}
              src={getYoutubePreviewUrl(video)}
              className="pointer-events-none absolute inset-0 h-full w-full scale-[1.03]"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : null}
        </>
      ) : (
        <video
          ref={videoRef}
          src={assetPath(video.src)}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
          muted
          loop
          onLoadedMetadata={(event) => {
            if (!active) {
              event.currentTarget.currentTime = posterTime;
            }
          }}
          playsInline
          preload="metadata"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(23,10,18,0.02)_0%,rgba(23,10,18,0.22)_100%)]" />
      <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/55 bg-white/78 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.24em] text-cherry shadow-[0_10px_18px_rgba(91,43,69,0.1)] backdrop-blur-sm">
        Vídeo
      </div>
      {showHoverHint ? (
        <div
          className={`pointer-events-none absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/86 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-ink shadow-[0_12px_22px_rgba(20,8,16,0.14)] backdrop-blur-sm transition duration-300 ${
            active ? "translate-y-1 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cherry" />
          Passa o rato
        </div>
      ) : null}
    </div>
  );
}

export function ProjectArtwork({ project, previewActive = false, showHoverHint = true }) {
  const primaryVideo = getPrimaryVideo(project);
  const artwork = project.cardArtwork ?? project.artwork;

  if (primaryVideo && project.videoAsCover !== false) {
    return (
      <ProjectVideoCover
        project={project}
        video={primaryVideo}
        active={previewActive}
        showHoverHint={showHoverHint}
      />
    );
  }

  if (project.image && !project.cardArtwork) {
    const fit = project.imageFit ?? "cover";
    const position = project.imagePosition ?? "center";

    if (fit === "mockup") {
      const scale = project.mockupScale ?? 1;

      return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.92),transparent_34%),linear-gradient(135deg,#fffaf8_0%,#f7dbe5_100%)] p-5 sm:p-6">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.62),transparent_38%,rgba(221,28,93,0.08))]" />
          <img
            src={assetPath(project.image)}
            alt={project.title}
            className="relative z-10 h-full w-full object-contain drop-shadow-[0_18px_28px_rgba(91,43,69,0.12)] transition duration-500 group-hover:scale-[1.035]"
            style={{
              height: `${scale * 100}%`,
              objectPosition: position,
              width: `${scale * 100}%`,
            }}
          />
        </div>
      );
    }

    if (fit === "social") {
      return (
        <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.92),transparent_34%),linear-gradient(135deg,#fff9f6_0%,#f7dbe5_100%)]">
          <img
            src={assetPath(project.image)}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-[0.16] blur-xl"
            style={{ objectPosition: position }}
          />
          <div className="absolute left-5 top-5 z-10 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.24em] text-cherry shadow-[0_10px_18px_rgba(91,43,69,0.08)]">
            Perfil social
          </div>
          <div className="absolute inset-x-8 bottom-5 top-14 overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_18px_34px_rgba(91,43,69,0.16)]">
            <img
              src={assetPath(project.image)}
              alt={project.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
              style={{ objectPosition: position }}
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/55 to-transparent" />
          </div>
        </div>
      );
    }

    if (fit === "interface") {
      return (
        <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_32%),linear-gradient(135deg,#141a36_0%,#3654ca_48%,#f2b6d2_100%)] p-5">
          <div className="absolute left-5 top-5 z-10 rounded-full border border-white/25 bg-white/18 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.24em] text-white shadow-[0_10px_18px_rgba(25,20,60,0.18)] backdrop-blur-sm">
            Interface
          </div>
          <div className="flex h-full items-center justify-center pt-8">
            <div className="relative h-[88%] w-[70%] overflow-hidden rounded-[1.35rem] border border-white/30 bg-white shadow-[0_22px_38px_rgba(16,23,67,0.28)]">
              <img
                src={assetPath(project.image)}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                style={{ objectPosition: position }}
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <img
        src={assetPath(project.image)}
        alt={project.title}
        className={`h-full w-full transition duration-500 group-hover:scale-[1.04] ${
          fit === "contain" ? "bg-[#fffaf7] object-contain p-4" : "object-cover"
        }`}
        style={{ objectPosition: position }}
      />
    );
  }

  if (artwork === "cosmo") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_top,#3858d7_0%,#152c70_38%,#090d22_100%)]">
        <DecorativeStars />
        <div className="absolute left-[10%] top-[18%] h-24 w-24 rounded-full bg-gradient-to-br from-white/80 to-white/10 blur-[1px]" />
        <div className="absolute left-[48%] top-[14%] h-10 w-10 rounded-full bg-[#f3b8d4]" />
        <div className="absolute left-[55%] top-[52%] h-24 w-24 rounded-full bg-gradient-to-br from-[#f6e37f] to-[#f29f44]" />
        <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-white/90">
          UI / UX
        </div>
      </div>
    );
  }

  if (artwork === "marinha") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,#60d6ef_0%,#0d7ca6_45%,#08304f_100%)]">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_62%)]" />
        <div className="absolute left-[14%] top-[18%] h-10 w-20 rounded-full bg-white/30 blur-sm" />
        <div className="absolute left-[14%] top-[48%] h-20 w-20 rounded-full border-4 border-white/20" />
        <div className="absolute left-[50%] top-[26%] h-16 w-28 rounded-[999px_999px_999px_150px] bg-[#ffd971]/90" />
        <div className="absolute right-[10%] top-[48%] h-28 w-28 rounded-full bg-white/10" />
        <div className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-[#022638]/30 px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-white/90">
          JS Game
        </div>
      </div>
    );
  }

  if (artwork === "lousa") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,#fdd7b2_0%,#f2a55c_44%,#8e4333_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute left-8 top-8 rounded-full bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-[#a24b39]">
          2D Quest
        </div>
        <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-[#ffd278]/70 shadow-[inset_0_0_0_10px_rgba(255,255,255,0.18)]" />
        <div className="absolute bottom-10 right-20 h-5 w-5 rounded-full bg-[#db5d31]" />
      </div>
    );
  }

  if (artwork === "ruptura") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,#121212_0%,#1b0b1d_55%,#392135_100%)]">
        <div className="absolute inset-y-0 left-0 w-5 bg-black/30" />
        <div className="absolute inset-y-0 right-0 w-5 bg-black/30" />
        <div className="absolute left-1/2 top-1/2 h-[72%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_42%)]" />
        <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-white/80">
          Short Film
        </div>
      </div>
    );
  }

  if (artwork === "nexus") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,#fff6ea_0%,#f7e1d2_100%)]">
        <div className="absolute left-8 top-8 text-5xl font-black uppercase tracking-[0.18em] text-[#1f1633]">
          NEXUS
        </div>
        <div className="absolute right-8 top-8 h-28 w-28 rounded-full border-[10px] border-[#ef5d8f]" />
        <div className="absolute bottom-8 left-8 max-w-[70%] text-sm font-semibold uppercase tracking-[0.34em] text-[#633850]">
          Art, science & technology
        </div>
      </div>
    );
  }

  if (artwork === "fact") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,#0e1723_0%,#18293e_100%)]">
        <div className="absolute left-6 top-6 rounded-full bg-[#b8ff47] px-4 py-1 text-xs font-black uppercase tracking-[0.32em] text-[#111d1b]">
          AI / Truth
        </div>
        <div className="absolute left-[18%] top-[42%] h-4 w-4 rounded-full bg-[#b8ff47]" />
        <div className="absolute left-[30%] top-[28%] h-3 w-3 rounded-full bg-[#7edbff]" />
        <div className="absolute left-[58%] top-[38%] h-5 w-5 rounded-full bg-[#ed4e8d]" />
        <div className="absolute left-[75%] top-[22%] h-4 w-4 rounded-full bg-white/80" />
        <div className="absolute left-[22%] top-[45%] h-[2px] w-[20%] rotate-[-18deg] bg-white/30" />
        <div className="absolute left-[34%] top-[31%] h-[2px] w-[28%] rotate-[12deg] bg-white/30" />
        <div className="absolute left-[60%] top-[36%] h-[2px] w-[18%] rotate-[-30deg] bg-white/30" />
        <div className="absolute bottom-8 right-8 text-right text-3xl font-black uppercase tracking-[0.24em] text-white">
          F.A.C.T.
        </div>
      </div>
    );
  }

  return <div className="h-full w-full bg-gradient-to-br from-blush to-white" />;
}
