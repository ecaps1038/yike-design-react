'use client';
import React from 'react';

import AnchorContext from './context';
import { createCssScope } from '../../utils';
import type { AnchorLinkProps } from './interface';

const AnchorLink: React.FC<AnchorLinkProps> = ({ href, title }) => {
  const bem = createCssScope('anchor-link');
  const { activeLink, onClick, scrollTo } = React.useContext(AnchorContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    scrollTo(href);
    onClick?.(e, { href, title });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={bem({ active: activeLink === href })}
    >
      {title}
    </a>
  );
};

export default AnchorLink;
