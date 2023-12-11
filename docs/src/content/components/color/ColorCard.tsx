import type React from 'react';
import clsx from 'clsx';

interface ColorCardProps {
  className: string;
  text: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ text, className }) => {
  return (
    <div
      className={clsx('rounded-lg h-20 p-4 select-none cursor-pointer hover:scale-105 transition-transform', className)}
    >
      {text}
    </div>
  );
};

export default ColorCard;
