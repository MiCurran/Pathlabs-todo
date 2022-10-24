import React from 'react';
import { THEME } from '../../../config';

type ButtonProps = {
  children: React.ReactNode | string;
  onClick?: () => unknown;
  style?: React.CSSProperties;
  bgColor?: string;
  type?: 'button' | 'reset' | 'submit';
  isDisabled?: boolean;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const { children, onClick, style, bgColor, type, isDisabled, className } = { ...props };
  return (
    <button
      className={className}
      disabled={isDisabled || false}
      onClick={onClick}
      type={type || 'button'}
      style={{
        backgroundColor: bgColor || THEME.colors.brand[500],
        cursor: 'pointer',
        fontSize: '.8rem',
        minWidth: '50px',
        fontWeight: 700,
        padding: '0.5rem .5rem',
        borderRadius: '20px',
        border: 'none',
        ...style
      }}
    >
      {children}
    </button>
  );
};
