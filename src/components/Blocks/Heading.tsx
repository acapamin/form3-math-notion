import { useStore } from '../../store/useStore';

interface HeadingProps {
  level: 1 | 2 | 3;
  children: React.ReactNode;
}

export default function Heading({ level, children }: HeadingProps) {
  const { darkMode } = useStore();

  const styles = {
    1: 'text-4xl font-bold mt-8 mb-4',
    2: 'text-3xl font-semibold mt-6 mb-3',
    3: 'text-2xl font-semibold mt-4 mb-2',
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${styles[level]} ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
      {children}
    </Tag>
  );
}
