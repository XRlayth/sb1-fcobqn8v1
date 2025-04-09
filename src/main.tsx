import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/en/*" element={<App />} />
        <Route path="/pl/*" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/services/chatbots" element={<Chatbots />} />
        <Route path="/services/phone-callers" element={<PhoneCallers />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/custom-ai" element={<CustomAI />} />
        <Route path="/services/content-creation" element={<ContentCreation />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </Router>
  </StrictMode>
);