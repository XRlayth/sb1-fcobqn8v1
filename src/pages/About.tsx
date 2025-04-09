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
                We're a next-generation marketing agency that harnesses the power of AI to transform 
                how businesses connect with their audience and drive growth.
              </p>
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
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-400">
                  To revolutionize digital marketing by seamlessly blending human creativity 
                  with artificial intelligence, creating unprecedented growth opportunities for our clients.
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
                <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                <p className="text-gray-400">
                  We combine data-driven insights with creative excellence, leveraging cutting-edge AI 
                  technology to deliver marketing solutions that consistently outperform traditional methods.
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
                  Our clients experience an average of 300% increase in engagement and 150% boost in 
                  conversion rates through our AI-enhanced marketing strategies.
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
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-12">
                Founded in 2024, Neural AI emerged from a simple yet powerful observation: traditional 
                marketing agencies weren't keeping pace with technological advancement. We saw an 
                opportunity to revolutionize the industry by integrating artificial intelligence into 
                every aspect of digital marketing.
                <br /><br />
                Our team combines seasoned marketing professionals with AI specialists, creating a 
                unique blend of expertise that drives unprecedented results for our clients. We've 
                developed proprietary AI algorithms that analyze market trends, predict consumer 
                behavior, and optimize marketing strategies in real-time.
                <br /><br />
                Today, we're proud to serve clients across various industries, from startups to 
                enterprise-level businesses, helping them achieve their growth objectives through 
                our innovative approach to digital marketing.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/services"
                  className="px-8 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Explore Our Services
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Get in Touch
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