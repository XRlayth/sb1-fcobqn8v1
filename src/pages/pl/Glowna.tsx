import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Monitor, Bot, PenTool, BarChart3, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import { useAuth } from '../../hooks/useAuth';
import CustomCursor from '../../components/CustomCursor';

const services = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Chatboty AI',
    description: 'Inteligentni asystenci konwersacji, którzy zwiększają zaangażowanie klientów 24/7.',
    link: '/główna/usługi/chatboty',
    size: 'small'
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Automatyzacja Połączeń',
    description: 'Zaawansowane rozwiązania do połączeń oparte na AI dla płynnej komunikacji.',
    link: '/główna/usługi/automatyzacja-połączeń',
    size: 'small'
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Projektowanie Stron',
    description: 'Nowoczesne, atrakcyjne strony internetowe, które przyciągają i konwertują. Nasz zespół tworzy strony, które nie tylko wyglądają pięknie, ale także przynoszą realne rezultaty biznesowe.',
    link: '/główna/usługi/projektowanie-stron',
    size: 'large'
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'Rozwiązania AI',
    description: 'Dostosowane rozwiązania sztucznej inteligencji dla Twoich specyficznych potrzeb.',
    link: '/główna/usługi/rozwiązania-ai',
    size: 'small'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Tworzenie Treści',
    description: 'Tworzenie angażujących treści, które przyciągają odbiorców i przynoszą rezultaty.',
    link: '/główna/usługi/tworzenie-treści',
    size: 'small'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Marketing Cyfrowy',
    description: 'Zwiększ swoją obecność online dzięki strategiom marketingowym opartym na AI. Pomagamy firmom rozwijać ich cyfrowy ślad i osiągać wymierne rezultaty.',
    link: '/główna/usługi/marketing-cyfrowy',
    size: 'large'
  }
];

function Glowna() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <CustomCursor />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center px-4 py-20">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="z-10"
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-wider text-white">
                Przyciągamy Uwagę.<br />Zyskujesz Klientów.
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-400">
                Przekształć swoją firmę dzięki najnowocześniejszym rozwiązaniom AI, które przynoszą realne rezultaty. 
                Wyróżnij się w cyfrowym świecie i obserwuj, jak Twój rozwój przyspiesza.
              </p>
              <Link 
                to={isAuthenticated ? "/główna/panel" : "/główna/rozpocznij"}
                className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                ROZPOCZNIJ
              </Link>
            </motion.div>
            <div className="h-[500px] w-full">
              <Spline scene="https://prod.spline.design/di-MaYwy3xhfsS0H/scene.splinecode" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-wider text-white">O NEURAL AI</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                Nie jesteśmy kolejną agencją marketingową. Jesteśmy pionierami w rozwiązaniach 
                marketingowych opartych na AI, które przynoszą wymierne rezultaty. Nasze podejście 
                łączy najnowocześniejszą sztuczną inteligencję ze sprawdzonymi strategiami 
                marketingowymi, aby pomóc firmom rozwijać się w erze cyfrowej.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/główna/o-nas"
                  className="px-8 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Dowiedz się więcej o nas
                </Link>
                <Link
                  to="/główna/kontakt"
                  className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Kontakt
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold text-center mb-16 tracking-wider text-white">NASZE USŁUGI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services
                .filter(service => service.size === 'large')
                .map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-white p-8 rounded-lg hover:border-white transition-all duration-300 group"
                  >
                    <div className="mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-white hover:text-[#4facfe] transition-colors"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Dowiedz się więcej
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {services
                .filter(service => service.size === 'small')
                .map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-white p-6 rounded-lg hover:border-white transition-all duration-300 group"
                  >
                    <div className="mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-white hover:text-[#4facfe] transition-colors"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Dowiedz się więcej
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
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
              <h2 className="text-3xl md:text-7xl font-bold mb-16 tracking-wider text-center">NAJNOWSZA REFERENCJA</h2>
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

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-wider text-white">ZBUDUJMY PRZYSZŁOŚĆ</h2>
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Glowna;