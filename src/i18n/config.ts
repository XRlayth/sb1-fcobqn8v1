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
          'contact.title': "LET'S BUILD THE FUTURE",
          'contact.subtitle': 'Ready to transform your business with AI? Get in touch with our team.',
          'contact.reachOut': 'REACH OUT TO US',
          'footer.rights': '© {year} Neural AI. All rights reserved.',
          'services.chatbots.title': 'AI CHATBOTS',
          'services.chatbots.subtitle': 'Transform your customer service with intelligent, always-on AI chatbots',
          'services.phoneCallers.title': 'AI PHONE CALLERS',
          'services.phoneCallers.subtitle': 'Revolutionize your outbound calling with intelligent AI voice agents',
          'services.webDesign.title': 'WEB DESIGN',
          'services.webDesign.subtitle': 'Creating stunning, modern web experiences that captivate and convert',
          'services.customAI.title': 'CUSTOM AI SOLUTIONS',
          'services.customAI.subtitle': 'Tailored artificial intelligence solutions designed for your unique business needs',
          'services.contentCreation.title': 'CONTENT CREATION',
          'services.contentCreation.subtitle': 'Craft compelling content that engages your audience and drives results',
          'services.digitalMarketing.title': 'DIGITAL MARKETING',
          'services.digitalMarketing.subtitle': 'Boost your online presence with AI-powered digital marketing strategies'
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
          'contact.subtitle': 'Gotowy na transformację swojego biznesu z AI? Skontaktuj się z naszym zespołem.',
          'contact.reachOut': 'SKONTAKTUJ SIĘ Z NAMI',
          'footer.rights': '© {year} Neural AI. Wszelkie prawa zastrzeżone.',
          'services.chatbots.title': 'CHATBOTY AI',
          'services.chatbots.subtitle': 'Przekształć obsługę klienta dzięki inteligentnym chatbotom AI działającym 24/7',
          'services.phoneCallers.title': 'AUTOMATYZACJA POŁĄCZEŃ',
          'services.phoneCallers.subtitle': 'Zrewolucjonizuj połączenia wychodzące dzięki inteligentnym agentom głosowym AI',
          'services.webDesign.title': 'PROJEKTOWANIE STRON',
          'services.webDesign.subtitle': 'Tworzymy nowoczesne strony internetowe, które przyciągają i konwertują',
          'services.customAI.title': 'ROZWIĄZANIA AI',
          'services.customAI.subtitle': 'Dostosowane rozwiązania sztucznej inteligencji zaprojektowane dla Twoich unikalnych potrzeb biznesowych',
          'services.contentCreation.title': 'TWORZENIE TREŚCI',
          'services.contentCreation.subtitle': 'Twórz angażujące treści, które przyciągają odbiorców i przynoszą rezultaty',
          'services.digitalMarketing.title': 'MARKETING CYFROWY',
          'services.digitalMarketing.subtitle': 'Zwiększ swoją obecność online dzięki strategiom marketingowym opartym na AI'
        }
      }
    }
  });

export default i18n;