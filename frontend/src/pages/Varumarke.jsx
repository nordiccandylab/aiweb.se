import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Type, FileText, CreditCard, Image, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';

const Varumarke = () => {
  const navigate = useNavigate();
  const services = [
    { icon: Palette, text: 'Logotypdesign – En unik och stilren logga som stärker ditt varumärke.' },
    { icon: Type, text: 'Färg- och typografival – En professionell färgpalett och typsnitt som skapar en enhetlig look.' },
    { icon: FileText, text: 'Grafisk profil & varumärkesmanual – Riktlinjer för hur ditt varumärke ska presenteras överallt.' },
    { icon: CreditCard, text: 'Visitkort & trycksaker – Snygga och proffsiga material för din marknadsföring.' },
    { icon: Image, text: 'Sociala medier-mallar – Anpassade designmallar för att stärka ditt varumärke online.' }
  ];
  const benefits = [
    'Skräddarsydd design – Vi skapar en varumärkesprofil som passar just ditt företag.',
    'Tydlig och enhetlig identitet – För ett proffsigt och konsekvent intryck.',
    'Högkvalitativa & moderna lösningar – Anpassat för både digitalt och tryck.'
  ];
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Varumärkesprofil & Design</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">Behöver ditt företag en modern och professionell profil?</p>
            <p className="text-lg text-gray-400 mb-12">Oavsett om du startar ett nytt företag eller vill fräscha upp din befintliga varumärkesidentitet, hjälper vi dig att skapa en enhetlig och minnesvärd design som speglar ditt varumärkes kärna.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Vad ingår i vår varumärkesprofilering?</h2>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Redo att ge ditt företag en ny, stark identitet?</h2>
            <p className="text-xl mb-8 text-blue-100">Kontakta oss idag och låt oss skapa ditt drömvarumärke!</p>
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
export default Varumarke;