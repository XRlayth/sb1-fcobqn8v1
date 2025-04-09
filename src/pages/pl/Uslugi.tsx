import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Monitor, Bot, PenTool, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const services = [
  {
    icon: <MessageSquare className="w-12 h-12" />,
    title: 'Chatboty AI',
    description: 'Inteligentni asystenci konwersacji, którzy zwiększają zaangażowanie klientów 24/7.',
    link: '/usługi/chatboty'
  },
  {
    icon: <Phone className="w-12 h-12" />,
    title: 'Automatyzacja Połączeń',
    description: 'Zaawansowane rozwiązania do połączeń oparte na AI dla płynnej komunikacji.',
    link: '/usługi/automatyzacja-połączeń'
  },
  {
    icon: <Monitor className="w-12 h-12" />,
    title: 'Projektowanie Stron',
    description: 'Nowoczesne, atrakcyjne strony internetowe, które przyciągają i konwertują.',
    link: '/usługi/projektowanie-stron'
  },
  {
    icon: <Bot className="w-12 h-12" />,
    title: 'Rozwiązania AI',
    description: 'Dostosowane rozwiązania sztucznej inteligencji dla Twoich specyficznych potrzeb.',
    link: '/usługi/rozwiązania-ai'
  },
  {
    icon: <PenTool className="w-12 h-12" />,
    title: 'Tworzenie Treści',
    description: 'Tworzenie angażujących treści, które przyciągają odbiorców i przynoszą rezultaty.',
    link: '/usługi/tworzenie-treści'
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: 'Marketing Cyfrowy',
    description: 'Zwiększ swoją obecność online dzięki strategiom marketingowym opartym na AI.',
    link: '/usługi/marketing-cyfrowy'
  }
];

function Uslugi() {
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
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-white">NASZE USŁUGI</h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Odkryj naszą kompleksową gamę rozwiązań opartych na AI, zaprojektowanych, 
                aby transformować działania Twojej firmy.
              </p>
              <Link 
                to="/kontakt" 
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                Skontaktuj się
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-white p-8 rounded-lg hover:border-white transition-all duration-300 group"
                >
                  <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-white hover:text-[#4facfe] transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Dowiedz się więcej, zobacz jak ta usługa zmieniła firmy
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Uslugi;