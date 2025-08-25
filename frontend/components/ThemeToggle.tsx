'use client';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const isDark = (theme === 'system' ? systemTheme : theme) === 'dark';
  return (
    <button
      className="rounded-md border border-gray-300 dark:border-gray-700 px-2.5 py-1.5 text-sm"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
