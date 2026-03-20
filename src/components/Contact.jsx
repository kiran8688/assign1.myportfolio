import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin } from 'lucide-react';

const Contact = () => {
  const glassInputStyle = "w-full bg-white/[0.01] backdrop-blur-2xl backdrop-saturate-[1.8] border border-white/10 rounded-2xl px-4 py-3 text-slate-200 placeholder-slate-500 shadow-glass focus:bg-white/10 focus:ring-1 focus:ring-white/30 focus:outline-none transition-all duration-300 ease-out";
  const glassButtonStyle = "inline-flex items-center justify-center gap-3 px-10 py-4 mt-2 bg-white/[0.01] backdrop-blur-2xl backdrop-saturate-[1.8] border border-white/10 text-white rounded-full font-medium shadow-glass hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out mx-auto";

  return (
    <motion.section id="contact"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      className="py-32 text-center relative border-t border-white/10 mt-12 px-6 lg:px-24 z-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-5xl text-white mb-6">Initialize Connection</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
          Currently seeking full-time opportunities. If you're looking for a developer who understands both the backend architecture and the visual DOM, my inbox is open.
        </p>

        <form
          action={`https://formsubmit.co/${import.meta.env.VITE_FORMSUBMIT_TOKEN || 'skirankumar.office@gmail.com'}`}
          method="POST"
          className="max-w-xl mx-auto flex flex-col gap-4 text-left"
        >
          {/* Honeypot & configuration for FormSubmit */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className={glassInputStyle}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className={glassInputStyle}
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            className={glassInputStyle}
          />

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message..."
            className={`${glassInputStyle} resize-none`}
          ></textarea>

          <button
            type="submit"
            className={glassButtonStyle}
          >
            <Terminal size={18} /> Transmit Data
          </button>
        </form>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between text-xs font-['JetBrains_Mono',monospace] text-slate-500">
          <p>© {new Date().getFullYear()} ENGINEERED BY KIRAN KUMAR SINGARAM</p>
          <p className="flex items-center justify-center gap-2 mt-4 md:mt-0"><MapPin size={12}/> HYDERABAD, IND SERVER</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;