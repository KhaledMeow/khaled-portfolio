import React from "react";

const cardStyle = {
  backgroundColor: 'rgba(31, 41, 55, 0.8)',
  backdropFilter: 'blur(8px)',
  borderRadius: '0.75rem',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  width: '100%',
  color: '#ffffff',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  marginBottom: '2rem',
  transform: 'translateY(0)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
  },
  '&:last-child': {
    marginBottom: 0
  }
};

const cardHeaderStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  padding: '1.75rem 2rem 1.25rem',
  background: 'linear-gradient(to right, rgba(252, 165, 58, 0.1), transparent)'
};

const cardTitleStyle = {
  fontSize: '1.375rem',
  fontWeight: 600,
  lineHeight: '1.3',
  letterSpacing: '-0.01em',
  margin: 0,
  color: '#fca53a',
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    width: '40px',
    height: '2px',
    backgroundColor: 'rgba(252, 165, 58, 0.5)'
  }
};

const cardDescriptionStyle = {
  fontSize: '0.9375rem',
  color: '#e5e7eb',
  margin: 0,
  lineHeight: '1.6',
  opacity: 0.9
};

const cardContentStyle = {
  padding: '1.5rem 2rem',
  color: '#e5e7eb',
  '& p': {
    margin: '0.75rem 0 0 0',
    lineHeight: '1.7',
    fontSize: '0.9375rem',
    color: '#d1d5db',
    opacity: 0.9
  }
};

const cardFooterStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0 2rem 1.75rem',
  marginTop: 'auto',
  borderTop: '1px solid rgba(255, 255, 255, 0.05)'
};

export function Card({ style, ...props }) {
  return <div style={{ ...cardStyle, ...style }} {...props} />;
}

export function CardHeader({ style, ...props }) {
  return <div style={{ ...cardHeaderStyle, ...style }} {...props} />;
}

export function CardTitle({ style, ...props }) {
  return <h3 style={{ ...cardTitleStyle, ...style }} {...props} />;
}

export function CardDescription({ style, ...props }) {
  return <p style={{ ...cardDescriptionStyle, ...style }} {...props} />;
}

export function CardContent({ style, ...props }) {
  return <div style={{ ...cardContentStyle, ...style }} {...props} />;
}

export function CardFooter({ style, ...props }) {
  return <div style={{ ...cardFooterStyle, ...style }} {...props} />;
}
