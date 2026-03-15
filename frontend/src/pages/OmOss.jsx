import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Network, Briefcase, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const OmOss = () => {
  const navigate = useNavigate();

  const highlights = [
    { icon: Users, title: '20+ års erfarenhet', text: 'Inom administration och digital utveckling' },
    { icon: Briefcase, title: '11 års expertis', text: 'Inom e-handel och webbutveckling' },
    { icon: Network, title: 'Internationellt nätverk', text: 'Samarbete med experter inom design, marknadsföring och AI-teknik' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Om Oss
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Din partner för digital framgång
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                På AiWeb.se brinner vi för att hjälpa företag att växa genom smarta, effektiva och professionella digitala lösningar. Med över <strong>20 års erfarenhet inom administration</strong> och <strong>11 års expertis inom e-handel</strong> har vi den kunskap och insikt som krävs för att skapa framgångsrika webbplatser, automatiserade system och digitala strategier.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Stort nätverk
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Vi är en del av ett stort internationellt nätverk, där vi samarbetar med experter inom olika områden – från design och marknadsföring till avancerad AI-teknik. Detta gör att vi alltid kan erbjuda skräddarsydda och moderna lösningar för varje kund, oavsett bransch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frilansande
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Som frilansande webbutvecklare, där faktureringen sker via Frilans Finans, garanterar vi en flexibel, trygg och professionell tjänst. Vårt mål är att hjälpa dig att lyckas digitalt – vare sig du behöver en ny hemsida, en AI-driven assistent eller en kraftfull marknadsföringsstrategi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Vår Mission
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Vi tror på kraften i digital transformation och AI-drivna lösningar. Vår mission är att göra dessa teknologier tillgängliga för företag i alla storlekar, så att de kan konkurrera och växa i en alltmer digital värld.
              </p>
              <div className="space-y-4 mb-12">
                {[
                  'Skräddarsydda lösningar för varje kund',
                  'Högkvalitativ kod och modern design',
                  'Långsiktiga partnerskap och support',
                  'Transparent kommunikation och prismodell'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-200 flex-shrink-0" />
                    <p className="text-lg text-white">{item}</p>
                  </motion.div>
                ))}
              </div>
              <Button
                size="lg"
                onClick={() => navigate('/#contact')}
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Kontakta oss
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OmOss;
