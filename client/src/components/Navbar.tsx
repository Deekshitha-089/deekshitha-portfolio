import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onResumeClick: () => void;
}

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export function Navbar({ onResumeClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300
        ${
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm py-4 border-b border-border"
            : "bg-white/70 dark:bg-background/50 backdrop-blur-md py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-foreground">
          DEEKSHITHA<span className="text-[#ffc2c7]">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer text-sm font-medium text-foreground hover:text-[#e07e86] transition"
            >
              {item.name.toUpperCase()}
            </Link>
          ))}

          {/* RESUME BUTTON */}
          <button
            onClick={onResumeClick}
            className="px-5 py-2 rounded-full bg-[#ffc2c7] text-[#5e2d31] text-sm font-semibold hover:opacity-90 transition"
          >
            RESUME
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="flex flex-col p-6 space-y-4 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium"
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setIsOpen(false);
                  onResumeClick();
                }}
                className="w-full px-6 py-3 rounded-full bg-[#ffc2c7] text-[#5e2d31] font-semibold"
              >
                RESUME
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
