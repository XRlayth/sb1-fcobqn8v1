import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Monitor, Bot, PenTool, BarChart3, ArrowRight, UserX, Users, Building2, Target, Shield, Award, Eye, ChevronDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import Naglowek from '../../components/Naglowek';
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

const differentiators = [
  {
    icon: <Shield className="w-12 h-12 text-[#f000000] group-hover:scale-110 transition-transform duration-300" />,
    title: 'GWARANCJA',
    description: 'Wygrywamy tylko wtedy, gdy Ty wygrywasz. To podstawa dobrego partnerstwa. Nie ponosisz całego ryzyka, dzielimy się nim.'
  },
  {
    icon: <Target className="w-12 h-12 text-[#f000000] group-hover:scale-110 transition-transform duration-300" />,
    title: 'REZULTATY',
    description: 'Naszym priorytetem jest osiąganie wyników. Mniej gadania, więcej działania.'
  },
  {
    icon: <Award className="w-12 h-12 text-[#f000000] group-hover:scale-110 transition-transform duration-300" />,
    title: 'DOŚWIADCZENIE',
    description: 'Nasz zespół łączy dekady doświadczenia w marketingu z najnowocześniejszą technologią AI.'
  },
  {
    icon: <Eye className="w-12 h-12 text-[#f000000] group-hover:scale-110 transition-transform duration-300" />,
    title: 'PRZEJRZYSTOŚĆ',
    description: 'Jasna komunikacja, szczegółowe raporty i brak ukrytych opłat. Zawsze wiesz, gdzie trafia Twoja inwestycja.'
  }
];

function Glowna() {
  const { isAuthenticated } = useAuth();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [hasPassedTestimonial, setHasPassedTestimonial] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const testimonialSection = document.getElementById('testimonial-section');
      if (testimonialSection) {
        const rect = testimonialSection.getBoundingClientRect();
        const hasEntered = rect.top <= window.innerHeight;
        const hasPassed = rect.bottom <= 0;
        
        setShowScrollButton(hasEntered && !hasPassed);
        setHasPassedTestimonial(hasPassed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <CustomCursor />
      <Naglowek />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center px-4 py-20">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="z-10 flex flex-col items-center lg:items-start justify-center text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-wider text-white relative">
                Pozyskaj 
                <span className="relative inline-block mx-2">
                  Więcej
                  <svg className="absolute -z-10 opacity-20" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 L100,0 L100,100 Z" fill="url(#graph-gradient)" />
                  </svg>
                </span>
                Klientów<br />Poprzez 
                <span className="burning-text relative inline-block mx-2">
                  Odpalenie
                </span>
                Uwagi.<br />
                <span className="relative inline-block">
                  Gwarantowane Rezultaty.
                  <motion.div
                    className="absolute -inset-1 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                  >
                    <Shield className="w-full h-full text-white opacity-100" />
                  </motion.div>
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-400">
                 Odpalaj i przyciągaj uwagę, wdrażaj nowoczesne rozwiązania marketingu cyfrowego.
                 Przekształć swój biznes z realnymi wynikami i obserwuj, jak Twój rozwój przyspiesza.
              </p>
              <button 
                onClick={scrollToContact}
                className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
              Tak, chcę tego!
              </button>
            </motion.div>
            {!isMobile && (
              <div className="h-[500px] w-full">
                <Spline scene="https://prod.spline.design/di-MaYwy3xhfsS0H/scene.splinecode" />
              </div>
            )}
          </div>
        </section>

        {/* Marketing Challenges Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">Marketing jest ważny...</h2>
              <p className="text-xl text-gray-400 text-center mb-12">
                Jednak na Twojej liście jest już 101 rzeczy do zrobienia.<br />
                I wszystkie są ważne!
              </p>
              <h3 className="text-3xl md:text-5xl font-bold text-center mb-16">
                Jak więc najlepiej<br />wdrożyć marketing?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-white/20 p-8 rounded-lg text-center group hover:border-white/40 transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    <UserX className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">ZROBIĆ WSZYSTKO SAMEMU?</h4>
                  <p className="text-gray-400">
                    Jeśli masz mało do zrobienia, to nie problem.<br />
                    Jednak jeśli jesteś zajęty... to nie jest wykonalne.
                  </p>
                </div>

                <div className="border border-white/20 p-8 rounded-lg text-center group hover:border-white/40 transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    <Users className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">ZATRUDNIĆ NOWYCH PRACOWNIKÓW?</h4>
                  <p className="text-gray-400">
                    Znalezienie dobrych ludzi jest trudne, szkolenie jest kosztowne.<br />
                    Nawet jeśli znajdziesz idealną osobę... nadal polegasz na jednej osobie.
                  </p>
                </div>

                <div className="border border-white/20 p-8 rounded-lg text-center group hover:border-white/40 transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    <Building2 className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">ZATRUDNIĆ AGENCJĘ?</h4>
                  <p className="text-gray-400">
                    Nie masz budżetu marketingowego w wysokości dziesiątek tysięcy euro miesięcznie? Cóż, wtedy Twoim kontem często zajmuje się stażysta asystenta asystenta. Nieidealne rozwiązanie.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">OK... Ale co Nas wyróżnia?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {differentiators.map((diff, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-white/20 p-8 rounded-lg hover:border-white/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {diff.icon}
                      <h3 className="text-2xl font-bold">{diff.title}</h3>
                    </div>
                    <p className="text-gray-400">{diff.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Let's Build The Future Section with Contact Form */}
        <section id="contact-section" className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-wider">ZBUDUJMY PRZYSZŁOŚĆ</h2>
              <p className="text-xl mb-16">
                Skontaktuj się z nami, aby dowiedzieć się więcej lub umówić się na{' '}
                <span className="relative inline-block">
                  <span className="text-green-400">Darmową</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-transparent"></span>
                </span>
                {' '}Konsultację Marketingową
              </p>
              <ContactForm />
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
        <section id="testimonial-section" className="py-20 px-4 border-t border-gray-800">
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
                  <img src="https://raw.githubusercontent.com/XRlayth/zdjecia/main/Strona1.png" alt="Giant Moto Referencja 1" className="w-full rounded-lg shadow-lg" />
                  <img src="https://raw.githubusercontent.com/XRlayth/zdjecia/main/strona2.jpg" alt="Giant Moto Referencja 2" className="w-full rounded-lg shadow-lg" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Nie zastanawiaj się zbyt długo.<br />
                Podejmij działanie, przekształć swój biznes.<br />
                <span className="relative inline-block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Gwarantowane.
                </span>
              </h2>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                <Link
                  to="/główna/kontakt"
                  className="pill-button pill-red"
                  onClick={scrollToTop}
                >
                  <span className="pill-shine"></span>
                  Chcę konsultację!
                </Link>
                <a
                  href="https://netflix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-button pill-blue"
                >
                  <span className="pill-shine"></span>
                  Mm, nie chcę.
                </a>
              </div>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
                <p className="text-red-500">Podejmij działanie teraz, umów się na darmową konsultację marketingową.</p>
                <p className="text-blue-500">Zostań tam gdzie jesteś.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {showScrollButton && !hasPassedTestimonial && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
          className="scroll-button"
        >
          <span>Przewiń w dół</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}

export default Glowna;