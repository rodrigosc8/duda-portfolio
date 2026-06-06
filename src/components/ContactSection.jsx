import { motion } from "framer-motion";
import { InstagramIcon, LinkedinIcon, MailIcon } from "./icons";
import { MaskedAsset } from "./MaskedAsset";
import { contactLinks } from "../data/siteContent";

const iconMap = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};

export function ContactSection() {
  return (
    <section id="contact" className="py-14 sm:py-16">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2.8rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-11"
        >
          <div className="absolute inset-0 bg-white/20" />
          <MaskedAsset
            backgroundImage='radial-gradient(circle at 78% 18%, rgba(255,255,255,0.42), transparent 30%), linear-gradient(135deg, rgba(249, 206, 220, 0.98), rgba(243, 181, 198, 0.92)), url("/assets/collage/paper-texture.jpg")'
            mask="/assets/collage/pink-paper-mask.png"
            className="absolute inset-0 opacity-95"
            backgroundSize="100% 100%, 100% 100%, 320px"
            backgroundRepeat="no-repeat, no-repeat, repeat"
            backgroundBlendMode="soft-light, multiply, multiply"
            maskSize="100% 100%"
          />

          <div className="pointer-events-none absolute right-10 top-8 hidden h-32 w-32 rotate-12 rounded-full border border-white/[0.35] bg-white/[0.15] blur-[0.5px] lg:block" />
          <div className="pointer-events-none absolute bottom-12 right-24 hidden h-3 w-24 rotate-[-9deg] rounded-full bg-white/[0.38] lg:block" />

          <div className="relative grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_28rem]">
            <div className="max-w-[58rem]">
              <p className="section-kicker text-white drop-shadow-[0_3px_5px_rgba(105,27,58,0.18)]">
                Contacto
              </p>
              <h2 className="mt-3 max-w-[52rem] font-script text-[clamp(3rem,5.1vw,4.75rem)] leading-[0.95] text-white drop-shadow-[0_5px_8px_rgba(105,27,58,0.2)]">
                Vamos dar forma à próxima grande ideia?
              </h2>
              <p className="mt-5 max-w-[39rem] text-[1.02rem] leading-8 text-cherryDark/[0.86]">
                Se algum projeto te chamou a atenção, este é o ponto de partida: design,
                comunicação digital, vídeo, fotografia ou uma ideia que ainda precisa de ganhar
                forma visual.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/[0.55] bg-white/[0.24] px-5 py-5 shadow-[0_18px_42px_rgba(105,27,58,0.08)] backdrop-blur-sm">
              <p className="font-script text-[2.15rem] leading-none text-cherry">
                Escolhe o canal
              </p>
              <p className="mt-2 text-sm leading-6 text-cherryDark/[0.72]">
                Instagram para conversas rápidas. LinkedIn e email para propostas, colaborações e
                contactos profissionais.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-2">
              {contactLinks.map((link) => {
                const Icon = iconMap[link.icon];
                const isExternal = link.href?.startsWith("http");

                const content = (
                  <>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.65] text-cherry shadow-[0_10px_20px_rgba(105,27,58,0.08)]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span>
                      <span className="block text-base font-black uppercase tracking-[0.18em]">
                        {link.label}
                      </span>
                      <span className="mt-1 block text-sm text-cherryDark/[0.72]">{link.handle}</span>
                    </span>
                  </>
                );

                if (!link.href) {
                  return (
                    <div
                      key={link.label}
                      className="flex items-center gap-4 rounded-[1.55rem] border border-white/[0.70] bg-white/[0.35] px-4 py-4 text-cherryDark backdrop-blur-sm"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-[1.55rem] border border-white/[0.70] bg-white/[0.35] px-4 py-4 text-cherryDark backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:bg-white/[0.55] hover:shadow-[0_18px_34px_rgba(105,27,58,0.1)]"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
