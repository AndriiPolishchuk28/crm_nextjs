import React from 'react';

export interface ServerComponentsProps {
  children?: React.ReactNode;
}

export function ServerComponents({ children }: ServerComponentsProps) {
  console.log('Server Components');
  return (
    <div>
      <span>Server Components</span>
      {children}
    </div>
  );
}
