import React, { useState, useRef, useEffect } from 'react';
import { Languages, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface LanguagePickerProps {
  currentLang: 'en' | 'zh';
  languages: Record<string, string>;
}

export default function LanguagePicker({ currentLang, languages }: LanguagePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={twMerge(
          "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
          "text-gray-700 dark:text-gray-300",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          isOpen && "bg-gray-100 dark:bg-gray-800"
        )}
        aria-label="Select language"
      >
        <Languages size={20} />
        <span className="text-sm font-medium hidden sm:block">{languages[currentLang]}</span>
        <ChevronDown size={16} className={twMerge("transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50 transform origin-top-right transition-all animate-in fade-in zoom-in-95 duration-100">
          {Object.entries(languages).map(([key, label]) => (
            <a
              key={key}
              href={`/${key === 'en' ? '' : key}`}
              className={twMerge(
                "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                currentLang === key && "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
              )}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
