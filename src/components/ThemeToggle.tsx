import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMounted(true);
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
    const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored === 'dark' || (!stored && sysDark) ? 'dark' : 'light';
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9" /> 
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={twMerge(
        "p-2 rounded-full transition-colors duration-200",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        "text-gray-600 dark:text-gray-300"
      )}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
