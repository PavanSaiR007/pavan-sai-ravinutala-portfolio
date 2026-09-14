import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  compact?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ compact = false, className = '' }) => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center gap-2 rounded-xl transition-all duration-200 border border-subtle hover:border-hover focus:outline-none focus:ring-2 focus:ring-accent-primary/40 ${
        compact
          ? 'p-2 bg-surface text-primary'
          : 'px-3 py-1.5 bg-surface text-secondary hover:text-primary text-xs font-medium'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'Light (Warm Editorial)' : 'Dark (Navy)'} theme`}
      title={`Switch to ${isDark ? 'Warm Light mode' : 'Dark Navy mode'}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-accent transition-transform hover:-rotate-12" />
        )}
      </div>

      {!compact && (
        <span className="font-mono text-[11px] select-none">
          {isDark ? 'Dark' : 'Warm'}
        </span>
      )}
    </button>
  );
};
