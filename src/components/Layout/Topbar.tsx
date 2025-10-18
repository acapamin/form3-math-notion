import { Menu, Moon, Sun } from 'lucide-react';
import { useStore } from '../../store/useStore';

export default function Topbar() {
  const { darkMode, toggleDarkMode, toggleSidebar } = useStore();

  return (
    <header
      className={`
        h-12 border-b flex items-center justify-between px-4
        ${darkMode ? 'bg-notion-bg-dark border-notion-border-dark' : 'bg-notion-bg border-notion-border'}
      `}
    >
      <button
        onClick={toggleSidebar}
        className={`
          p-1.5 rounded hover:bg-opacity-80 transition-colors
          ${darkMode ? 'hover:bg-notion-hover-dark' : 'hover:bg-notion-hover'}
        `}
      >
        <Menu className={`w-5 h-5 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`} />
      </button>

      <button
        onClick={toggleDarkMode}
        className={`
          p-1.5 rounded hover:bg-opacity-80 transition-colors
          ${darkMode ? 'hover:bg-notion-hover-dark' : 'hover:bg-notion-hover'}
        `}
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-notion-text-dark" />
        ) : (
          <Moon className="w-5 h-5 text-notion-text" />
        )}
      </button>
    </header>
  );
}
