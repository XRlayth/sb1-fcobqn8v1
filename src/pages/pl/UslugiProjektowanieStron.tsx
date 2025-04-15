import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ArrowRight } from 'lucide-react';
import Naglowek from '../components/Naglowek';
import Footer from '../../components/Footer';

function UslugiProjektowanieStron() {
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
                <Monitor className="w-12 h-12" />
              </div>
              <h1 className="text-7xl font-bold mb-8 tracking-wider">PROJEKTOWANIE STRON</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Tworzymy nowoczesne strony internetowe, które przyciągają i konwertują
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
                <h2 className="text-4xl font-bold mb-6">Nowoczesne Rozwiązania Webowe</h2>
                <p className="text-gray-400 mb-6">
                  Nasze usługi projektowania stron łączą najnowocześniejszą technologię z oszałamiającą 
                  estetyką, tworząc strony, które nie tylko wyglądają pięknie, ale także przynoszą 
                  rezultaty. Skupiamy się na doświadczeniu użytkownika, wydajności i optymalizacji konwersji.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Responsywny Design</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Optymalizacja Wydajności</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ArrowRight className="w-6 h-6 text-[#4facfe] flex-shrink-0" />
                    <span>Architektura Przyjazna SEO</span>
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
                  alt="Proces Projektowania Stron"
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest Testimonial Section */}
        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-wider text-center">NAJNOWSZY PROJEKT</h2>
              <div className="border border-white p-8 rounded-lg bg-black/50 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <a 
                    href="https://www.giantmoto.pl/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xl md:text-2xl font-bold hover:text-[#4facfe] transition-colors inline-block"
                  >
                    https://www.giantmoto.pl/
                  </a>
                  <div className="mt-4">
                    <p className="text-lg md:text-xl">Kategoria: Projektowanie Stron</p>
                    <p className="text-gray-400 mt-2 italic">
                      "Niedawno ukończona strona dla firmy Chiptuning! Zakończone ustawienie domeny w 44 godziny od pierwszej wiadomości od klienta! Tylko 44 godziny. Możemy stworzyć Twoją stronę jeszcze szybciej. ⚡"
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <img src="/5.png" alt="Giant Moto Referencja 1" className="w-full rounded-lg shadow-lg" />
                  <img src="/3.png" alt="Giant Moto Referencja 2" className="w-full rounded-lg shadow-lg" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default UslugiProjektowanieStron;