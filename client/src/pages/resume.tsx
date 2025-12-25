import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-background text-foreground py-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">
            My Resume
          </h1>
          <p className="text-muted-foreground">
            Review my resume or download it below
          </p>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-xl bg-white mb-10"
        >
          <img
            src="resume-preview.png"
            alt="Deekshitha Puppala Resume"
            className="w-full object-contain"
          />
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          

          {/* Done */}
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition"
          >
            Done
          </button>

          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-4 rounded-xl border border-border font-semibold hover:bg-muted/20 transition"
          >
            Back
          </button>

        </div>
      </div>
    </section>
  );
}
