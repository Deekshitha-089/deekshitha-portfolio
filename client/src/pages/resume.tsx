import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Resume() {
  const fireConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#ffc2c7", "#b6e5d8", "#fbe5c8", "#8fdde7"],
    });
  };

  return (
    <section className="min-h-screen bg-background text-foreground py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold mb-3"
        >
          My Resume 📄
        </motion.h1>

        <p className="text-muted-foreground mb-10">
          View my resume below
        </p>

        {/* Resume Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl overflow-hidden shadow-xl bg-white"
        >
          <img
            src="/deekshitha-portfolio/resume-preview.png"
            alt="Deekshitha Puppala Resume Preview"
            className="w-full object-contain"
          />
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          {/* Back */}
          <a
            href="/deekshitha-portfolio/"
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            ← Back to Home
          </a>

          {/* Done */}
          <button
            onClick={fireConfetti}
            className="px-8 py-4 rounded-xl border border-border font-semibold hover:bg-muted transition"
          >
            Done ✅
          </button>
        </div>
      </div>
    </section>
  );
}
