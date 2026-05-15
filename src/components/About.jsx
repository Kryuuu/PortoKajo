import { motion } from "framer-motion";
import { Film, Clapperboard, MonitorPlay, Sparkles, Palette } from "lucide-react";

const skills = [
  { name: "Creative Editing", icon: <Film size={20} /> },
  { name: "Cinematic Video", icon: <Clapperboard size={20} /> },
  { name: "Motion Graphics", icon: <MonitorPlay size={20} /> },
  { name: "Storytelling", icon: <Sparkles size={20} /> },
  { name: "Color Grading", icon: <Palette size={20} /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden group bg-white border border-black/5"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700 pointer-events-none" />
            
            <p className="text-gray-600 text-lg leading-relaxed relative z-10">
              Saya adalah lulusan SMK jurusan <strong className="text-gray-900 font-semibold">DKV (Desain Komunikasi Visual)</strong> yang memiliki passion mendalam dalam dunia video editing. 
              <br /><br />
              Saya berfokus pada pembuatan video cinematic, promosi, motion editing, dan storytelling visual dengan pendekatan kreatif serta detail yang kuat untuk menghasilkan karya yang tidak hanya indah secara visual, tetapi juga memiliki pesan yang bermakna.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-heading font-semibold text-gray-900">Keahlian & Fokus</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="glass-card bg-white p-4 flex items-center gap-4 hover:shadow-md transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
