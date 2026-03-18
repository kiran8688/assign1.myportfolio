import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './IconWrapper';
import SectionHeader from './SectionHeader';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Get to know me." subtitle="About" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-card p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-700"></div>

            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 relative z-10">
              <h3 className="text-2xl font-display font-bold text-white whitespace-nowrap">Full-Stack Developer, Backend</h3>
            </div>

            <div className="relative z-10 min-h-[120px]">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-300 leading-relaxed text-lg font-light mb-6"
              >
                To obtain a Full-Stack Developer position in a growth-oriented organization where I can apply my knowledge of backend architecture and full-stack development to build robust, scalable applications. I am an aspirer for becoming top roles in AI/ML fields, committed to continuous learning and improving my technical and problem-solving skills. I seek an environment that supports mentorship and collaboration, allowing me to contribute effectively to organizational goals while growing as a professional Full-Stack Developer.
              </motion.p>
            </div>

            <div className="inline-flex items-center gap-2 text-blue-400 font-medium relative z-10 mt-auto">
              <Icon name="Sparkles" size={18} /> Available for new opportunities
            </div>
          </motion.div>

          {/* Contact Details Bento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 flex flex-col gap-6"
          >
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">Location</p>
              <p className="text-white font-medium flex items-center gap-2"><Icon name="MapPin" size={18} className="text-emerald-400"/> Hyderabad, IND</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">Education</p>
              <p className="text-white font-medium flex items-center gap-2"><Icon name="User" size={18} className="text-cyan-400"/> B.Tech CS (2024)</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:skirankumar2015@gmail.com" className="text-white font-medium flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Icon name="Mail" size={18} className="text-blue-400"/> skirankumar2015@gmail.com
              </a>
            </div>
            <a href="https://github.com/kiran8688" target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
              <span className="flex items-center gap-2 text-white font-medium"><Icon name="Github" size={20} /> GitHub</span>
              <Icon name="ExternalLink" size={16} className="text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
