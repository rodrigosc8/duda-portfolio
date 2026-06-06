import { motion } from "framer-motion";
import { ArrowDownIcon, CameraIcon, PencilIcon, PhoneIcon } from "./icons";
import { MaskedAsset } from "./MaskedAsset";
import { heroHighlights } from "../data/siteContent";
import { assetPath } from "../utils/assets";

const iconMap = {
  pencil: PencilIcon,
  phone: PhoneIcon,
  camera: CameraIcon,
};

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-8 sm:pt-10">
      <div className="page-shell">
        <div className="relative overflow-hidden rounded-[2.7rem] px-2 pb-14 pt-8 sm:px-4 lg:px-8 lg:pb-20 lg:pt-10">
          <div className="absolute inset-x-0 bottom-0 h-[11rem] sm:h-[12.5rem] lg:h-[15rem]">
            <MaskedAsset
              backgroundImage='linear-gradient(180deg, rgba(250, 205, 219, 0.96), rgba(241, 170, 193, 0.92)), url("/assets/collage/paper-texture.jpg")'
              mask="/assets/collage/pink-paper-mask.png"
              className="h-full w-full opacity-95 drop-shadow-[0_-6px_18px_rgba(176,82,120,0.08)]"
              backgroundSize="100% 100%, 320px"
              backgroundRepeat="no-repeat, repeat"
              backgroundBlendMode="multiply"
              maskSize="100% 100%"
            />
          </div>

          <div className="relative grid items-end gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-[46rem] pt-10 lg:pt-12"
            >
              <p className="mb-2 text-[clamp(2.9rem,6.6vw,5.6rem)] font-semibold leading-[0.95] text-cherry">
                Olá, eu sou
              </p>
              <h1 className="hand-title text-[clamp(5.7rem,10vw,8.9rem)] font-bold leading-[0.82]">
                Duda Terra
              </h1>
              <p className="mt-8 max-w-[37rem] font-script text-[clamp(1.8rem,3.2vw,2.7rem)] leading-tight text-cherryDark">
                Amante de arte, criadora cronicamente online e alguém que acredita que grandes
                ideias podem tornar o dia a dia um bocadinho mais colorido.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroHighlights.map((item) => {
                  const Icon = iconMap[item.icon];

                  return (
                    <div
                      key={item.title}
                      className="rounded-[1.6rem] border border-white/60 bg-white/60 px-4 py-4 shadow-paper backdrop-blur-sm"
                      role="note"
                      aria-label={`Especialidade: ${item.title}`}
                    >
                      <Icon className="mb-3 h-7 w-7 text-cherry" aria-hidden="true" />
                      <p className="max-w-[10rem] text-lg font-extrabold leading-tight text-cherry">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <div className="relative mx-auto flex min-h-[560px] w-full max-w-[39rem] items-end justify-center lg:min-h-[650px] lg:max-w-[45rem] lg:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 34, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
                className="relative flex w-full justify-center lg:-mr-8 lg:justify-end"
              >
                <img
                  src={assetPath("/assets/Portfólio/site/duda-hero-cutout.png")}
                  alt="Duda Terra"
                  className="w-[min(100%,42rem)] object-contain drop-shadow-[0_28px_34px_rgba(132,35,76,0.22)]"
                />
              </motion.div>
            </div>
          </div>

          <div className="relative mt-10 flex items-center justify-center gap-3 pb-2 pt-6 text-center">
            <a
              href="#selected-work"
              className="font-script text-[2.2rem] font-semibold text-cherry transition hover:text-cherryDark"
            >
              Espreita por aqui
            </a>
            <ArrowDownIcon className="mt-1 h-6 w-6 text-cherry" />
          </div>
        </div>
      </div>
    </section>
  );
}
