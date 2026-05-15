import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Glow Effects - Adjusted for light mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card mb-8 border border-black/5 shadow-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
          <span className="text-sm font-medium tracking-wide text-gray-700">Available for Freelance Work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight text-gray-900"
        >
          Hi, I'm <span className="text-gradient">Ajis Mustafa</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl text-gray-600 mb-8 font-heading font-medium tracking-wide flex items-center justify-center gap-3"
        >
          Video Editor <span className="text-blue-600 opacity-30">|</span> DKV Graduate
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl mb-12 leading-relaxed"
        >
          Mengubah ide menjadi visual yang menarik melalui editing video yang kreatif, cinematic, dan profesional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
        >
          <a
            href="#portfolio"
            className="group relative px-8 py-4 w-full sm:w-auto bg-gray-900 text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-2xl shadow-gray-900/20"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            <span className="relative z-10 flex items-center justify-center gap-2 transition-colors">
              Lihat Portofolio <Play size={18} className="fill-current" />
            </span>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 w-full sm:w-auto rounded-full glass-card hover:bg-gray-50 transition-all hover:scale-105 flex items-center justify-center gap-2 font-medium text-gray-800"
          >
            Hubungi Saya <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
