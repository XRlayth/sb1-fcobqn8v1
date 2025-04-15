import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, ArrowRight } from 'lucide-react';
import Naglowek from '../components/Naglowek';
import Footer from '../../components/Footer';

function UslugiTworzenieTresci() {
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
                <PenTool className="w-12 h-12" />
              </div>
              <h1 className="text-7xl font-bold mb-8 tracking-wider">TWORZENIE TREŚCI</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Tworzenie angażujących treści, które przyciągają odbiorców i przynoszą rezultaty
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
                <h2 className="text-4xl font-bold mb-6">Rozwiązania Tworzenia Treści z AI</h2>
                <p className="text-gray-400 mb-6">
                  Nasza platforma do tworzenia treści oparta na AI pomaga w produkcji wysokiej jakości, 
                  angażujących treści dla wszystkich kanałów. Od wpisów na blogu po media społecznościowe, 
                  zapewniamy, że Twój przekaz trafia do docelowej grupy odbiorców.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Artykuły Zoptymalizowane pod SEO</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Treści dla Mediów Społecznościowych</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Kampanie E-mail Marketingowe</span>
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
                  src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Proces Tworzenia Treści"
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
                <h3 className="text-xl font-bold mb-4">Startup Technologiczny</h3>
                <p className="text-gray-400 mb-4">
                  Ruch na blogu wzrósł o 300% dzięki zoptymalizowanym treściom
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">300%</span>
                  <span className="text-sm text-gray-400">Wzrost Ruchu</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Marka E-commerce</h3>
                <p className="text-gray-400 mb-4">
                  Zaangażowanie w mediach społecznościowych wzrosło o 150%
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">150%</span>
                  <span className="text-sm text-gray-400">Więcej Zaangażowania</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="border border-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4">Firma SaaS</h3>
                <p className="text-gray-400 mb-4">
                  Konwersje z kampanii e-mail wzrosły o 75%
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4facfe]">75%</span>
                  <span className="text-sm text-gray-400">Wyższa Konwersja</span>
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

export default UslugiTworzenieTresci;