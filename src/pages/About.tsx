import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl font-bold mb-8 tracking-wider text-white">ABOUT NEURAL AI</h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                We are pioneers in AI automation, dedicated to transforming businesses 
                through cutting-edge artificial intelligence solutions.
              </p>
              
              {/* Quote Section with Background */}
              <div className="relative py-16 px-4 mb-16 overflow-hidden rounded-2xl border border-white/20">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80" 
                    alt="Explosion" 
                    className="w-full h-full object-cover opacity-30"
                  />
                </div>
                <div className="relative z-10">
                  <p className="text-3xl font-serif italic text-white">
                    "Two man brigade, holding a hand grenade"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
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
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-400">
                  To empower businesses with intelligent automation solutions that drive growth and innovation.
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
                <h3 className="text-xl font-bold mb-4">Our Technology</h3>
                <p className="text-gray-400">
                  We leverage state-of-the-art AI and machine learning to create powerful, scalable solutions.
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
                <h3 className="text-xl font-bold mb-4">Our Impact</h3>
                <p className="text-gray-400">
                  We've helped countless businesses achieve digital transformation and operational excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Who We Are</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-12">
                Neural AI was founded in 2024 by two visionary pioneers in AI automation. 
                With a shared passion for technology and innovation, we set out to revolutionize 
                how businesses operate in the digital age. Our journey began with a simple mission: 
                to make advanced AI technology accessible and practical for businesses of all sizes.
                <br /><br />
                Through dedication and continuous learning, we've mastered a diverse set of skills 
                that enable us to deliver comprehensive AI solutions. From chatbots and voice AI to 
                custom automation systems, our expertise spans the full spectrum of modern AI applications. 
                We take pride in our ability to transform complex business challenges into elegant, 
                efficient solutions that drive real results.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/services"
                  className="px-8 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  See Services
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
      </main>

      <Footer />
    </div>
  );
}

export default About;