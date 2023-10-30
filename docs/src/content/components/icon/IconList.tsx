'use client';
import clsx from 'clsx';
import { useState } from 'react';
import * as Icons from '@yike-design/react-icons';
import { Yike1Filled, Yike1Outlined } from '@yike-design/react-icons';

import IconBox from './IconBox';

const filledIcons = Object.keys(Icons).filter(key => key.endsWith('Filled'));

const outlinedIcons = Object.keys(Icons).filter(key => key.endsWith('Outlined'));

type IconType = 'filled' | 'outlined';

interface IconButtonProps {
  selected: boolean;
  text: React.ReactNode;
  onClick: () => void;
}

const IconButton = ({ selected, text, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx('px-4 py-1.5 cursor-pointer rounded text-base hover:bg-yike-2 transition duration-200', {
        '!bg-yike-bg-1': selected,
      })}
    >
      {text}
    </button>
  );
};

const IconList = () => {
  const [search, setSearch] = useState('');

  const [iconType, setIconType] = useState<IconType>('outlined');

  const iconList = (iconType === 'filled' ? filledIcons : outlinedIcons).filter(icon =>
    icon.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center gap-4 pb-8">
        <div className="p-0.5 bg-yike-4 rounded flex items-center">
          <IconButton
            text={
              <div className="flex items-center">
                <Yike1Outlined className="text-2xl mr-0.5" />
                <span>线框风格</span>
              </div>
            }
            selected={iconType === 'outlined'}
            onClick={() => setIconType('outlined')}
          />
          <IconButton
            text={
              <div className="flex items-center">
                <Yike1Filled className="text-2xl mr-0.5" />
                <span>线框风格</span>
              </div>
            }
            selected={iconType === 'filled'}
            onClick={() => setIconType('filled')}
          />
        </div>
        {/* TODO: change to Input component */}
        <div className="flex-grow">
          <input
            onChange={e => setSearch(e.target.value)}
            className="h-10 border px-2 text-base focus:outline-none rounded w-full"
            placeholder="在此搜索图标，点击图标可复制代码"
            type="text"
          />
        </div>
      </div>
      <div className="grid grid-cols-6">
        {iconList.map(icon => {
          // @ts-expect-error
          const Icon = Icons[icon];
          return <IconBox key={icon} name={icon} icon={<Icon />} />;
        })}
      </div>
    </div>
  );
};

export default IconList;
