import React from 'react';
import './button.css';

export interface ButtonPropTypes {
  className?: string;

  label?: string;

  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ disabled, className, label }: ButtonPropTypes) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={['storybook-button', className].join(' ')}
    >
      {label}
    </button>
  );
};
