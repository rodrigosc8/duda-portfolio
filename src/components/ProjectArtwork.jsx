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

export function ProjectArtwork({ project }) {
  if (project.image) {
    const fit = project.imageFit ?? "cover";

    if (fit === "social") {
      return (
        <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.92),transparent_34%),linear-gradient(135deg,#fff9f6_0%,#f7dbe5_100%)]">
          <img
            src={project.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-[0.14] blur-md"
          />
          <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.24em] text-cherry shadow-[0_10px_18px_rgba(91,43,69,0.08)]">
            Perfil social
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-8 py-5">
            <div className="relative h-full max-h-[92%] aspect-[7/20] overflow-hidden rounded-[1.35rem] border border-white/80 bg-white shadow-[0_18px_34px_rgba(91,43,69,0.16)]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <img
        src={project.image}
        alt={project.title}
        className={`h-full w-full transition duration-500 group-hover:scale-[1.04] ${
          fit === "contain" ? "bg-[#fffaf7] object-contain p-4" : "object-cover"
        }`}
      />
    );
  }

  if (project.artwork === "cosmo") {
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

  if (project.artwork === "marinha") {
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

  if (project.artwork === "lousa") {
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

  if (project.artwork === "ruptura") {
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

  if (project.artwork === "nexus") {
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

  if (project.artwork === "fact") {
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
