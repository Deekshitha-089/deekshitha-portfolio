import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  const handleDone = () => {
    // 🎉 CONFETTI BURST
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#ffc2c7", "#b6e5d8", "#fbe5c8", "#8fdde7"],
    });

    // ⏳ Go back home after 1.5s
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-background text-foreground py-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">
            My Resume 📄
          </h1>
          <p className="text-muted-foreground">
            View or download my resume below
          </p>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-xl bg-white"
        >
          <img
            src="/resume-preview.png"
            alt="Deekshitha Puppala Resume Preview"
            className="w-full object-contain"
          />
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

          {/* Download */}
          <a
            href="/DEEKSHITHA_PUPPALA_RESUME.pdf"
            download
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition text-center"
          >
            Download Resume
          </a>

          {/* Done */}
          <button
            onClick={handleDone}
            className="px-8 py-4 rounded-xl border border-border font-semibold hover:bg-muted transition"
          >
            Done ✅
          </button>

        </div>

      </div>
    </section>
  );
}
