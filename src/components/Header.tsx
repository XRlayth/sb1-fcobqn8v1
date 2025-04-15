import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { ChevronDown, Menu, X } from 'lucide-react';

function Header() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  const isPolish = i18n.language === 'pl' || location.pathname.includes('główna');

  const pathMappings = {
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

  const getLocalizedPath = (currentPath: string, targetLanguage: 'en' | 'pl') => {
    console.log('Current path:', currentPath);
    
    // Handle root paths
    if (currentPath === '/główna' || currentPath === '/main' || currentPath === '/') {
      const newPath = targetLanguage === 'en' ? '/main' : '/główna';
      console.log('New path (root):', newPath);
      return newPath;
    }

    // Remove language prefix and leading slash
    const pathWithoutPrefix = currentPath
      .replace(/^\/główna\/?/, '')
      .replace(/^\/main\/?/, '')
      .replace(/^\//, '');

    // If the path is empty after removing prefix, return root path
    if (!pathWithoutPrefix) {
      const newPath = targetLanguage === 'en' ? '/main' : '/główna';
      console.log('New path (empty):', newPath);
      return newPath;
    }

    // Find direct mapping
    for (const [key, paths] of Object.entries(pathMappings)) {
      if (pathWithoutPrefix === key) {
        const newPath = paths[targetLanguage];
        console.log('New path (direct mapping):', newPath);
        return newPath;
      }
    }

    // Handle nested routes
    const segments = pathWithoutPrefix.split('/');
    const prefix = targetLanguage === 'en' ? '/main/' : '/główna/';
    const newPath = prefix + pathWithoutPrefix;
    console.log('New path (nested):', newPath);
    return newPath;
  };

  const handleLanguageSwitch = (lng: string) => {
    const currentPath = location.pathname;
    const newPath = getLocalizedPath(currentPath, lng as 'en' | 'pl');
    console.log('Language switch:', { currentPath, newPath, language: lng });
    i18n.changeLanguage(lng);
    navigate(newPath);
  };

  const aiServices = [
    { name: t('nav.aiChatbots'), path: getLocalizedPath('services/chatbots', isPolish ? 'pl' : 'en') },
    { name: t('nav.phoneCallers'), path: getLocalizedPath('services/phone-callers', isPolish ? 'pl' : 'en') },
    { name: t('nav.customAI'), path: getLocalizedPath('services/custom-ai', isPolish ? 'pl' : 'en') },
  ];

  const otherServices = [
    { name: t('nav.webDesign'), path: getLocalizedPath('services/web-design', isPolish ? 'pl' : 'en') },
    { name: t('nav.contentCreation'), path: getLocalizedPath('services/content-creation', isPolish ? 'pl' : 'en') },
    { name: t('nav.digitalMarketing'), path: getLocalizedPath('services/digital-marketing', isPolish ? 'pl' : 'en') }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAIServicesOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link 
          to={isPolish ? '/główna' : '/main'}
          className="flex items-center space-x-3 frame-hover"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src="https://raw.githubusercontent.com/XRlayth/zdjecia/main/ezgif-45c5a8b8b61521.png" alt="Neural AI" className="h-16" />
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

          <div className="relative group">
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
                <Link
                  to={getLocalizedPath('services', isPolish ? 'pl' : 'en')}
                  className="block px-4 py-2 text-sm text-gray-400 hover:text-white frame-hover"
                  onClick={handleLinkClick}
                >
                  {t('nav.seeAll')}
                </Link>
                
                <div className="relative group/ai">
                  <Link
                    to={getLocalizedPath('services', isPolish ? 'pl' : 'en')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white frame-hover flex items-center justify-between"
                    onMouseEnter={() => setIsAIServicesOpen(true)}
                    onMouseLeave={() => setIsAIServicesOpen(false)}
                  >
                    AI Services
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  
                  {isAIServicesOpen && (
                    <div
                      className="absolute left-full top-0 w-48 bg-black border border-gray-800 rounded-lg shadow-xl py-2 ml-2"
                      onMouseEnter={() => setIsAIServicesOpen(true)}
                      onMouseLeave={() => setIsAIServicesOpen(false)}
                    >
                      {aiServices.map((service) => (
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
                
                {otherServices.map((service) => (
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

          <NavLink to={getLocalizedPath('contact', isPolish ? 'pl' : 'en')} active={location.pathname.includes('contact') || location.pathname.includes('kontakt')}>
            {t('nav.contact')}
          </NavLink>

          <NavLink to={getLocalizedPath('about', isPolish ? 'pl' : 'en')} active={location.pathname.includes('about') || location.pathname.includes('o-nas')}>
            {t('nav.about')}
          </NavLink>
          
          {isAuthenticated && (
            <NavLink to={getLocalizedPath('account', isPolish ? 'pl' : 'en')} active={location.pathname.includes('account') || location.pathname.includes('konto')}>
              {t('nav.account')}
            </NavLink>
          )}
          
          <Link
            to={isAuthenticated ? getLocalizedPath('dashboard', isPolish ? 'pl' : 'en') : getLocalizedPath('get-started', isPolish ? 'pl' : 'en')}
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
                    <Link
                      to={getLocalizedPath('services', isPolish ? 'pl' : 'en')}
                      className="block px-4 py-2 text-sm text-gray-400 hover:text-white"
                      onClick={handleLinkClick}
                    >
                      {t('nav.seeAll')}
                    </Link>
                    
                    <button
                      className="w-full px-4 py-2 text-left text-gray-400 hover:text-white flex items-center justify-between"
                      onClick={() => setIsAIServicesOpen(!isAIServicesOpen)}
                    >
                      <span>AI Services</span>
                      <ChevronDown className={`w-4 h-4 transform transition-transform ${isAIServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isAIServicesOpen && (
                      <div className="pl-4 space-y-2">
                        {aiServices.map((service) => (
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
                    
                    {otherServices.map((service) => (
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
                to={getLocalizedPath('contact', isPolish ? 'pl' : 'en')}
                className="block px-4 py-2 text-gray-400 hover:text-white"
                onClick={handleLinkClick}
              >
                {t('nav.contact')}
              </Link>

              <Link
                to={getLocalizedPath('about', isPolish ? 'pl' : 'en')}
                className="block px-4 py-2 text-gray-400 hover:text-white"
                onClick={handleLinkClick}
              >
                {t('nav.about')}
              </Link>
              
              {isAuthenticated && (
                <Link
                  to={getLocalizedPath('account', isPolish ? 'pl' : 'en')}
                  className="block px-4 py-2 text-gray-400 hover:text-white"
                  onClick={handleLinkClick}
                >
                  {t('nav.account')}
                </Link>
              )}
              
              <Link
                to={isAuthenticated ? getLocalizedPath('dashboard', isPolish ? 'pl' : 'en') : getLocalizedPath('get-started', isPolish ? 'pl' : 'en')}
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