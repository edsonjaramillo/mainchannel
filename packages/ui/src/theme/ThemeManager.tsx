'use client';

import { useLayoutEffect } from 'react';

import { useTheme } from '../context/ThemeContext';
import { DarkIcon, LightIcon, SystemIcon } from '../icons/ThemeIcons';
import { cn } from '../lib/tw';

type themes = 'light' | 'dark' | 'system';

export default function ThemeManager() {
  const { theme, setTheme } = useTheme();

  function initTheme() {
    const userPreference = localStorage.getItem('theme');
    if (userPreference === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      return;
    }
    if (userPreference === 'light') {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      return;
    }
    if (userPreference === 'system') {
      document.documentElement.classList.remove('dark');
      setTheme('system');
      return;
    }
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkModePreference) {
      document.documentElement.classList.add('dark');
      setTheme('system');
      return;
    }
  }

  function changeTheme(theme: themes) {
    switch (theme) {
      case 'light':
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setTheme('light');
        break;
      case 'dark':
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
        break;
      case 'system':
        localStorage.removeItem('theme');
        setTheme('system');
        initTheme();
        break;
      default:
        break;
    }
  }

  useLayoutEffect(() => {
    initTheme();
  }, []);

  return (
    <div className="flex gap-2">
      <ThemeButton theme="light" isSelected={theme === 'light'} onClick={() => changeTheme('light')}>
        <LightIcon />
      </ThemeButton>
      <ThemeButton theme="system" isSelected={theme === 'system'} onClick={() => changeTheme('system')}>
        <SystemIcon />
      </ThemeButton>
      <ThemeButton theme="dark" isSelected={theme === 'dark'} onClick={() => changeTheme('dark')}>
        <DarkIcon />
      </ThemeButton>
    </div>
  );
}

type ThemeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme: themes;
  isSelected?: boolean;
};

function ThemeButton({ theme, isSelected, children, ...props }: ThemeButtonProps) {
  const buttonClasses = cn(
    'rounded-full p-1 text-grayscale-600 transition-all duration-base hover:text-grayscale-900',
    isSelected && 'bg-grayscale-200 text-grayscale-800',
  );

  const isSelectedText = isSelected ? ' (currently selected)' : '';

  return (
    <button className={buttonClasses} type="button" {...props}>
      <span className="sr-only">{`${theme} theme${isSelectedText}`}</span>
      {children}
    </button>
  );
}
