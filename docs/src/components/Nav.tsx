'use client';
import clsx from 'clsx';
import Link from 'next/link';
import type React from 'react';
import { usePathname } from 'next/navigation';

interface NavProps {
  base: string;
  href: string;
  text: string;
}

const Nav: React.FC<NavProps> = ({ base, href, text }) => {
  const pathname = usePathname();

  const className = clsx('text-sm', {
    'text-primary font-semibold': pathname.split('/')[1] === base,
  });

  return (
    <Link
      className={className}
      href={href}
    >
      {text}
    </Link>
  );
};

export default Nav;
