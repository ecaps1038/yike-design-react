import Link from 'next/link';
import Image from 'next/image';

import Nav from './Nav';
import logo from '@/assets/logo.svg';

const navigators = [
  { base: 'design', href: '/design/yike', text: '设计' },
  { base: 'develop', href: '/develop/yike', text: '开发' },
  { base: 'module', href: '/module/button', text: '组件' },
];

const Header = () => {
  return (
    <header className="h-[60px] px-[30px] flex items-center border-b border-yike flex-shrink-0">
      <div className="flex items-center">
        <Image
          width={32}
          src={logo}
          alt="logo"
        />
        <Link
          className="text-lg font-semibold ml-3"
          href="/"
        >
          Yike Design React
        </Link>
      </div>
      {/* TODO: search */}
      <div className="flex ml-auto gap-10">
        {navigators.map(nav => (
          <Nav
            {...nav}
            key={nav.base}
          />
        ))}
        <Link
          className="text-sm"
          target="_blank"
          href="https://github.com/ecaps1038/yike-design-react"
          rel="noreferrer"
        >
          {/* TODO: text to icon */}
          Github
        </Link>
        {/* TODO: theme */}
        {/* TODO: login */}
      </div>
    </header>
  );
};

export default Header;
