import React from 'react';
import { Bot } from 'lucide-react';
import Footer from '../../components/Footer';
import Naglowek from '../components/Naglowek';


const UslugiChatboty = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Bot className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Chatboty AI</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zautomatyzuj obsługę klienta i zwiększ efektywność komunikacji dzięki naszym inteligentnym chatbotom
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Korzyści</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Dostępność 24/7 dla Twoich klientów</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Natychmiastowe odpowiedzi na typowe pytania</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Redukcja kosztów obsługi klienta</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Personalizacja odpowiedzi w czasie rzeczywistym</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Funkcje</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Integracja z popularnymi platformami komunikacyjnymi</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Zaawansowane rozpoznawanie języka naturalnego</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Automatyczne przekierowanie do konsultanta</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Analityka i raporty wydajności</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Proces Wdrożenia</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Analiza Potrzeb</h3>
              <p className="text-gray-600">Dokładna analiza wymagań i celów biznesowych</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-semibold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Konfiguracja</h3>
              <p className="text-gray-600">Dostosowanie chatbota do specyfiki biznesu</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-semibold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Wdrożenie</h3>
              <p className="text-gray-600">Implementacja i szkolenie zespołu</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/główna/kontakt"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Skontaktuj się z nami
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UslugiChatboty;