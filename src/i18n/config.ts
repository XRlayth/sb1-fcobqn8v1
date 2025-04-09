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
          'nav.digitalMarketing': 'Digital Marketing',
          'hero.title': 'We Ignite Attention.\nYou Get More Clients.',
          'hero.subtitle': 'Transform your business with cutting-edge AI solutions that deliver real results. Stand out in the digital landscape and watch your growth skyrocket.',
          'about.title': 'ABOUT NEURAL AI',
          'about.description': "We're not just another marketing agency. We're pioneers in AI-driven marketing solutions that deliver measurable results. Our approach combines cutting-edge artificial intelligence with proven marketing strategies to help businesses thrive in the digital age.",
          'services.title': 'OUR SERVICES',
          'contact.title': 'LET\'S BUILD THE FUTURE',
          'footer.rights': '© {year} Neural AI. All rights reserved.'
        }
      },
      pl: {
        translation: {
          'nav.about': 'O Nas',
          'nav.services': 'Usługi',
          'nav.contact': 'Kontakt',
          'nav.account': 'Konto',
          'nav.getStarted': 'Rozpocznij',
          'nav.seeAll': 'Zobacz Wszystkie',
          'nav.aiChatbots': 'Chatboty AI',
          'nav.phoneCallers': 'Automatyzacja Połączeń',
          'nav.webDesign': 'Projektowanie Stron',
          'nav.customAI': 'Rozwiązania AI',
          'nav.contentCreation': 'Tworzenie Treści',
          'nav.digitalMarketing': 'Marketing Cyfrowy',
          'hero.title': 'Przyciągamy Uwagę.\nZyskujesz Klientów.',
          'hero.subtitle': 'Przekształć swoją firmę dzięki najnowocześniejszym rozwiązaniom AI, które przynoszą realne rezultaty. Wyróżnij się w cyfrowym świecie i obserwuj, jak Twój rozwój przyspiesza.',
          'about.title': 'O NEURAL AI',
          'about.description': 'Nie jesteśmy kolejną agencją marketingową. Jesteśmy pionierami w rozwiązaniach marketingowych opartych na AI, które przynoszą wymierne rezultaty. Nasze podejście łączy najnowocześniejszą sztuczną inteligencję ze sprawdzonymi strategiami marketingowymi, aby pomóc firmom rozwijać się w erze cyfrowej.',
          'services.title': 'NASZE USŁUGI',
          'contact.title': 'ZBUDUJMY PRZYSZŁOŚĆ',
          'footer.rights': '© {year} Neural AI. Wszelkie prawa zastrzeżone.'
        }
      }
    }
  });

export default i18n;