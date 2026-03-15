import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { aiAssistantInfo } from '../data/mock';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3758159/pexels-photo-3758159.jpeg?w=800&q=80"
                alt="AI Business Solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-100 rounded-full -z-10 blur-3xl opacity-50" />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Effektivisera din vardag – vi sköter jobbet åt dig
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              På AIweb.se skapar vi professionella och högpresterande hemsidor som ger ditt företag en stark digital närvaro. Oavsett om du behöver en modern företagswebbplats, en konverteringsoptimerad e-handel eller en skräddarsydd AI-lösning, har vi verktygen och expertisen för att leverera. Utöver detta erbjuder vi AI-drivna virtuella assistenter – för snabbare och smartare företag.
            </p>
            
            <div className="space-y-4">
              {aiAssistantInfo.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;