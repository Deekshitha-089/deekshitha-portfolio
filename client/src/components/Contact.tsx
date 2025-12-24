import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-fixed bg-center bg-cover"
      style={{
  backgroundImage: "url('./contact-bg.jpg')",
}}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-background/90 dark:bg-background/80 backdrop-blur-xl rounded-3xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden">
            
            {/* LEFT INFO PANEL */}
            <div className="p-10 bg-[#1e293b] text-white">
              <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
              <p className="text-slate-300 mb-10 leading-relaxed">
                Have a project idea or just want to say hi?  
                I love building clean, meaningful, and creative interfaces.
              </p>

              <div className="space-y-8 text-sm">
                <div className="space-y-1">
                  <h4 className="font-semibold">Email ✉️</h4>
                  <p className="text-slate-300">deekshitha@email.com</p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold">Location 📍</h4>
                  <p className="text-slate-300">India</p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold">Availability 🤝</h4>
                  <p className="text-slate-300">Open to Internships</p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="p-10 bg-background">
              <form className="space-y-6">
                <input
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <input
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-secondary"
                />

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
