'use client';
import { useTheme } from 'next-themes';
import { MoonFilled, SunFilled } from '@yike-design/react-icons';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-base text-yellow-500"
    >
      {theme === 'dark' ? <MoonFilled /> : <SunFilled />}
    </button>
  );
};

export default ThemeButton;
