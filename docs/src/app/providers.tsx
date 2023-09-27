'use client';
import type React from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider enableColorScheme={false}>
      <ProgressBar
        shallowRouting
        color="var(--yike-color-primary)"
        options={{ showSpinner: false }}
      />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
