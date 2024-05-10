import { headers } from 'next/headers';
import React from 'react';

export interface ServerComponentsProps {
  children?: React.ReactNode;
}

export function ServerComponentsCopy({ children }: ServerComponentsProps) {
  console.log('Server Components Copy');
  console.log(headers());
  return (
    <div>
      <span>Server Components Copy</span>
      {children}
    </div>
  );
}
