import React, { useState } from 'react';
import { sendEmail } from '../lib/email';

const services = [
  'AI Chatbots',
  'Phone Callers',
  'Web Design',
  'Custom AI Solutions',
  'Content Creation',
  'Digital Marketing',
];

const referralSources = [
  'Google Search',
  'Social Media',
  'Friend/Colleague Recommendation',
  'Online Advertisement',
  'Other'
];

function ContactForm() {
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
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const showMarketingFields = formData.service === 'Digital Marketing';

  return (
    <div className="border border-white p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
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
            <option value="">Select a Service</option>
            {services.map(service => (
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
            <option value="">How did you find us?</option>
            {referralSources.map(source => (
              <option key={source} value={source}>{source}</option>
            ))}
          </select>
        </div>
        <div>
          <textarea
            name="mainQuestion"
            placeholder="What is your most important question?"
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
                placeholder="How much are you spending on advertising / month (In USD)?"
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
                placeholder="What is your website?"
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
            placeholder="Message"
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
            placeholder="Additional Information"
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
          {status === 'submitting' ? 'Sending...' : 'Contact Us'}
        </button>
        {status === 'success' && (
          <p className="text-green-500 mt-4">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 mt-4">Error sending message. Please try again.</p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;