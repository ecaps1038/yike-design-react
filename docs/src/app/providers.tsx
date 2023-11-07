'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  // Scroll to top on route change
  React.useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <ThemeProvider attribute="yike-theme">
      <ProgressBar shallowRouting color="var(--yike-primary-color)" options={{ showSpinner: false }} />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
