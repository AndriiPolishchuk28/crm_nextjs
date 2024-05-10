'use client';
import React from 'react';
import { ServerComponentsCopy } from './server-components copy';

export interface ClientComponentsProps {
  children?: React.ReactNode;
}

export function ClientComponents({ children }: ClientComponentsProps) {
  console.log('Client Components');
  return (
    <div>
      <span>Client Components</span>
      {children}
    </div>
  );
}
