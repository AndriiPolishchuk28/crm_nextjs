import React from 'react';

export interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard</h1>
    </main>
  );
}