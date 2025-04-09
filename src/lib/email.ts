import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendEmail = async (formData: {
  name: string;
  email: string;
  service: string;
  message: string;
  additionalInfo: string;
}) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Neural AI <onboarding@resend.dev>',
      to: ['neuralai.noreply@gmail.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${formData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${formData.email}</p>
            <p style="margin: 10px 0;"><strong>Service:</strong> ${formData.service}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong> ${formData.message}</p>
            <p style="margin: 10px 0;"><strong>Additional Info:</strong> ${formData.additionalInfo || 'None provided'}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">This email was sent from the Neural AI contact form.</p>
        </div>
      `,
    });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};