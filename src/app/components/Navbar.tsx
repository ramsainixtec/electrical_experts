import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconZap, IconPhone, IconMenu, IconX } from "./Icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/why-us", label: "Why Choose Us" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-secondary"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <IconZap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-lg text-white block leading-tight">SparkPro</span>
              <span className="text-xs text-primary leading-tight">ELECTRICAL SERVICES</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`relative py-2 transition-colors hover:text-primary ${isActive(l.to) ? "text-primary" : "text-gray-300"}`}
              >
                {l.label}
                {isActive(l.to) && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <a
              href="tel:+1234567890"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition group"
            >
              <IconPhone className="w-4 h-4 group-hover:animate-pulse" /> Call Now
            </a>
          </div>

          <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-secondary border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2">
              {links.map((l, i) => (
                <motion.div key={l.to} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`block py-3 border-b border-white/5 transition-colors hover:text-primary ${isActive(l.to) ? "text-primary" : "text-gray-300"}`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="tel:+1234567890"
                className="mt-4 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg flex items-center gap-2 w-fit hover:bg-primary/90 transition"
              >
                <IconPhone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
