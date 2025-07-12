import React from 'react';

const baseButtonStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',
  fontWeight: 500,
  cursor: 'pointer',
  border: '1px solid #d1d5db',
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  lineHeight: '1.5',
};

const variants = {
  default: {
    backgroundColor: '#fca53a',
    borderColor: '#fca53a',
    color: 'white',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: '#e6952e',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: 'none'
    }
  },
  destructive: {
    backgroundColor: '#ef4444',
    borderColor: '#ef4444',
    color: 'white',
  },
  outline: {
    backgroundColor: 'white',
    borderColor: '#d1d5db',
    color: '#1f2937',
  },
  secondary: {
    backgroundColor: '#f3f4f6',
    borderColor: '#f3f4f6',
    color: '#1f2937',
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: '#1f2937',
  },
  link: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: '#3b82f6',
    textDecoration: 'underline',
  },
};

const sizes = {
  default: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
  },
  sm: {
    padding: '0.375rem 0.75rem',
    fontSize: '0.75rem',
  },
  lg: {
    padding: '0.625rem 1.25rem',
    fontSize: '1rem',
  },
  icon: {
    padding: '0.5rem',
    width: '2.25rem',
    height: '2.25rem',
  },
};

export function Button({
  variant = 'default',
  size = 'default',
  as: Tag = 'button',
  style = {},
  children,
  ...props
}) {
  return (
    <Tag
      style={{
        ...baseButtonStyles,
        ...(variants[variant] || variants.default),
        ...(sizes[size] || sizes.default),
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
