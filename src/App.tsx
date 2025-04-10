import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Monitor, Bot, PenTool, BarChart3, ArrowRight, UserX, Users, Building2, Target, Shield, Award, Eye, ChevronDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { useAuth } from './hooks/useAuth';
import CustomCursor from './components/CustomCursor';

const services = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that enhance customer engagement 24/7.',
    link: 'main/services/chatbots',
    size: 'small'
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Phone Callers',
    description: 'Advanced AI-powered calling solutions for seamless communication.',
    link: 'main/services/phone-callers',
    size: 'small'
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Web Design',
    description: 'Stunning, modern web experiences that captivate and convert. Our team creates websites that not only look beautiful but drive real business results.',
    link: 'main/services/web-design',
    size: 'large'
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'Custom AI Solutions',
    description: 'Tailored artificial intelligence solutions for your specific needs.',
    link: 'main/services/custom-ai',
    size: 'small'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Content Creation',
    description: 'Craft compelling content that engages your audience and drives results.',
    link: 'main/services/content-creation',
    size: 'small'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Boost your online presence with AI-powered digital marketing strategies. We help businesses grow their digital footprint and achieve measurable results.',
    link: 'main/services/digital-marketing',
    size: 'large'
  }
];

const differentiators = [
  {
    icon: <Shield className="w-12 h-12 text-[#f000000] group-hover:scale-110 transition-transform duration-300" />,
    title: 'GUARANTEE',
    description: 'We only win if you win. That\'s the basis for a good partnership. You won\'t carry all the risk, we\'ll share it.'
  },
  {
    icon: <Target className="w-12 h-12 text-[#f000000] group-hover:scale-110 transition-transform duration-300" />,
    title: 'RESULT',
    description: 'Our first priority is to get you results. Less talk, more walk.'
  },
  {
    icon: <Award className="w-12 h-12 text-[#f000000] group-hover:scale-110 transition-transform duration-300" />,
    title: 'EXPERTISE',
    description: 'Our team combines decades of marketing experience with cutting-edge AI technology.'
  },
  {
    icon: <Eye className="w-12 h-12 text-[#f000000] group-hover:scale-110 transition-transform duration-300" />,
    title: 'TRANSPARENCY',
    description: 'Clear communication, detailed reporting, and no hidden fees. You\'ll always know where your investment goes.'
  }
];

function App() {
  const { isAuthenticated } = useAuth();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [hasPassedTestimonial, setHasPassedTestimonial] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
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
      <Header />
      
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
                Get 
                <span className="relative inline-block mx-2">
                  More
                  <svg className="absolute -z-10 opacity-20" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 L100,0 L100,100 Z" fill="url(#graph-gradient)" />
                  </svg>
                </span>
                Clients<br />By 
                <span className="burning-text relative inline-block mx-2">
                  Igniting
                </span>
                Attention.<br />
                <span className="relative inline-block">
                  Guaranteed
                  <motion.div
                    className="absolute -inset-1 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                  >
                    <Eye className="w-full h-full text-white opacity-65" />
                  </motion.div>
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-400">
                Transform your business with cutting-edge AI solutions that deliver real results. 
                Stand out in the digital landscape and watch your growth skyrocket.
              </p>
              <button 
                onClick={scrollToContact}
                className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                Yes, I want that!
              </button>
            </motion.div>
            <div className="h-[500px] w-full">
              <Spline scene="https://prod.spline.design/di-MaYwy3xhfsS0H/scene.splinecode" />
            </div>
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
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">Marketing is important...</h2>
              <p className="text-xl text-gray-400 text-center mb-12">
                However, there are already 101 things on your to-do list.<br />
                And they are all important!
              </p>
              <h3 className="text-3xl md:text-5xl font-bold text-center mb-16">
                So How Do You Get The<br />Most Out Of Your Marketing?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-white/20 p-8 rounded-lg text-center group hover:border-white/40 transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    <UserX className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">DO EVERYTHING YOURSELF?</h4>
                  <p className="text-gray-400">
                    If you have little to do, it's not a problem.<br />
                    However, if you're busy... this is not feasible.
                  </p>
                </div>

                <div className="border border-white/20 p-8 rounded-lg text-center group hover:border-white/40 transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    <Users className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">HIRE NEW STAFF?</h4>
                  <p className="text-gray-400">
                    Finding good people is difficult, training them is expensive.<br />
                    Even if you find the perfect person... You still rely on one individual.
                  </p>
                </div>

                <div className="border border-white/20 p-8 rounded-lg text-center group hover:border-white/40 transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    <Building2 className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">HIRE AN AGENCY?</h4>
                  <p className="text-gray-400">
                    Don't have a marketing budget of tens of thousands of euros per month? Well then your account is often managed by the intern of the assistant of the assistant. Not ideal.
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
              <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">OK... But What Makes You Different?</h2>
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

        {/* Services Quick Delivery Section */}
        <section className="py-12 px-4 bg-gradient-to-r from-black to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300"
            >
              Experience lightning-fast delivery - from AI Chatbots to Custom Solutions, we deliver in just 
              <span className="lightning-text relative inline-block mx-2">
                quickly
              </span>
              - often within 1 hour to 3 days!
            </motion.p>
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
              <h2 className="text-3xl md:text-7xl font-bold mb-16 tracking-wider text-center">OUR LATEST TESTIMONIAL</h2>
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
                    <p className="text-lg md:text-xl">Category: Web Design</p>
                    <p className="text-gray-400 mt-2 italic">
                      "Lately finished website for a Chiptuning Business! Finished setting up the domain in 44 hours since the first message from the client! Just 44 hours. We can make your website even faster. ⚡"
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <img src="https://raw.githubusercontent.com/XRlayth/zdjecia/main/Strona1.png" alt="Giant Moto Testimonial 1" className="w-full rounded-lg shadow-lg" />
                  <img src="https://raw.githubusercontent.com/XRlayth/zdjecia/main/strona2.jpg" alt="Giant Moto Testimonial 2" className="w-full rounded-lg shadow-lg" />
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Don't overthink it.<br />
                Take action, transform your business.<br />
                <span className="shield-bg relative inline-block">Guaranteed.</span>
              </h2>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white text-black rounded-full text-xl font-bold hover:bg-opacity-90 transition-all duration-300"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Scroll Down Button */}
      {showScrollButton && !hasPassedTestimonial && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToBottom}
          className="scroll-button"
        >
          <span>Scroll down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}

export default App;