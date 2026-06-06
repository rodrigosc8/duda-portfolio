import { motion } from "framer-motion";
import { MaskedAsset } from "./MaskedAsset";
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
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative mx-auto w-full max-w-[34rem]">
            <MaskedAsset
              backgroundImage='linear-gradient(180deg, rgba(255, 252, 245, 0.98), rgba(249, 241, 230, 0.96)), url("/assets/collage/paper-texture.jpg")'
              mask="/assets/collage/notebook-sheet-mask.png"
              className="aspect-square w-full shadow-sticker"
              backgroundSize="100% 100%, 260px"
              backgroundRepeat="no-repeat, repeat"
              backgroundBlendMode="multiply"
              maskSize="contain"
            />
            <div className="pointer-events-none absolute left-[12%] top-[7%] h-[9%] w-[34%] rotate-[-8deg] rounded-[0.25rem] bg-[linear-gradient(90deg,#ff3f90,#dd1c5d)] opacity-95 shadow-sticker" />
            <div className="pointer-events-none absolute inset-0 px-[17%] pb-[14%] pt-[22%]">
              <h3 className="font-script text-[clamp(2.45rem,4.5vw,3.8rem)] font-bold uppercase leading-[0.9] text-cherry">
                Porque crio
              </h3>
              <p className="mt-4 max-w-[23rem] text-[0.9rem] leading-6 text-[#1e1a19] sm:text-[0.98rem] sm:leading-7">
                {whyCreateCopy}
              </p>
            </div>
          </div>

          <div className="rounded-[2.3rem] border border-white/70 bg-white/50 px-6 py-8 shadow-paper backdrop-blur-sm sm:px-8">
            <p className="section-kicker">Abordagem</p>
            <h3 className="mt-4 font-script text-[clamp(2.8rem,5vw,4.5rem)] leading-none text-cherry">
              Primeiro a história, depois os visuais com atitude.
            </h3>
            <p className="mt-5 ink-copy max-w-[38rem]">
              Gosto de projetos pensados, emocionalmente claros e visualmente memoráveis. O
              objetivo nunca é só fazer algo bonito. É fazer algo vivo, útil e claramente pensado
              para as pessoas a quem se quer chegar.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
