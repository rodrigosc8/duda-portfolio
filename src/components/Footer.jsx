import { InstagramIcon, LinkedinIcon, MailIcon } from "./icons";
import { contactLinks } from "../data/siteContent";

const iconMap = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};

export function Footer() {
  return (
    <footer className="pb-12 pt-2" role="contentinfo">
      <div className="page-shell">
        <div className="flex flex-col gap-5 rounded-[2rem] border border-white/60 bg-white/55 px-6 py-7 shadow-paper backdrop-blur-sm sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a 
              href="#home" 
              className="font-script text-[2.7rem] font-semibold text-cherry focus:outline-none focus:underline"
            >
              Duda Terra
            </a>
            <p className="mt-1 text-lg font-semibold text-ink/85">
              Vamos ter grandes ideias juntos?
            </p>
          </div>

          <nav className="flex gap-3" aria-label="Links de contacto">
            {contactLinks.map((link) => {
              const Icon = iconMap[link.icon];
              const isExternal = link.href?.startsWith("http");
              if (!Icon) return null;

              const content = (
                <>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">{link.label}</span>
                </>
              );

              if (!link.href) {
                return (
                  <div
                    key={link.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cherry/15 bg-white/70 text-cherry"
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
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cherry/15 bg-white/70 text-cherry transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-cherry"
                  title={link.label}
                >
                  {content}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
