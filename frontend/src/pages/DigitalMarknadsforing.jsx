import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, TrendingUp, Share2, Mail, BarChart3, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';

const DigitalMarknadsforing = () => {
  const navigate = useNavigate();

  const services = [
    { icon: TrendingUp, text: 'Google Ads & Betald annonsering – Få fler klick, leads och kunder med smarta kampanjer.' },
    { icon: Search, text: 'Sökmotoroptimering (SEO) – Klättra på Google och bli hittad av rätt målgrupp.' },
    { icon: Share2, text: 'Sociala medier-marknadsföring – Engagerande innehåll och strategier för Facebook, Instagram & TikTok.' },
    { icon: Mail, text: 'E-postmarknadsföring & Automatisering – Bygg kundrelationer och öka försäljningen på autopilot.' },
    { icon: BarChart3, text: 'AI-drivna analyser & optimering – Vi mäter, analyserar och justerar för maximal effekt.' }
  ];

  const benefits = [
    'Skräddarsydd strategi – Vi anpassar marknadsföringen efter ditt företags behov.',
    'AI-drivna lösningar – Automatiserad analys & optimering för bästa resultat.',
    'Mätbara resultat – Se tydligt hur din marknadsföring presterar och skapar tillväxt.'
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
              Digital Marknadsföring
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Vill du synas mer, attrahera rätt kunder och öka din försäljning?
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Med AiWeb.se får du resultatdriven digital marknadsföring som tar ditt företag till nästa nivå. Vi kombinerar AI-optimerade strategier med beprövade marknadsföringsmetoder för att maximera din räckvidd och konvertering!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vad kan vi hjälpa dig med?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {service.text}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
            >
              Varför välja AiWeb.se?
            </motion.h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="h-7 w-7 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Låt oss hjälpa dig att växa digitalt!
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Kontakta oss idag för en kostnadsfri konsultation!
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/#contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Kom igång
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarknadsforing;
