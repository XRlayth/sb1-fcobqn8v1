import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './i18n/config';
import App from './App.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import GetStarted from './pages/GetStarted.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Account from './pages/Account.tsx';
import ResetPassword from './pages/ResetPassword.tsx';
import Chatbots from './pages/services/Chatbots.tsx';
import PhoneCallers from './pages/services/PhoneCallers.tsx';
import WebDesign from './pages/services/WebDesign.tsx';
import CustomAI from './pages/services/CustomAI.tsx';
import ContentCreation from './pages/services/ContentCreation.tsx';
import DigitalMarketing from './pages/services/DigitalMarketing.tsx';
import Terms from './pages/legal/Terms.tsx';
import Privacy from './pages/legal/Privacy.tsx';
import Cookies from './pages/legal/Cookies.tsx';

// Polish pages
import Glowna from './pages/pl/Glowna.tsx';
import ONas from './pages/pl/ONas.tsx';
import Uslugi from './pages/pl/Uslugi.tsx';
import Kontakt from './pages/pl/Kontakt.tsx';
import UslugiChatboty from './pages/pl/UslugiChatboty.tsx';
import UslugiAutomatyzacjaPolaczen from './pages/pl/UslugiAutomatyzacjaPolaczen.tsx';
import UslugiProjektowanieStron from './pages/pl/UslugiProjektowanieStron.tsx';
import UslugiRozwiazaniaAI from './pages/pl/UslugiRozwiazaniaAI.tsx';
import UslugiTworzenieTresci from './pages/pl/UslugiTworzenieTresci.tsx';
import UslugiMarketingCyfrowy from './pages/pl/UslugiMarketingCyfrowy.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<App />} />
        <Route path="/główna" element={<Glowna />} />
        <Route path="/en/*" element={<Navigate to="/main" replace />} />
        <Route path="/pl/*" element={<Navigate to="/główna" replace />} />
        
        {/* English routes */}
        <Route path="/main/about" element={<About />} />
        <Route path="/main/services" element={<Services />} />
        <Route path="/main/contact" element={<Contact />} />
        <Route path="/main/get-started" element={<GetStarted />} />
        <Route path="/main/dashboard" element={<Dashboard />} />
        <Route path="/main/account" element={<Account />} />
        <Route path="/main/reset-password" element={<ResetPassword />} />
        <Route path="/main/services/chatbots" element={<Chatbots />} />
        <Route path="/main/services/phone-callers" element={<PhoneCallers />} />
        <Route path="/main/services/web-design" element={<WebDesign />} />
        <Route path="/main/services/custom-ai" element={<CustomAI />} />
        <Route path="/main/services/content-creation" element={<ContentCreation />} />
        <Route path="/main/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/main/terms" element={<Terms />} />
        <Route path="/main/privacy" element={<Privacy />} />
        <Route path="/main/cookies" element={<Cookies />} />

        {/* Polish routes */}
        <Route path="/główna/o-nas" element={<ONas />} />
        <Route path="/główna/usługi" element={<Uslugi />} />
        <Route path="/główna/kontakt" element={<Kontakt />} />
        <Route path="/główna/usługi/chatboty" element={<UslugiChatboty />} />
        <Route path="/główna/usługi/automatyzacja-połączeń" element={<UslugiAutomatyzacjaPolaczen />} />
        <Route path="/główna/usługi/projektowanie-stron" element={<UslugiProjektowanieStron />} />
        
        <Route path="/główna/usługi/rozwiązania-ai" element={<UslugiRozwiazaniaAI />} />
        <Route path="/główna/usługi/tworzenie-treści" element={<UslugiTworzenieTresci />} />
        <Route path="/główna/usługi/marketing-cyfrowy" element={<UslugiMarketingCyfrowy />} />
      </Routes>
    </Router>
  </StrictMode>
);