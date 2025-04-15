import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ArrowRight } from 'lucide-react';
import Naglowek from '../components/Naglowek';
import Footer from '../../components/Footer';

function UslugiMarketingCyfrowy() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-block p-4 rounded-full border border-white mb-8">
                <BarChart3 className="w-12 h-12" />
              </div>
              <h1 className="text-7xl font-bold mb-8 tracking-wider">MARKETING CYFROWY</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Zwiększ swoją obecność online dzięki strategiom marketingowym opartym na AI
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Kompleksowe Rozwiązania Marketingowe</h2>
                <p className="text-gray-400 mb-6">
                  Nasza platforma marketingu cyfrowego oparta na AI pomaga optymalizować kampanie, 
                  docierać do właściwej grupy docelowej i maksymalizować ROI we wszystkich kanałach cyfrowych.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Optymalizacja SEO i SEM</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Marketing w Mediach Społecznościowych</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Analityka i Raportowanie</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Panel Marketingu Cyfrowego"
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Historie Sukcesu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Platforma E-commerce</h3>
                <p className="text-gray-400 mb-4">
                  Wydajność reklam cyfrowych wzrosła o 200%
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">200%</span>
                  <span className="text-sm text-gray-400">Lepsza Wydajność</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Dostawca B2B</h3>
                <p className="text-gray-400 mb-4">
                  Generowanie leadów wzrosło o 125%
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">125%</span>
                  <span className="text-sm text-gray-400">Więcej Leadów</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Marka Detaliczna</h3>
                <p className="text-gray-400 mb-4">
                  ROI marketingu wzrósł o 85%
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">85%</span>
                  <span className="text-sm text-gray-400">Wyższe ROI</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default UslugiMarketingCyfrowy;