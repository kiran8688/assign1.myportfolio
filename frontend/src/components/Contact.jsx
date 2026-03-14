import React, { useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

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
      const response = await axios.post('http://localhost:8000/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 bg-background lg:ml-[100px]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="text-center pb-8">
          <h2 className="text-3xl font-bold uppercase text-secondary relative inline-block pb-4 mb-4">
            Contact
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gray-300"></span>
            <span className="absolute bottom-[0px] left-1/2 -translate-x-1/2 w-10 h-[3px] bg-primary"></span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 hover:shadow-md transition-shadow group cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-1">Location:</h4>
                <p className="text-gray-600 text-sm">Kukatpally, Hyderabad, Telangana 500055</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 hover:shadow-md transition-shadow group cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-1">Email:</h4>
                <p className="text-gray-600 text-sm">skirankumar2015@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 hover:shadow-md transition-shadow group cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <FaPhone />
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-1">Call:</h4>
                <p className="text-gray-600 text-sm">+91 8099951768</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm w-full">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-y"
                  required
                ></textarea>
              </div>

              <div className="text-center mb-4">
                {status === 'loading' && <div className="text-blue-600">Loading...</div>}
                {status === 'success' && <div className="text-green-600 bg-green-50 py-2 rounded">Your message has been sent. Thank you!</div>}
                {status === 'error' && <div className="text-red-600 bg-red-50 py-2 rounded">There was an error sending your message.</div>}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
                  disabled={status === 'loading'}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
