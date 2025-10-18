import { ChevronRight, Book, Calculator, CreditCard, Home } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '../../store/useStore';

interface SidebarItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'home',
    title: 'Home',
    icon: <Home className="w-4 h-4" />,
  },
  {
    id: 'chapter3',
    title: 'Chapter 3: Consumer Mathematics',
    icon: <Book className="w-4 h-4" />,
    children: [
      {
        id: 'savings-investments',
        title: '3.1 Savings & Investments',
        icon: <Calculator className="w-4 h-4" />,
      },
      {
        id: 'credit-debt',
        title: '3.2 Credit & Debt',
        icon: <CreditCard className="w-4 h-4" />,
      },
    ],
  },
];

export default function Sidebar() {
  const { sidebarOpen, currentPageId, setCurrentPage, darkMode } = useStore();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['chapter3']));

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const renderItem = (item: SidebarItem, depth = 0) => {
    const isExpanded = expandedItems.has(item.id);
    const isActive = currentPageId === item.id;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="select-none">
        <div
          className={`
            flex items-center gap-1 px-2 py-1 rounded cursor-pointer
            transition-colors
            ${isActive
              ? darkMode ? 'bg-notion-hover-dark' : 'bg-notion-hover'
              : darkMode ? 'hover:bg-notion-hover-dark' : 'hover:bg-notion-hover'
            }
          `}
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.id);
            } else {
              setCurrentPage(item.id);
            }
          }}
        >
          {hasChildren && (
            <ChevronRight
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            />
          )}
          {!hasChildren && <div className="w-4" />}
          {item.icon}
          <span className={`text-sm flex-1 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
            {item.title}
          </span>
        </div>
        {hasChildren && isExpanded && (
          <div>
            {item.children?.map((child) => renderItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  if (!sidebarOpen) return null;

  return (
    <aside
      className={`
        w-60 h-screen border-r flex-shrink-0 overflow-y-auto
        ${darkMode ? 'bg-notion-bg-dark border-notion-border-dark' : 'bg-notion-bg border-notion-border'}
      `}
    >
      <div className="p-3">
        <div className={`text-sm font-semibold mb-4 px-2 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
          Form 3 Mathematics
        </div>
        {sidebarItems.map((item) => renderItem(item))}
      </div>
    </aside>
  );
}
