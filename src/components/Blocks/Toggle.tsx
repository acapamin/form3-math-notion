import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '../../store/useStore';

interface ToggleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Toggle({ title, children, defaultOpen = false }: ToggleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { darkMode } = useStore();

  return (
    <div className="my-2">
      <div
        className={`
          flex items-center gap-2 p-2 rounded cursor-pointer
          ${darkMode ? 'hover:bg-notion-hover-dark' : 'hover:bg-notion-hover'}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronRight
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''} ${
            darkMode ? 'text-notion-text-dark' : 'text-notion-text'
          }`}
        />
        <span className={`font-medium ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
          {title}
        </span>
      </div>
      {isOpen && <div className="ml-6 mt-2">{children}</div>}
    </div>
  );
}
