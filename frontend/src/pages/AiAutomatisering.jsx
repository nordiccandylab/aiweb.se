import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Mail, DollarSign, Share2, BarChart3, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';

const AiAutomatisering = () => {
  const navigate = useNavigate();

  const services = [
    { icon: Bot, text: 'AI-drivna chattbotar & kundservice – Besvara kundförfrågningar dygnet runt.' },
    { icon: Mail, text: 'Automatiserad e-post & leads-hantering – Skapa, skicka och följa upp e-post utan manuell hantering.' },
    { icon: DollarSign, text: 'Smart fakturering & ekonomi – Slipp manuella processer och få kontroll på betalningar.' },
    { icon: Share2, text: 'Sociala medier & marknadsföring – AI kan schemalägga, analysera och optimera dina inlägg.' },
    { icon: BarChart3, text: 'Dataanalys & rapporter – Få insikter och beslutsunderlag utan att lyfta ett finger.' }
  ];

  const benefits = [
    'Mer tid – mindre administration – Låt AI sköta det tråkiga.',
    'Ökad effektivitet & lönsamhet – Automatisering minskar kostnader och maximerar produktivitet.',
    'Skräddarsydda AI-lösningar – Anpassade efter ditt företags behov och bransch.'
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AI-Automatisering</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">Vill du spara tid, minska kostnader och låta tekniken göra jobbet åt dig?</p>
            <p className="text-lg text-gray-400 mb-12">Med AI-automatisering från AiWeb.se slipper du repetitiva uppgifter och kan fokusera på det som verkligen driver ditt företag framåt. Våra AI-lösningar tar hand om allt från kundservice till marknadsföring och försäljning – snabbare och smartare än någonsin!</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Vad kan vi automatisera?</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg flex-shrink-0"><Icon className="h-6 w-6 text-blue-600" /></div>
                      <p className="text-lg text-gray-700 leading-relaxed">{service.text}</p>
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
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Varför välja AiWeb.se?</motion.h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-4">
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Dags att arbeta smartare, inte hårdare!</h2>
            <p className="text-xl mb-8 text-blue-100">Kontakta oss idag och låt AI ta din verksamhet till nästa nivå!</p>
            <Button size="lg" onClick={() => navigate('/#contact')} className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              Kom igång<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AiAutomatisering;