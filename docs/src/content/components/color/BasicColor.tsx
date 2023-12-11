import clsx from 'clsx';
import type React from 'react';

const LIGHT_BASIC_COLOR = {
  primary: '#2B5AED',
  link: '#1890ff',
  success: '#1fb4a2',
  warning: '#ffaa1a',
  danger: '#fa5247',
  neutral: '#1e2025',
};

const DARK_BASIC_COLOR = {
  primary: '#3575f6',
  link: '#308ce1',
  success: '#19ad78',
  warning: '#f6a224',
  danger: '#df4d43',
  neutral: '#ffffff',
};

interface ColorCardProps {
  name: string;
  color: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ color, name }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={clsx(
        'flex justify-between p-4 rounded-lg text-base cursor-pointer select-none hover:scale-105 transition-transform',
        color.slice(1) === 'ffffff' ? 'border border-yike-1 text-black' : 'text-white'
      )}
    >
      <span>{name}</span>
      <span className="uppercase">{color}</span>
    </div>
  );
};

const renderColorCardList = (title: string, colors: Record<string, string>) => {
  return (
    <div>
      <div className="leading-loose py-4">{title}</div>
      <div className="flex flex-col gap-2">
        {Object.entries(colors).map(([name, color]) => (
          <ColorCard key={color} name={`${name}-color`} color={color} />
        ))}
      </div>
    </div>
  );
};

const BasicColor: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {renderColorCardList('浅色主题', LIGHT_BASIC_COLOR)}
      {renderColorCardList('深色主题', DARK_BASIC_COLOR)}
    </div>
  );
};

export default BasicColor;
