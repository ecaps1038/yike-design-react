'use client';
import React from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <ProgressBar
        shallowRouting
        color="var(--yike-color-primary)"
        options={{ showSpinner: false }}
      />
      {children}
    </React.Fragment>
  );
};

export default Providers;
