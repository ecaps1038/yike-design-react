import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Yike Design React',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <React.Fragment>
      <Header />
      <main className="pt-header min-h-screen">{children}</main>
    </React.Fragment>
  );
}
