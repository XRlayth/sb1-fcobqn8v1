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
  
  const services = [
    { name: t('nav.seeAll'), path: '/services' },
    { name: t('nav.aiChatbots'), path: '/services/chatbots' },
    { name: t('nav.phoneCallers'), path: '/services/phone-callers' },
    { name: t('nav.webDesign'), path: '/services/web-design' },
    { name: t('nav.customAI'), path: '/services/custom-ai' },
    { name: t('nav.contentCreation'), path: '/services/content-creation' },
    { name: t('nav.digitalMarketing'), path: '/services/digital-marketing' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo(0, 0);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    const newPath = location.pathname.replace(/^\/(en|pl)/, `/${lng}`);
    navigate(newPath);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link 
          to="/" 
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
              onClick={() => changeLanguage('en')}
              className={`w-8 h-6 rounded overflow-hidden transition-opacity ${
                i18n.language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
              }`}
            >
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                className="w-full h-full object-cover"
              />
            </button>
            <button
              onClick={() => changeLanguage('pl')}
              className={`w-8 h-6 rounded overflow-hidden transition-opacity ${
                i18n.language === 'pl' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
              }`}
            >
              <img
                src="https://flagcdn.com/w40/pl.png"
                alt="Polski"
                className="w-full h-full object-cover"
              />
            </button>
          </div>

          <NavLink to="/about" active={location.pathname === '/about'}>
            {t('nav.about')}
          </NavLink>
          
          <div className="relative">
            <button
              className={`text-sm font-medium transition-colors duration-300 flex items-center space-x-1 frame-hover ${
                location.pathname.includes('/services') ? 'text-white' : 'text-gray-400 hover:text-white'
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

          <NavLink to="/contact" active={location.pathname === '/contact'}>
            {t('nav.contact')}
          </NavLink>
          
          {isAuthenticated && (
            <NavLink to="/account" active={location.pathname === '/account'}>
              {t('nav.account')}
            </NavLink>
          )}
          
          <Link
            to={isAuthenticated ? "/dashboard" : "/get-started"}
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
                  onClick={() => changeLanguage('en')}
                  className={`w-8 h-6 rounded overflow-hidden transition-opacity ${
                    i18n.language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <img
                    src="https://flagcdn.com/w40/us.png"
                    alt="English"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => changeLanguage('pl')}
                  className={`w-8 h-6 rounded overflow-hidden transition-opacity ${
                    i18n.language === 'pl' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
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
                to="/about"
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
                to="/contact"
                className="block px-4 py-2 text-gray-400 hover:text-white"
                onClick={handleLinkClick}
              >
                {t('nav.contact')}
              </Link>
              
              {isAuthenticated && (
                <Link
                  to="/account"
                  className="block px-4 py-2 text-gray-400 hover:text-white"
                  onClick={handleLinkClick}
                >
                  {t('nav.account')}
                </Link>
              )}
              
              <Link
                to={isAuthenticated ? "/dashboard" : "/get-started"}
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