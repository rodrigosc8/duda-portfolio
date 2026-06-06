import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigationLinks } from "../data/siteContent";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40" role="banner">
      <div className="page-shell pt-3">
        <nav className="paper-card relative flex items-center justify-between rounded-full px-5 py-4 sm:px-7" role="navigation" aria-label="Navegação principal">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cherry/15 text-cherry md:hidden focus:outline-none focus:ring-2 focus:ring-cherry"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="space-y-1.5">
              <span className="block h-[2px] w-5 bg-current" />
              <span className="block h-[2px] w-5 bg-current" />
              <span className="block h-[2px] w-5 bg-current" />
            </span>
          </button>

          <div className="hidden items-center gap-7 text-sm font-extrabold uppercase tracking-[0.18em] text-cherry/90 md:flex">
            {navigationLinks.slice(0, 2).map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="transition hover:text-cherryDark focus:outline-none focus:underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#home"
            className="absolute left-1/2 -translate-x-1/2 font-script text-[2rem] font-semibold text-cherry focus:outline-none focus:underline"
          >
            Duda Terra
          </a>

          <div className="hidden items-center gap-7 text-sm font-extrabold uppercase tracking-[0.18em] text-cherry/90 md:flex">
            {navigationLinks.slice(2).map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="transition hover:text-cherryDark focus:outline-none focus:underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="w-10 md:hidden" />
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="page-shell md:hidden"
            id="mobile-menu"
          >
            <div className="paper-card mt-3 rounded-[1.75rem] px-5 py-5">
              <div className="flex flex-col gap-4">
                {navigationLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-black uppercase tracking-[0.18em] text-cherry focus:outline-none focus:underline"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
