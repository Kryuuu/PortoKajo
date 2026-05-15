import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card bg-white p-8 md:p-20 border border-black/5 relative overflow-hidden group shadow-sm"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 relative z-10">
            Siap bekerja sama dalam project <span className="text-gradient">video editing?</span>
          </h2>
          
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Mari diskusikan ide Anda dan wujudkan visual yang luar biasa bersama. Saya terbuka untuk berbagai jenis project freelance maupun kolaborasi kreatif.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-10 w-full">
            <a
              href="mailto:contact@example.com" 
              className="px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              Hubungi Saya <Send size={18} />
            </a>
            
            <a
              href="#portfolio"
              className="px-8 py-4 w-full sm:w-auto rounded-full bg-white hover:bg-gray-50 transition-all hover:scale-105 flex items-center justify-center gap-2 font-medium text-gray-800 border border-gray-200 shadow-sm"
            >
              Lihat Portofolio Lengkap
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-center gap-6 relative z-10">
            <SocialLink href="#" icon={<FaInstagram size={22} />} />
            <SocialLink href="#" icon={<FaLinkedin size={22} />} />
            <SocialLink href="#" icon={<Mail size={22} />} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
