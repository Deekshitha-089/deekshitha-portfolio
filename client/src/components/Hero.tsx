import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* 🌫 Overlay for readability */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/70 z-0" />

      {/* 🎨 Animated background blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-64 h-64 bg-[#ffc2c7]/30 rounded-full blur-3xl z-0"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-[#b6e5d8]/30 rounded-full blur-3xl z-0"
      />

      {/* 🌟 Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/60 dark:bg-black/40 backdrop-blur border border-black/10 dark:border-white/10 text-sm font-medium tracking-wide uppercase"
        >
          Creative Developer & Designer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          My Portfolio <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc2c7] via-[#fbe5c8] to-[#8fdde7]">
            <em> Minimal. Modern. Meaningful.</em>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-foreground dark:text-white/80"
        >
          I create clean, responsive, and engaging user interfaces using modern web technologies,
          with a strong focus on detail, usability, and smooth interactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl font-bold bg-[#8fdde7] text-[#1e3a40] hover:shadow-[0_10px_30px_-10px_rgba(143,221,231,0.6)] transition-all"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl font-bold border-2 border-[#b6e5d8] text-foreground dark:text-white hover:bg-[#b6e5d8]/20 transition-all"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* ⬇ Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-foreground/90 dark:border-white/90 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-foreground/90 dark:bg-white/90 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
