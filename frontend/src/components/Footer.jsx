import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_aiweb-pro/artifacts/f791rmj7_0c6f7688-cf1a-4e18-a947-1d9a49b7cafb.png"
                alt="AiWeb Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professionella AI-lösningar och webbdesign för moderna företag. 25 års erfarenhet inom webutveckling.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktinformation</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p>{companyInfo.address}</p>
                  <p>{companyInfo.postalCode}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Våra tjänster</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">AI-automatisering</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Webbdesign & E-handel</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Digital marknadsföring</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Virtuell assistent</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Varumärkesprofil</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} {companyInfo.name}. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;