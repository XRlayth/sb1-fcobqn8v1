import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { ChevronDown, Menu, X } from 'lucide-react';

function Naglowek() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage('pl');
    }
  }, [i18n]);

  const getEnglishPath = (polishPath: string): string => {
    const pathMappings: { [key: string]: string } = {
      'główna': 'main',
      'o-nas': 'about',
      'usługi': 'services',
      'kontakt': 'contact',
      'rozpocznij': 'get-started',
      'panel': 'dashboard',
      'konto': 'account',
      'reset-hasła': 'reset-password',
      'chatboty': 'services/chatbots',
      'automatyzacja-połączeń': 'services/phone-callers',
      'projektowanie-stron': 'services/web-design',
      'rozwiązania-ai': 'services/custom-ai',
      'tworzenie-treści': 'services/content-creation',
      'marketing-cyfrowy': 'services/digital-marketing'
    };

    // Remove 'główna' prefix and leading slash
    const path = polishPath.replace(/^\/główna\/?/, '');
    
    if (!path) return '/main';

    const segments = path.split('/');
    const mappedSegments = segments.map(segment => pathMappings[segment] || segment);
    
    return '/main/' + mappedSegments.join('/');
  };

  const handleLanguageSwitch = (lng: string) => {
    if (lng === 'en') {
      const currentPath = location.pathname;
      const englishPath = getEnglishPath(currentPath);
      i18n.changeLanguage(lng);
      navigate(englishPath);
    }
  };

  const aiServices = [
    { name: t('nav.aiChatbots'), path: '/główna/usługi/chatboty' },
    { name: t('nav.phoneCallers'), path: '/główna/usługi/automatyzacja-połączeń' },
    { name: t('nav.customAI'), path: '/główna/usługi/rozwiązania-ai' },
  ];

  const otherServices = [
    { name: t('nav.webDesign'), path: '/główna/usługi/projektowanie-stron' },
    { name: t('nav.contentCreation'), path: '/główna/usługi/tworzenie-treści' },
    { name: t('nav.digitalMarketing'), path: '/główna/usługi/marketing-cyfrowy' }
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
          to="/główna"
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
              className="w-8 h-6 rounded overflow-hidden opacity-50 hover:opacity-75 transition-opacity"
            >
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                className="w-full h-full object-cover"
              />
            </button>
            <button
              className="w-8 h-6 rounded overflow-hidden ring-2 ring-white"
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
                location.pathname.includes('usługi') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span>{t('nav.services')}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-xl py-2">
                <Link
                  to="/główna/usługi"
                  className="block px-4 py-2 text-sm text-gray-400 hover:text-white frame-hover"
                  onClick={handleLinkClick}
                >
                  {t('nav.seeAll')}
                </Link>
                
                <div className="relative group/ai">
                  <Link
                    to="/główna/usługi"
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

          <NavLink to="/główna/kontakt" active={location.pathname.includes('kontakt')}>
            {t('nav.contact')}
          </NavLink>

          <NavLink to="/główna/o-nas" active={location.pathname.includes('o-nas')}>
            {t('nav.about')}
          </NavLink>
          
          {isAuthenticated && (
            <NavLink to="/główna/konto" active={location.pathname.includes('konto')}>
              {t('nav.account')}
            </NavLink>
          )}
          
          <Link
            to={isAuthenticated ? "/główna/panel" : "/główna/rozpocznij"}
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
                  className="w-8 h-6 rounded overflow-hidden opacity-50 hover:opacity-75 transition-opacity"
                >
                  <img
                    src="https://flagcdn.com/w40/us.png"
                    alt="English"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  className="w-8 h-6 rounded overflow-hidden ring-2 ring-white"
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
                      to="/główna/usługi"
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
                to="/główna/kontakt"
                className="block px-4 py-2 text-gray-400 hover:text-white"
                onClick={handleLinkClick}
              >
                {t('nav.contact')}
              </Link>

              <Link
                to="/główna/o-nas"
                className="block px-4 py-2 text-gray-400 hover:text-white"
                onClick={handleLinkClick}
              >
                {t('nav.about')}
              </Link>
              
              {isAuthenticated && (
                <Link
                  to="/główna/konto"
                  className="block px-4 py-2 text-gray-400 hover:text-white"
                  onClick={handleLinkClick}
                >
                  {t('nav.account')}
                </Link>
              )}
              
              <Link
                to={isAuthenticated ? "/główna/panel" : "/główna/rozpocznij"}
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

export default Naglowek;