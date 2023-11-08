import '@yike-design/react/style';
import type { Metadata } from 'next';

import './globals.scss';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Yike Design React',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-cn" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
