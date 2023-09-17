import type { Metadata } from 'next';
import Header from '@/components/Header';

import Providers from './Providers';

export const metadata: Metadata = {
  title: 'Yike Design React',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="h-screen flex flex-col">
        <Header />
        <main className="flex-grow overflow-hidden">{children}</main>
      </div>
    </Providers>
  );
}
