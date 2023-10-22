import type React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLElement> {
  disabled?: boolean;
}
