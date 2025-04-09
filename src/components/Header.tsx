import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { ChevronDown, Menu, X } from 'lucide-react';

function Header() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  
  const getLocalizedPath = (path: string) => {
    const basePath = i18n.language === 'en' ? '/main' : '/główna';
    const routes: { [key: string]: { en: string; pl: string } } = {
      'about': { en: '/about', pl: '/o-nas' },
      'services': { en: '/services', pl: '/usługi' },
      'contact': { en: '/contact', pl: '/kontakt' },
      'get-started': { en: '/get-started', pl: '/rozpocznij' },
      'dashboard': { en: '/dashboard', pl: '/panel' },
      'account': { en: '/account', pl: '/konto' },
      'reset-password': { en: '/reset-password', pl: '/reset-hasła' },
      'services/chatbots': { en: '/services/chatbots', pl: '/usługi/chatboty' },
      'services/phone-callers': { en: '/services/phone-callers', pl: '/usługi/automatyzacja-połączeń' },
      'services/web-design': { en: '/services/web-design', pl: '/usługi/projektowanie-stron' },
      'services/custom-ai': { en: '/services/custom-ai', pl: '/usługi/rozwiązania-ai' },
      'services/content-creation': { en: '/services/content-creation', pl: '/usługi/tworzenie-treści' },
      'services/digital-marketing': { en: '/services/digital-marketing', pl: '/usługi/marketing-cyfrowy' }
    };

    for (const [key, value] of Object.entries(routes)) {
      if (path.includes(key)) {
        return basePath + value[i18n.language as 'en' | 'pl'];
      }
    }
    return basePath;
  };
  
  const services = [
    { name: t('nav.seeAll'), path: getLocalizedPath('services') },
    { name: t('nav.aiChatbots'), path: getLocalizedPath('services/chatbots') },
    { name: t('nav.phoneCallers'), path: getLocalizedPath('services/phone-callers') },
    { name: t('nav.webDesign'), path: getLocalizedPath('services/web-design') },
    { name: t('nav.customAI'), path: getLocalizedPath('services/custom-ai') },
    { name: t('nav.contentCreation'), path: getLocalizedPath('services/content-creation') },
    { name: t('nav.digitalMarketing'), path: getLocalizedPath('services/digital-marketing') }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo(0, 0);
  };

  const handleLanguageSwitch = (lng: string) => {
    const basePath = lng === 'en' ? '/main' : '/główna';
    navigate(basePath);
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link 
          to={i18n.language === 'en' ? '/main' : '/główna'} 
          className="flex items-center space-x-3 frame-hover"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src="/BANNERBLACK.jpg" alt="Neural AI" className="h-10" />
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-4 mr-4">
            <button
              onClick={() => handleLanguageSwitch('en')}
              className={`w-8 h-6 rounded overflow-hidden transition-opacity ${
                i18n.language === 'en' ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-75'
              }`}
            >
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                className="w-full h-full object-cover"
              />
            </button>
            <button
              onClick={() => handleLanguageSwitch('pl')}
              className={`w-8 h-6 rounded overflow-hidden transition-opacity ${
                i18n.language === 'pl' ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-75'
              }`}
            >
              <img
                src="https://flagcdn.com/w40/pl.png"
                alt="Polski"
                className="w-full h-full object-cover"
              />
            </button>
          </div>

          <NavLink to={getLocalizedPath('about')} active={location.pathname.includes('about') || location.pathname.includes('o-nas')}>
            {t('nav.about')}
          </NavLink>
          
          <div className="relative">
            <button
              className={`text-sm font-medium transition-colors duration-300 flex items-center space-x-1 frame-hover ${
                location.pathname.includes('services') || location.pathname.includes('usługi') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span>{t('nav.services')}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-xl py-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-gray-400 hover:text-white frame-hover"
                    onClick={handleLinkClick}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to={getLocalizedPath('contact')} active={location.pathname.includes('contact') || location.pathname.includes('kontakt')}>
            {t('nav.contact')}
          </NavLink>
          
          {isAuthenticated && (
            <NavLink to={getLocalizedPath('account')} active={location.pathname.includes('account') || location.pathname.includes('konto')}>
              {t('nav.account')}
            </NavLink>
          )}
          
          <Link
            to={isAuthenticated ? getLocalizedPath('dashboard') : getLocalizedPath('get-started')}
            className="px-6 py-2 rounded-full border border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300 frame-hover"
            onClick={() => window.scrollTo(0, 0)}
          >
            {t('nav.getStarted')}
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-black border-b border-gray-800 md:hidden">
            <div className="p-4 space-y-4">
              <div className="flex justify-center space-x-4 mb-4">
                <button
                  onClick={() => handleLanguageSwitch('en')}
                  className={`w-8 h-6 rounded overflow-hidden transition-opacity ${
                    i18n.language === 'en' ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <img
                    src="https://flagcdn.com/w40/us.png"
                    alt="English"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => handleLanguageSwitch('pl')}
                  className={`w-8 h-6 rounded overflow-hidden transition-opacity ${
                    i18n.language === 'pl' ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <img
                    src="https://flagcdn.com/w40/pl.png"
                    alt="Polski"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>

              <Link
                to={getLocalizedPath('about')}
                className="block px-4 py-2 text-gray-400 hover:text-white"
                onClick={handleLinkClick}
              >
                {t('nav.about')}
              </Link>
              
              <div>
                <button
                  className="w-full px-4 py-2 text-left text-gray-400 hover:text-white flex items-center justify-between"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>{t('nav.services')}</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-8 space-y-2 mt-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-white"
                        onClick={handleLinkClick}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to={getLocalizedPath('contact')}
                className="block px-4 py-2 text-gray-400 hover:text-white"
                onClick={handleLinkClick}
              >
                {t('nav.contact')}
              </Link>
              
              {isAuthenticated && (
                <Link
                  to={getLocalizedPath('account')}
                  className="block px-4 py-2 text-gray-400 hover:text-white"
                  onClick={handleLinkClick}
                >
                  {t('nav.account')}
                </Link>
              )}
              
              <Link
                to={isAuthenticated ? getLocalizedPath('dashboard') : getLocalizedPath('get-started')}
                className="block px-4 py-2 text-white font-bold hover:bg-white/10"
                onClick={handleLinkClick}
              >
                {t('nav.getStarted')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors duration-300 frame-hover ${
        active ? 'text-white' : 'text-gray-400 hover:text-white'
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {children}
    </Link>
  );
}

export default Header;