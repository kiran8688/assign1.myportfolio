import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    try {
      const res = await fetch("https://formsubmit.co/ajax/skirankumar2015@gmail.com", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-24 relative z-10 pb-24">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader title="Let's build together." subtitle="Contact" align="center" />
        <p className="text-slate-400 text-lg font-light mb-12">
          Currently open for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500"></div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 pl-1">Name</label>
                <input type="text" name="name" required className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 pl-1">Email</label>
                <input type="email" name="email" required className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-slate-300 pl-1">Message</label>
              <textarea required name="message" rows="4" className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/5 transition-all resize-none" placeholder="Hello Kiran, I'd like to discuss..."></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>Send Message <Sparkles size={18} /></>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-blue-400 font-medium"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
