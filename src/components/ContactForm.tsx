import React, { useState } from 'react';
import { sendEmail } from '../lib/email';
import { useTranslation } from 'react-i18next';

const services = {
  en: [
    'AI Chatbots',
    'Phone Callers',
    'Web Design',
    'Custom AI Solutions',
    'Content Creation',
    'Digital Marketing',
  ],
  pl: [
    'Chatboty AI',
    'Automatyzacja Połączeń',
    'Projektowanie Stron',
    'Rozwiązania AI',
    'Tworzenie Treści',
    'Marketing Cyfrowy',
  ]
};

const referralSources = {
  en: [
    'Google Search',
    'Social Media',
    'Friend/Colleague Recommendation',
    'Online Advertisement',
    'Other'
  ],
  pl: [
    'Wyszukiwarka Google',
    'Media Społecznościowe',
    'Polecenie od Znajomego/Współpracownika',
    'Reklama Online',
    'Inne'
  ]
};

function ContactForm() {
  const { i18n } = useTranslation();
  const isPolish = i18n.language === 'pl';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    referralSource: '',
    mainQuestion: '',
    adSpend: '',
    website: '',
    additionalInfo: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await sendEmail(formData);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
        referralSource: '',
        mainQuestion: '',
        adSpend: '',
        website: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Error sending form data:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const showMarketingFields = formData.service === (isPolish ? 'Marketing Cyfrowy' : 'Digital Marketing');

  return (
    <div className="border border-white p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder={isPolish ? "Imię" : "Name"}
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 bg-black border border-white rounded-lg mb-4 focus:outline-none focus:border-white text-white"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 bg-black border border-white rounded-lg mb-4 focus:outline-none focus:border-white text-white"
          />
        </div>
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-4 bg-black border border-white rounded-lg mb-4 focus:outline-none focus:border-white text-white"
          >
            <option value="">{isPolish ? "Wybierz Usługę" : "Select a Service"}</option>
            {(isPolish ? services.pl : services.en).map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            required
            className="w-full p-4 bg-black border border-white rounded-lg mb-4 focus:outline-none focus:border-white text-white"
          >
            <option value="">{isPolish ? "Jak nas znalazłeś?" : "How did you find us?"}</option>
            {(isPolish ? referralSources.pl : referralSources.en).map(source => (
              <option key={source} value={source}>{source}</option>
            ))}
          </select>
        </div>
        <div>
          <textarea
            name="mainQuestion"
            placeholder={isPolish ? "Jakie jest Twoje najważniejsze pytanie?" : "What is your most important question?"}
            value={formData.mainQuestion}
            onChange={handleChange}
            required
            rows={3}
            className="w-full p-4 bg-black border border-white rounded-lg mb-4 focus:outline-none focus:border-white text-white"
          />
        </div>
        {showMarketingFields && (
          <>
            <div>
              <input
                type="number"
                name="adSpend"
                placeholder={isPolish ? "Ile wydajesz na reklamę miesięcznie (w USD)?" : "How much are you spending on advertising / month (In USD)?"}
                value={formData.adSpend}
                onChange={handleChange}
                required
                className="w-full p-4 bg-black border border-white rounded-lg mb-4 focus:outline-none focus:border-white text-white"
              />
            </div>
            <div>
              <input
                type="url"
                name="website"
                placeholder={isPolish ? "Jaka jest Twoja strona internetowa?" : "What is your website?"}
                value={formData.website}
                onChange={handleChange}
                required
                className="w-full p-4 bg-black border border-white rounded-lg mb-4 focus:outline-none focus:border-white text-white"
              />
            </div>
          </>
        )}
        <div>
          <textarea
            name="message"
            placeholder={isPolish ? "Wiadomość" : "Message"}
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-4 bg-black border border-white rounded-lg mb-4 focus:outline-none focus:border-white text-white"
          />
        </div>
        <div>
          <textarea
            name="additionalInfo"
            placeholder={isPolish ? "Dodatkowe Informacje" : "Additional Information"}
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={3}
            className="w-full p-4 bg-black border border-white rounded-lg mb-4 focus:outline-none focus:border-white text-white"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full px-8 py-4 rounded-lg border border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          {status === 'submitting' 
            ? (isPolish ? 'Wysyłanie...' : 'Sending...') 
            : (isPolish ? 'Wyślij Wiadomość' : 'Contact Us')}
        </button>
        {status === 'success' && (
          <p className="text-green-500 mt-4">
            {isPolish ? 'Wiadomość wysłana pomyślnie!' : 'Message sent successfully!'}
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-500 mt-4">
            {isPolish ? 'Błąd wysyłania wiadomości. Spróbuj ponownie.' : 'Error sending message. Please try again.'}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;