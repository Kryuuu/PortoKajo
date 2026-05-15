import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink } from "lucide-react";

const videos = [
  { id: "41_circcSss", title: "Cinematic Showcase 1", category: "Cinematic" },
  { id: "plPPh9rpgdM", title: "Promotional Video 1", category: "Promotional" },
  { id: "43RW0rywKNs", title: "Creative Edit 1", category: "Creative Edit" },
  { id: "Z5fTcdokN9M", title: "Cinematic Showcase 2", category: "Cinematic" },
  { id: "oRdOSa0SQos", title: "Promotional Video 2", category: "Promotional" },
  { id: "Ek355ggPeBY", title: "Creative Edit 2", category: "Creative Edit" },
];

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer rounded-2xl overflow-hidden glass-card bg-white border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/10"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md text-blue-600 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <Play size={24} className="fill-current ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 block">
                  {video.category}
                </span>
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-card max-w-2xl mx-auto p-8 md:p-10 border border-black/5 relative overflow-hidden group bg-white">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold mb-6 text-gray-900 relative z-10">Ingin melihat lebih banyak karya?</h3>
            <a
              href="https://www.foriio.com/Ikajunz"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex sm:inline-flex justify-center items-center gap-3 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-gray-900/20 w-full sm:w-auto"
            >
              Lihat Selengkapnya di Foriio <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-gray-900/95 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[101]"
              onClick={() => setActiveVideo(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
