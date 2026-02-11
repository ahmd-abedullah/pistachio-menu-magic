import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
  { label: "Location", href: "#location" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-foreground/80 shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/pistachio_logo.png" alt="PISTACHIO logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-xl font-bold text-primary-foreground tracking-wide">PISTACHIO</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/80 hover:text-primary font-medium transition-colors text-sm uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-foreground"
          >
            <div className="container flex flex-col gap-4 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/80 hover:text-primary font-medium text-sm uppercase tracking-widest transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
