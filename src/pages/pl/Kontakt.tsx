import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { MessageSquare } from 'lucide-react';
import Naglowek from '../components/Naglowek';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

function Kontakt() {
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
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-white">KONTAKT</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Gotowy na transformację swojego biznesu z AI? Skontaktuj się z naszym zespołem.
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
              <h2 className="text-4xl font-bold mb-16 text-center">SKONTAKTUJ SIĘ Z NAMI</h2>
              <ContactForm />
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border border-white/20 p-8 rounded-lg hover:border-white transition-all duration-300 flex items-center justify-center space-x-4 group"
            >
              <MessageSquare className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold">Porozmawiaj z nami na WhatsApp</span>
            </motion.a>
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

export default Kontakt;