import { AlertCircle, Info, Lightbulb } from 'lucide-react';
import { useStore } from '../../store/useStore';

interface CalloutProps {
  type?: 'info' | 'warning' | 'tip';
  children: React.ReactNode;
}

export default function Callout({ type = 'info', children }: CalloutProps) {
  const { darkMode } = useStore();

  const config = {
    info: {
      icon: <Info className="w-5 h-5" />,
      bg: darkMode ? 'bg-blue-950' : 'bg-blue-50',
      border: darkMode ? 'border-blue-800' : 'border-blue-200',
      text: darkMode ? 'text-blue-200' : 'text-blue-900',
    },
    warning: {
      icon: <AlertCircle className="w-5 h-5" />,
      bg: darkMode ? 'bg-yellow-950' : 'bg-yellow-50',
      border: darkMode ? 'border-yellow-800' : 'border-yellow-200',
      text: darkMode ? 'text-yellow-200' : 'text-yellow-900',
    },
    tip: {
      icon: <Lightbulb className="w-5 h-5" />,
      bg: darkMode ? 'bg-green-950' : 'bg-green-50',
      border: darkMode ? 'border-green-800' : 'border-green-200',
      text: darkMode ? 'text-green-200' : 'text-green-900',
    },
  };

  const { icon, bg, border, text } = config[type];

  return (
    <div className={`flex gap-3 p-4 rounded-lg border my-4 ${bg} ${border}`}>
      <div className={text}>{icon}</div>
      <div className={`flex-1 ${text}`}>{children}</div>
    </div>
  );
}
