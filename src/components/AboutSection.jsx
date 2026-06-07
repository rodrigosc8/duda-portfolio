import { motion } from "framer-motion";
import { aboutParagraphs } from "../data/siteContent";
import { MaskedAsset } from "./MaskedAsset";
import { assetPath } from "../utils/assets";

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="page-shell">
        <div className="relative overflow-hidden rounded-[2.7rem] px-8 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <div className="absolute inset-0 bg-white/30" />
          <MaskedAsset
            backgroundImage='linear-gradient(180deg, rgba(249, 206, 220, 0.96), rgba(243, 181, 198, 0.9)), url("/assets/collage/paper-texture.jpg")'
            mask="/assets/collage/pink-paper-mask.png"
            className="absolute -inset-x-2 inset-y-0 opacity-95"
            backgroundSize="100% 100%, 320px"
            backgroundRepeat="no-repeat, repeat"
            backgroundBlendMode="multiply"
            maskSize="100% 100%"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_20rem] lg:gap-10 xl:grid-cols-[minmax(0,0.92fr)_23rem] xl:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.65 }}
              className="max-w-[43rem]"
            >
              <h2 className="hand-title text-[clamp(3.5rem,6.4vw,5.45rem)] font-bold leading-none">
                Quem sou eu?
              </h2>

              <div className="mt-2 space-y-3.5">
                <p className="max-w-[38rem] font-script text-[clamp(1.75rem,2.35vw,2.35rem)] leading-tight text-cherryDark">
                  {aboutParagraphs[0]}
                </p>

                {aboutParagraphs.slice(1).map((paragraph) => (
                  <p key={paragraph} className="ink-copy max-w-[39rem] text-[0.95rem] leading-7 sm:text-[1rem]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto flex min-h-[27rem] w-full max-w-[22rem] items-center justify-center py-4"
            >
              <img
                src={assetPath("/assets/Portfólio/site/about-banana-polaroid.png")}
                alt="Duda a segurar um telefone em forma de banana"
                className="absolute right-2 top-0 w-[72%] rotate-[8deg] object-contain drop-shadow-[0_18px_22px_rgba(91,43,69,0.18)]"
              />
              <img
                src={assetPath("/assets/Portfólio/site/about-cart-polaroid.png")}
                alt="Duda dentro de um carrinho de compras"
                className="absolute bottom-0 left-1 w-[78%] rotate-[-10deg] object-contain drop-shadow-[0_18px_22px_rgba(91,43,69,0.2)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
