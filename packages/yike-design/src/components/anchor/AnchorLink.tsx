import clsx from 'clsx';
import React from 'react';

import AnchorContext from './context';
import { createCssScope } from '../../utils';
import type { AnchorLinkProps } from './interface';

const AnchorLink: React.FC<React.PropsWithChildren<AnchorLinkProps>> = ({ href, title, children, className }) => {
  const bem = createCssScope('anchor-link');
  const { activeLink, onClick, scrollTo } = React.useContext(AnchorContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    scrollTo(href);
    onClick?.(e, { href, title });
  };

  return (
    <li className={clsx('yk-anchor-list-item', className)}>
      <a href={href} onClick={handleClick} className={bem({ active: activeLink === href })}>
        {title}
      </a>
      {children && <ul className="yk-anchor-list">{children}</ul>}
    </li>
  );
};

export default AnchorLink;
