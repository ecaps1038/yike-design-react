'use client';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

import type React from 'react';

const colors = ['primary', 'success', 'warning', 'danger', 'neutral'];

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getColorNameList = (name: string): [string, string][] => {
  return levels.map(level => [`${name}-color-${level}`, `--yike-${name}-color-${level}`]);
};

interface SingleColorPaletteProps {
  list: [string, string][];
}

const SingleColorPalette: React.FC<SingleColorPaletteProps> = ({ list }) => {
  const { theme = 'light' } = useTheme();
  return (
    <div>
      {list.map(([text, variable], index) => (
        <div
          key={text}
          style={{ backgroundColor: `var(${variable})` }}
          className={clsx(
            'p-4 cursor-pointer select-none leading-none text-base hover:scale-105 transition-transform first-of-type:rounded-t-md last-of-type:rounded-b-md',
            theme === 'light' ? (index >= 5 ? 'text-white' : 'text-black') : index < 5 ? 'text-white' : 'text-black'
          )}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

const ColorPalette = () => {
  return (
    <div className="grid grid-cols-3 gap-8 my-8">
      {colors.map(color => (
        <SingleColorPalette key={color} list={getColorNameList(color)} />
      ))}
    </div>
  );
};

export default ColorPalette;
