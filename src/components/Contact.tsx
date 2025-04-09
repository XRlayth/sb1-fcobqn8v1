import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-white">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-16 text-center">
                {t('contact.reachOut')}
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.a
                href="https://facebook.com/neuralai"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-white/20 p-8 rounded-lg hover:border-white transition-all duration-300 flex items-center justify-center space-x-4 group"
              >
                <Facebook className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="https://x.com/neuralai"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="border border-white/20 p-8 rounded-lg hover:border-white transition-all duration-300 flex items-center justify-center space-x-4 group"
              >
                <Twitter className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/company/neuralai"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="border border-white/20 p-8 rounded-lg hover:border-white transition-all duration-300 flex items-center justify-center space-x-4 group"
              >
                <Linkedin className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="https://instagram.com/neuralai"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="border border-white/20 p-8 rounded-lg hover:border-white transition-all duration-300 flex items-center justify-center space-x-4 group"
              >
                <Instagram className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </section>

        <section className="h-[500px] w-full relative">
          <Spline scene="https://prod.spline.design/di-MaYwy3xhfsS0H/scene.splinecode" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;