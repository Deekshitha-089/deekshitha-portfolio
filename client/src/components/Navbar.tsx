import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", to: "home" },
  { name: "Contents", to: "contents" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
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
        <div className="text-2xl font-bold tracking-tighter text-foreground">
          DEEKSHITHA PUPPALA<span className="text-[#ffc2c7]">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth
              duration={500}
              className="cursor-pointer text-foreground hover:text-[#e07e86] transition-colors font-medium text-sm tracking-wide"
            >
              {item.name.toUpperCase()}
            </Link>
          ))}

          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#ffc2c7] text-[#5e2d31] rounded-full font-bold hover:bg-[#ffc2c7]/80 hover:scale-105 transition-all shadow-lg shadow-[#ffc2c7]/20"
           >
           RESUME
           </a>

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
            className="md:hidden bg-background border-b border-border text-foreground overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-lg font-medium hover:text-[#b6e5d8] transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="#"
                className="px-8 py-3 w-full text-center bg-[#ffc2c7] text-[#5e2d31] rounded-full font-bold"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
