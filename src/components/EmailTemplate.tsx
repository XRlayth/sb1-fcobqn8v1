import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  service: string;
  message: string;
  additionalInfo: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  service,
  message,
  additionalInfo,
}) => (
  <div>
    <h1>New message from {firstName}</h1>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Service:</strong> {service}</p>
    <p><strong>Message:</strong> {message}</p>
    <p><strong>Additional Info:</strong> {additionalInfo}</p>
  </div>
);