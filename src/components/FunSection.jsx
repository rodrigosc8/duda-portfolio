import { motion } from "framer-motion";
import { obsessionItems, toolPlateItems } from "../data/siteContent";
import { assetPath } from "../utils/assets";

function FloatingImage({ src, alt = "", className = "", imageClassName = "", rotate = 0 }) {
  return (
    <div className={`absolute ${className}`}>
      <img
        src={assetPath(src)}
        alt={alt}
        className={`h-full w-full object-contain drop-shadow-[0_18px_18px_rgba(91,43,69,0.14)] ${imageClassName}`}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    </div>
  );
}

function ToolSticker({ item }) {
  return (
    <div className={`absolute flex items-center justify-center ${item.className}`}>
      <img
        src={assetPath(item.image)}
        alt={item.label}
        className="h-14 w-14 object-contain drop-shadow-[0_12px_12px_rgba(91,43,69,0.18)] sm:h-16 sm:w-16"
        style={{ transform: `rotate(${item.rotate}deg)` }}
      />
    </div>
  );
}

export function FunSection() {
  const hasOddObsessionItem = obsessionItems.length % 2 === 1;

  return (
    <section className="py-14 sm:py-16">
      <div className="page-shell">
        <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.65 }}
            className="paper-card overflow-hidden rounded-[2.7rem] px-6 py-8 sm:px-8"
          >
            <h3 className="font-script text-[clamp(2.9rem,5vw,4.4rem)] leading-none text-cherry">
              O meu prato criativo?
            </h3>
            <div className="relative mx-auto mt-5 h-[25rem] max-w-[42rem] sm:h-[28rem]">
              <FloatingImage
                src={assetPath("/assets/Portfólio/site/girl-dinner-napkin.png")}
                className="left-[12%] top-[9.4rem] h-44 w-44 sm:left-[15%] sm:top-[10rem] sm:h-52 sm:w-52"
                rotate={-15}
              />
              <FloatingImage
                src={assetPath("/assets/Portfólio/site/girl-dinner-plate.png")}
                className="left-1/2 top-[3.2rem] h-[18.5rem] w-[18.5rem] -translate-x-1/2 sm:h-[22rem] sm:w-[22rem]"
                rotate={-4}
              />
              <FloatingImage
                src={assetPath("/assets/Portfólio/site/girl-dinner-fork.png")}
                className="left-[3%] top-[11rem] h-36 w-36 sm:left-[7%] sm:top-[12rem] sm:h-44 sm:w-44"
                rotate={-23}
              />
              <FloatingImage
                src={assetPath("/assets/Portfólio/site/girl-dinner-knife.png")}
                className="right-[10%] top-[8.4rem] h-36 w-36 sm:right-[16%] sm:top-[9.2rem] sm:h-44 sm:w-44"
                rotate={11}
              />
              <FloatingImage
                src={assetPath("/assets/Portfólio/site/girl-dinner-juice.png")}
                className="right-[5%] top-[2rem] h-24 w-24 sm:right-[10%] sm:h-32 sm:w-32"
                rotate={6}
              />

              <div className="absolute left-1/2 top-[4.6rem] h-[16rem] w-[16rem] -translate-x-1/2 sm:top-[5.2rem] sm:h-[18.5rem] sm:w-[18.5rem]">
                {toolPlateItems.map((item) => (
                  <ToolSticker key={item.label} item={item} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.72 }}
            className="paper-card rounded-[2.7rem] px-6 py-8 sm:px-8"
          >
            <h3 className="max-w-[29rem] font-script text-[clamp(2.65rem,4.6vw,3.9rem)] leading-[0.98] text-cherry">
              Atualmente obcecada por
            </h3>

            <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-2">
              {obsessionItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`relative flex flex-col items-center justify-end text-center ${
                    hasOddObsessionItem && index === obsessionItems.length - 1
                      ? "col-span-2 mx-auto max-w-[12rem]"
                      : ""
                  }`}
                >
                  <div style={{ transform: `rotate(${item.rotate}deg)` }}>
                    <img
                      src={assetPath(item.image)}
                      alt={item.name}
                      className="h-28 w-28 animate-float object-contain drop-shadow-[0_14px_16px_rgba(91,43,69,0.13)] sm:h-36 sm:w-36"
                    />
                  </div>
                  <p className="mt-3 font-script text-[1.8rem] leading-none text-cherryDark">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
