import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const isPolish = i18n.language === 'pl' || location.pathname.includes('główna');
  const basePath = isPolish ? '/główna' : '/main';

  const getLocalizedPath = (path: string) => {
    const routes: { [key: string]: { en: string; pl: string } } = {
      'about': { en: '/main/about', pl: '/główna/o-nas' },
      'services': { en: '/main/services', pl: '/główna/usługi' },
      'contact': { en: '/main/contact', pl: '/główna/kontakt' },
      'terms': { en: '/main/terms', pl: '/główna/regulamin' },
      'privacy': { en: '/main/privacy', pl: '/główna/prywatnosc' },
      'cookies': { en: '/main/cookies', pl: '/główna/ciasteczka' }
    };

    return routes[path]?.[isPolish ? 'pl' : 'en'] || basePath;
  };

  return (
    <footer className="bg-black/80 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img src="https://raw.githubusercontent.com/XRlayth/zdjecia/main/ikonan-modified-removebg-preview.png" alt="Neural AI" className="h-8 mb-4" />
            </div>
            <p className="text-gray-400 text-sm">
              {isPolish ? 'Agencja, która ulepszy Twój Biznes.' : 'Agency, that will upgrade Your Business.'}
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">{isPolish ? 'Firma' : 'Company'}</h3>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start">
                <Link 
                  to={basePath}
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {isPolish ? 'Strona Główna' : 'Main Page'}
                </Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link 
                  to={getLocalizedPath('about')}
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {isPolish ? 'O Nas' : 'About'}
                </Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link 
                  to={getLocalizedPath('services')}
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {isPolish ? 'Usługi' : 'Services'}
                </Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link 
                  to={getLocalizedPath('contact')}
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {isPolish ? 'Kontakt' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">{isPolish ? 'Prawne' : 'Legal'}</h3>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start">
                <Link 
                  to={getLocalizedPath('terms')}
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {isPolish ? 'Regulamin' : 'Terms of Service'}
                </Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link 
                  to={getLocalizedPath('privacy')}
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {isPolish ? 'Polityka Prywatności' : 'Privacy Policy'}
                </Link>
              </li>
              <li className="flex justify-center md:justify-start">
                <Link 
                  to={getLocalizedPath('cookies')}
                  className="text-gray-400 hover:text-white text-sm"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {isPolish ? 'Polityka Cookies' : 'Cookie Policy'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">{isPolish ? 'Kontakt' : 'Contact Us'}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-white" />
                <span>contact@neural-ai.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-white" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-white" />
                <span>123 AI Boulevard, Tech District</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Neural AI. {isPolish ? 'Wszelkie prawa zastrzeżone.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;