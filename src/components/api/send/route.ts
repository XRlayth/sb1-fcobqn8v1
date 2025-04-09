import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import ReactDOMServer from 'react-dom/server'; // Importowanie ReactDOMServer
console.log('VITE_RESEND_API_KEY:', process.env.VITE_RESEND_API_KEY);

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, message, additionalInfo } = body;

    // Generowanie treści e-maila
    const emailContent = ReactDOMServer.renderToStaticMarkup(
      <EmailTemplate 
        firstName={name} 
        email={email} 
        service={service} 
        message={message} 
        additionalInfo={additionalInfo} 
      />
    );

    console.log("Sending email with content:", emailContent); // Logowanie treści e-maila

    // Wysyłanie e-maila
    const { data, error } = await resend.emails.send({
      from: 'AI Contact <onboarding@resend.dev>',
      to: ['neuralai.noreply@gmail.com'],
      subject: `New message from ${name}`,
      react: emailContent,
    });

    // Sprawdzenie błędu i logowanie odpowiedzi z API Resend
    if (error) {
      console.error('Resend API error:', error); // Logowanie pełnego błędu z Resend
      return Response.json({ error: error.message || 'Unknown error' }, { status: 500 });
    }

    console.log('Email sent successfully:', data);  // Logowanie sukcesu
    return Response.json({ success: true });
  } catch (error) {
    console.error('Server error:', error); // Logowanie błędów po stronie serwera
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}