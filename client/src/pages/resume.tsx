import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface ResumeProps {
  onBack: () => void;
}

export default function Resume({ onBack }: ResumeProps) {
  const handleDone = () => {
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#ffc2c7", "#b6e5d8", "#fbe5c8"],
    });

    setTimeout(onBack, 1200);
  };

  return (
    <section className="min-h-screen bg-background text-foreground py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold mb-3"
        >
          My Resume
        </motion.h1>

        <p className="text-muted-foreground mb-10">
          Here’s a snapshot of my skills and experience
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl overflow-hidden shadow-xl bg-white"
        >
          <img
  src="resume-preview.png"
  alt="Deekshitha Puppala Resume Preview"
  className="w-full object-contain"
/>

        </motion.div>

        {/* Buttons */}
<div className="flex justify-center gap-6 mt-10">
  <a
    href="/deekshitha-portfolio/"
    className="px-6 py-3 rounded-xl border font-semibold"
  >
    Back
  </a>

  <button
    onClick={() => {
      import("canvas-confetti").then((confetti) =>
        confetti.default({ spread: 120, particleCount: 150 })
      );
    }}
    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
  >
    Done
  </button>
</div>
      </div>
    </section>
  );
}
