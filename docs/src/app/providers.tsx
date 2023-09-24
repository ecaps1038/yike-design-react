'use client';
import type React from 'react';
import { ThemeProvider } from 'next-themes';

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ThemeProvider enableColorScheme={false}>{children}</ThemeProvider>;
};

export default Providers;
