import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import Naglowek from '../components/Naglowek';
import Footer from '../../components/Footer';

function ONas() {
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
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-white">O NEURAL AI</h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Jesteśmy agencją marketingową nowej generacji, która wykorzystuje moc AI do transformacji 
                sposobu, w jaki firmy łączą się ze swoją publicznością i napędzają wzrost.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nasza Wizja</h3>
                <p className="text-gray-400">
                  Rewolucjonizowanie marketingu cyfrowego poprzez płynne łączenie ludzkiej kreatywności 
                  ze sztuczną inteligencją, tworząc bezprecedensowe możliwości rozwoju dla naszych klientów.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nasze Podejście</h3>
                <p className="text-gray-400">
                  Łączymy analizę danych z kreatywnością, wykorzystując najnowocześniejszą technologię AI 
                  do dostarczania rozwiązań marketingowych, które konsekwentnie przewyższają tradycyjne metody.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nasz Wpływ</h3>
                <p className="text-gray-400">
                  Nasi klienci doświadczają średnio 300% wzrostu zaangażowania i 150% wzrostu 
                  współczynnika konwersji dzięki naszym strategiom marketingowym wspomaganym przez AI.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Nasza Historia</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-12">
                Założona w 2024 roku, Neural AI powstała z prostej, ale potężnej obserwacji: tradycyjne 
                agencje marketingowe nie nadążały za postępem technologicznym. Dostrzegliśmy szansę na 
                zrewolucjonizowanie branży poprzez integrację sztucznej inteligencji w każdym aspekcie 
                marketingu cyfrowego.
                <br /><br />
                Nasz zespół łączy doświadczonych specjalistów marketingu z ekspertami AI, tworząc 
                unikalną kombinację kompetencji, która napędza bezprecedensowe wyniki dla naszych klientów. 
                Opracowaliśmy autorskie algorytmy AI, które analizują trendy rynkowe, przewidują zachowania 
                konsumentów i optymalizują strategie marketingowe w czasie rzeczywistym.
                <br /><br />
                Dziś z dumą obsługujemy klientów z różnych branż, od startupów po przedsiębiorstwa, 
                pomagając im osiągać cele rozwojowe poprzez nasze innowacyjne podejście do marketingu cyfrowego.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="główna/usługi"
                  className="px-8 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Zobacz Nasze Usługi
                </Link>
                <Link
                  to="główna/kontakt"
                  className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Skontaktuj się
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ONas;
