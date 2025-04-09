import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield } from 'lucide-react';
import Modal from './Modal';
import VerificationInput from './VerificationInput';
import { createVerificationToken, sendVerificationEmail, enable2FA } from '../lib/auth';

interface TwoFactorSetupProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  userEmail: string;
  onSuccess: () => void;
}

function TwoFactorSetup({ isOpen, onClose, userId, userEmail, onSuccess }: TwoFactorSetupProps) {
  const [step, setStep] = useState<'intro' | 'verify'>('intro');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleStartSetup = async () => {
    try {
      setIsLoading(true);
      setError('');

      // Generate and send verification token
      const token = await createVerificationToken(userId, '2fa_setup');
      await sendVerificationEmail(userEmail, token, '2fa_setup');

      setStep('verify');
      setIsLoading(false);
    } catch (error) {
      console.error('Error starting 2FA setup:', error);
      setError('Failed to start 2FA setup. Please try again.');
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    try {
      setIsLoading(true);
      setError('');

      // Enable 2FA for the user
      await enable2FA(userId);

      onSuccess();
      onClose();
    } catch (error) {
      console.error('Error verifying code:', error);
      setError('Invalid verification code. Please try again.');
      setIsLoading(false);
    }
  };

  const handleCodeComplete = (code: string) => {
    if (code.length === 6) {
      handleVerifyCode();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Two-Factor Authentication Setup">
      {step === 'intro' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full border-2 border-white">
              <Shield className="w-8 h-8" />
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-center">
            Enhance Your Account Security
          </h3>

          <p className="text-gray-400 mb-6 text-center">
            Two-factor authentication adds an extra layer of security to your account. 
            Each time you sign in, you'll need to enter a verification code sent to your email.
          </p>

          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
              {error}
            </div>
          )}

          <div className="flex justify-center">
            <button
              onClick={handleStartSetup}
              disabled={isLoading}
              className="px-6 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-300 disabled:opacity-50 flex items-center space-x-2"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <span className="w-4 h-4 mr-2 border-2 border-t-black border-black/30 rounded-full animate-spin"></span>
                  Setting up...
                </span>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>Start Setup</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="text-center mb-6">
            We've sent a verification code to <span className="font-semibold">{userEmail}</span>. 
            Please enter it below to complete the setup.
          </p>

          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
              {error}
            </div>
          )}

          <div className="mb-6">
            <VerificationInput
              value={verificationCode}
              onChange={setVerificationCode}
              onComplete={handleCodeComplete}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setStep('intro')}
              className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleVerifyCode}
              disabled={verificationCode.length !== 6 || isLoading}
              className="px-6 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <span className="w-4 h-4 mr-2 border-2 border-t-black border-black/30 rounded-full animate-spin"></span>
                  Verifying...
                </span>
              ) : (
                'Enable 2FA'
              )}
            </button>
          </div>
        </motion.div>
      )}
    </Modal>
  );
}

export default TwoFactorSetup;