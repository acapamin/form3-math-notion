import { useStore } from '../../store/useStore';

interface ParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  const { darkMode } = useStore();

  return (
    <p className={`text-base leading-relaxed mb-2 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
      {children}
    </p>
  );
}
