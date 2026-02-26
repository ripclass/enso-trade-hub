import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    const stored = localStorage.getItem("enso-theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("enso-theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
          Enso Intelligence
        </a>

        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/90 px-2 py-1.5 backdrop-blur-md">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background transition-all hover:bg-secondary"
            >
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <a
              href="#contact"
              className="rounded-full border border-foreground bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              Book a Demo
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card"
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border/70 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-2 px-6 py-4 text-center">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-1 rounded-full border border-foreground bg-foreground px-4 py-2 text-sm font-medium text-background"
                onClick={() => setMobileOpen(false)}
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
