import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          'nav.about': 'About',
          'nav.services': 'Services',
          'nav.contact': 'Contact',
          'nav.account': 'Account',
          'nav.getStarted': 'Get Started',
          'nav.seeAll': 'See All',
          'nav.aiChatbots': 'AI Chatbots',
          'nav.phoneCallers': 'Phone Callers',
          'nav.webDesign': 'Web Design',
          'nav.customAI': 'Custom AI Solutions',
          'nav.contentCreation': 'Content Creation',
          'nav.digitalMarketing': 'Digital Marketing'
        }
      },
      pl: {
        translation: {
          'nav.about': 'O Nas',
          'nav.services': 'Usługi',
          'nav.contact': 'Kontakt',
          'nav.account': 'Konto',
          'nav.getStarted': 'Rozpocznij',
          'nav.seeAll': 'Zobacz Wszystko',
          'nav.aiChatbots': 'Chatboty AI',
          'nav.phoneCallers': 'Automatyzacja Połączeń',
          'nav.webDesign': 'Projektowanie Stron',
          'nav.customAI': 'Rozwiązania AI',
          'nav.contentCreation': 'Tworzenie Treści',
          'nav.digitalMarketing': 'Marketing Cyfrowy'
        }
      }
    }
  });