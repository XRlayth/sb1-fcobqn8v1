export const sendEmail = async (formData: {
  name: string;
  email: string;
  service: string;
  message: string;
  referralSource: string;
  mainQuestion: string;
  adSpend?: string;
  website?: string;
  additionalInfo: string;
}) => {
  try {
    const response = await fetch('https://hook.eu2.make.com/wbj9t2v48ywinelnwfs6221uc5mp6s25', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to send form data');
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending form data:', error);
    throw error;
  }
};