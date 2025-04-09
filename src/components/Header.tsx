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
  const isPolish = i18n.language === 'pl';
  const basePath = isPolish ? '/główna' : '/main';
  
  const getLocalizedPath = (path: string) => {
    const routes: { [key: string]: { en: string; pl: string } } = {
      'about': { en: '/main/about', pl: '/główna/o-nas' },
      'services': { en: '/main/services', pl: '/główna/usługi' },
      'contact': { en: '/main/contact', pl: '/główna/kontakt' },
      'get-started': { en: '/main/get-started', pl: '/główna/rozpocznij' },
      'dashboard': { en: '/main/dashboard', pl: '/główna/panel' },
      'account': { en: '/main/account', pl: '/główna/konto' },
      'reset-password': { en: '/main/reset-password', pl: '/główna/reset-hasła' },
      'services/chatbots': { en: '/main/services/chatbots', pl: '/główna/usługi/chatboty' },
      'services/phone-callers': { en: '/main/services/phone-callers', pl: '/główna/usługi/automatyzacja-połączeń' },
      'services/web-design': { en: '/main/services/web-design', pl: '/główna/usługi/projektowanie-stron' },
      'services/custom-ai': { en: '/main/services/custom-ai', pl: '/główna/usługi/rozwiązania-ai' },
      'services/content-creation': { en: '/main/services/content-creation', pl: '/główna/usługi/tworzenie-treści' },
      'services/digital-marketing': { en: '/main/services/digital-marketing', pl: '/główna/usługi/marketing-cyfrowy' }
    };

    for (const [key, value] of Object.entries(routes)) {
      if (path.includes(key)) {
        return value[isPolish ? 'pl' : 'en'];
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
    const currentPath = location.pathname;
    const isCurrentlyPolish = currentPath.includes('główna');
    let newPath = currentPath;

    if (lng === 'pl' && !isCurrentlyPolish) {
      newPath = currentPath.replace('/main', '/główna');
    } else if (lng === 'en' && isCurrentlyPolish) {
      newPath = currentPath.replace('/główna', '/main');
    }

    i18n.changeLanguage(lng);
    navigate(newPath);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link 
          to={basePath}
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
                !isPolish ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-75'
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
                isPolish ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-75'
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
                    !isPolish ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-75'
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
                    isPolish ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-75'
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