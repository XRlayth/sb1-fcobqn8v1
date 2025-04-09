import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Monitor, Bot, PenTool, BarChart3, ArrowRight } from 'lucide-react';
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
    link: '/services/chatbots'
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Phone Callers',
    description: 'Advanced AI-powered calling solutions for seamless communication.',
    link: '/services/phone-callers'
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Web Design',
    description: 'Stunning, modern web experiences that captivate and convert.',
    link: '/services/web-design'
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'Custom AI Solutions',
    description: 'Tailored artificial intelligence solutions for your specific needs.',
    link: '/services/custom-ai'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Content Creation',
    description: 'Craft compelling content that engages your audience and drives results.',
    link: '/services/content-creation'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Boost your online presence with AI-powered digital marketing strategies.',
    link: '/services/digital-marketing'
  }
];

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <CustomCursor />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center z-10"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-wider text-white">
              NEURAL AI
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-400">
              Next-Gen AI Automation for a Boundless Future
            </p>
            <Link 
              to={isAuthenticated ? "/dashboard" : "/get-started"}
              className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
              onClick={() => window.scrollTo(0, 0)}
            >
              GET STARTED
            </Link>
          </motion.div>
          <div className="w-full md:w-1/2 h-[300px] md:h-1/2 mt-8 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
            <Spline scene="https://prod.spline.design/di-MaYwy3xhfsS0H/scene.splinecode" />
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-wider text-white">ABOUT NEURAL AI</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                We leverage cutting-edge AI technologies to streamline business processes, 
                boost efficiency, and revolutionize automation. Our solutions are designed 
                to propel your business into the future of digital transformation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/about"
                  className="px-8 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Learn More About Us
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
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
                  <img src="/5.png" alt="Giant Moto Testimonial 1" className="w-full rounded-lg shadow-lg" />
                  <img src="/3.png" alt="Giant Moto Testimonial 2" className="w-full rounded-lg shadow-lg" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold text-center mb-16 tracking-wider text-white">OUR SERVICES</h2>
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
                  <div className="mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-white hover:text-[#4facfe] transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Learn more, see how this service changed businesses
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-wider text-white">LET'S BUILD THE FUTURE</h2>
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;