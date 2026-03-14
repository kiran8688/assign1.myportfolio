import React, { useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // In production, configure API URL correctly
      await axios.post('http://localhost:8000/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="contact" className="py-24 bg-surface lg:ml-[100px] relative overflow-hidden">
      {/* Dark Elegant Gold Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none -z-0 mix-blend-luminosity"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}
      ></div>

      {/* Decorative gradient orb */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/3 pointer-events-none -z-0"></div>

      {/* Abstract Design Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-white/5 rotate-45 pointer-events-none -z-0"></div>
      <svg className="absolute top-1/2 right-10 w-24 h-24 opacity-20 text-primary pointer-events-none -z-0" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="50,10 90,90 10,90" />
      </svg>

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >

        <div className="text-center pb-16">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold uppercase text-white relative inline-block pb-4 mb-4 font-heading tracking-wider">
            Get in <span className="text-primary">Touch</span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-white/20"></span>
            <span className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-primary"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-secondary max-w-2xl mx-auto mt-4 text-lg">
            Let's discuss your next project or any opportunities. Feel free to reach out via the form below or contact details.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Contact Details Column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <motion.div variants={itemVariants} className="glass-card flex gap-5 group items-center p-6 border-l-4 border-l-transparent hover:border-l-primary transition-all">
              <div className="w-14 h-14 bg-background/50 border border-white/10 text-primary rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary group-hover:text-background transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1 tracking-wide">Location:</h4>
                <p className="text-secondary group-hover:text-white/80 transition-colors">Kukatpally, Hyderabad, Telangana 500055</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card flex gap-5 group items-center p-6 border-l-4 border-l-transparent hover:border-l-primary transition-all">
              <div className="w-14 h-14 bg-background/50 border border-white/10 text-primary rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary group-hover:text-background transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1 tracking-wide">Email:</h4>
                <p className="text-secondary group-hover:text-white/80 transition-colors break-all">skirankumar2015@gmail.com</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card flex gap-5 group items-center p-6 border-l-4 border-l-transparent hover:border-l-primary transition-all">
              <div className="w-14 h-14 bg-background/50 border border-white/10 text-primary rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary group-hover:text-background transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110">
                <FaPhone />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1 tracking-wide">Call:</h4>
                <p className="text-secondary group-hover:text-white/80 transition-colors">+91 8099951768</p>
              </div>
            </motion.div>
          </div>

          {/* Form Column */}
          <motion.div variants={itemVariants} className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-2xl w-full">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="input-glass"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="input-glass"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="input-glass"
                  required
                />
              </div>
              <div className="mb-8">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Your Message..."
                  className="input-glass resize-none"
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              <div className="text-center mb-6 min-h-[40px]">
                {status === 'loading' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending message...</span>
                  </motion.div>
                )}
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 bg-green-400/10 border border-green-400/20 py-3 px-4 rounded-md inline-block">
                    Your message has been sent successfully. Thank you!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 bg-red-400/10 border border-red-400/20 py-3 px-4 rounded-md inline-block">
                    There was an error sending your message. Please try again later.
                  </motion.div>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="gold-button flex items-center justify-center gap-3 mx-auto"
                  disabled={status === 'loading'}
                >
                  <FaPaperPlane className={status === 'loading' ? 'animate-pulse' : ''} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
