// formUtils.ts
import { useState, FocusEvent } from 'react';

interface FormValidation {
  emailError: boolean;
  passwordError: boolean;
  handleEmailBlur: (event: FocusEvent<HTMLInputElement>) => void;
  handlePasswordBlur: (event: FocusEvent<HTMLInputElement>) => void;
}

export const useFormValidation = (): FormValidation => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const isEmail = (email: string): boolean =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const isValidPassword = (password: string): boolean =>
    password.length >= 4 && password.length <= 20;

  const handleEmailBlur = (event: FocusEvent<HTMLInputElement>): void => {
    const emailInput = event.target.value;
    setEmailError(!isEmail(emailInput));
  };

  const handlePasswordBlur = (event: FocusEvent<HTMLInputElement>): void => {
    const passwordInput = event.target.value;
    setPasswordError(!isValidPassword(passwordInput));
  };

  return {
    emailError,
    passwordError,
    handleEmailBlur,
    handlePasswordBlur,
  };
};
