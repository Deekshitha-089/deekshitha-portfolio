import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="min-h-screen bg-background text-foreground py-24 px-4">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My Resume 📄
          </h1>
          <p className="text-muted-foreground">
            View or download my resume below
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-2xl bg-card"
        >
          <img
            src="/deekshitha-portfolio/resume-preview.png"
            alt="Resume Preview"
            className="w-full object-contain"
          />
        </motion.div>

        <div className="flex justify-center mt-12">
          <a
            href="/deekshitha-portfolio/DEEKSHITHA_PUPPALA_RESUME.pdf"
            download
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}
