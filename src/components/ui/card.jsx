import React from "react";

const cardStyle = {
  backgroundColor: '#1f2937',
  borderRadius: '0.5rem',
  border: '1px solid #374151',
  overflow: 'hidden',
  width: '100%',
  color: '#ffffff',
  marginBottom: '1.5rem',
  '&:last-child': {
    marginBottom: 0
  }
};

const cardHeaderStyle = {
  padding: '1.25rem 1.5rem 0.75rem',
  borderBottom: '1px solid #374151'
};

const cardDescriptionStyle = {
  fontSize: '0.875rem',
  color: '#d1d5db',
  margin: 0,
  lineHeight: '1.5'
};

const cardContentStyle = {
  padding: '1rem 1.5rem 1.5rem',
  '& p': {
    margin: '0.5rem 0 0 0',
    lineHeight: '1.5',
    fontSize: '0.875rem',
    color: '#d1d5db'
  }
};

const cardFooterStyle = {
  padding: '0.75rem 1.5rem',
  borderTop: '1px solid #374151',
  display: 'flex',
  justifyContent: 'center'
};

export function Card({ style, ...props }) {
  return <div style={{ ...cardStyle, ...style }} {...props} />;
}

export function CardHeader({ style, ...props }) {
  return <div style={{ ...cardHeaderStyle, ...style }} {...props} />;
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
