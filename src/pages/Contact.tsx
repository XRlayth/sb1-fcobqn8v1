import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Facebook, Twitter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-white">CONTACT US</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Ready to transform your business with AI? Get in touch with our team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-16 text-center">REACH OUT TO US</h2>
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.a
                href="https://facebook.com/neuralai"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-white/20 p-8 rounded-lg hover:border-[#4facfe] transition-all duration-300 flex items-center justify-center space-x-4 group"
              >
                <Facebook className="w-8 h-8 text-[#4facfe] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xl font-bold">Neural AI on Facebook</span>
              </motion.a>

              <motion.a
                href="https://x.com/neuralai"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="border border-white/20 p-8 rounded-lg hover:border-[#4facfe] transition-all duration-300 flex items-center justify-center space-x-4 group"
              >
                <Twitter className="w-8 h-8 text-[#4facfe] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xl font-bold">Neural AI on X</span>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Spline Section */}
        <section className="h-[500px] w-full relative">
          <Spline scene="https://prod.spline.design/di-MaYwy3xhfsS0H/scene.splinecode" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;