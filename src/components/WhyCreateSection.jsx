import { motion } from "framer-motion";
import { whyCreateCopy } from "../data/siteContent";

export function WhyCreateSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className="relative py-10 sm:py-14"
    >
      <div className="page-shell">
        <div className="relative isolate overflow-hidden rounded-[3rem] border border-white/72 bg-white/66 px-6 py-9 shadow-paper backdrop-blur-sm sm:px-9 lg:px-12 lg:py-11">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cherry/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#f5bfd0]/24 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cherry/25 to-transparent" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div className="lg:pr-4">
              <p className="section-kicker">Motivação</p>
              <h3 className="mt-4 flex min-h-[7.4rem] max-w-[34rem] items-start font-script text-[clamp(2.35rem,3.4vw,3.55rem)] font-bold uppercase leading-[1.02] text-cherry">
                Porque crio
              </h3>
              <p className="mt-5 ink-copy max-w-[39rem]">
                {whyCreateCopy}
              </p>
            </div>

            <div className="border-t border-cherry/12 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="section-kicker">Abordagem</p>
              <h3 className="mt-4 flex min-h-[7.4rem] max-w-[34rem] items-start font-script text-[clamp(2.35rem,3.4vw,3.55rem)] leading-[1.02] text-cherry">
                Primeiro a história, depois os visuais com atitude.
              </h3>
              <p className="mt-5 ink-copy max-w-[38rem]">
                Gosto de projetos pensados, emocionalmente claros e visualmente memoráveis. O
                objetivo nunca é só fazer algo bonito. É fazer algo vivo, útil e claramente pensado
                para as pessoas a quem se quer chegar.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap gap-2 border-t border-cherry/10 pt-5">
            {["Narrativa", "Clareza", "Emoção", "Visual memorável"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-cherry/12 bg-[#fff7f9]/78 px-4 py-2 text-[0.76rem] font-black uppercase tracking-[0.18em] text-cherry"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
