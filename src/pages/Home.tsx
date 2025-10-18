import { Book, Calculator, CreditCard, Target } from 'lucide-react';
import Heading from '../components/Blocks/Heading';
import Paragraph from '../components/Blocks/Paragraph';
import Callout from '../components/Blocks/Callout';
import { useStore } from '../store/useStore';

export default function Home() {
  const { setCurrentPage, darkMode } = useStore();

  const chapters = [
    {
      id: 'savings-investments',
      title: '3.1 Savings & Investments',
      icon: Calculator,
      description: 'Learn about simple and compound interest, and how to grow your money through smart savings and investment choices.',
      topics: ['Simple Interest', 'Compound Interest', 'Types of Investments', 'Interactive Calculators']
    },
    {
      id: 'credit-debt',
      title: '3.2 Credit & Debt Management',
      icon: CreditCard,
      description: 'Understand credit, manage debt responsibly, and learn strategies to avoid financial pitfalls.',
      topics: ['Credit Cards', 'Debt Management', 'Credit Score', 'Budgeting Strategies']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <Heading level={1}>Chapter 3: Consumer Mathematics</Heading>

      <Paragraph>
        Welcome to your interactive learning journey! This chapter will teach you essential financial
        mathematics skills that you'll use throughout your life.
      </Paragraph>

      <Callout type="info">
        <div className="flex items-start gap-3">
          <Target className="w-6 h-6 flex-shrink-0" />
          <div>
            <strong>What You'll Learn:</strong>
            <ul className="list-disc ml-5 mt-2">
              <li>Calculate interest on savings and investments</li>
              <li>Understand how credit and debt work</li>
              <li>Make informed financial decisions</li>
              <li>Apply mathematical concepts to real-world scenarios</li>
            </ul>
          </div>
        </div>
      </Callout>

      <div className="mt-8 mb-4">
        <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
          📚 Chapter Contents
        </h2>
      </div>

      <div className="space-y-4">
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          return (
            <div
              key={chapter.id}
              onClick={() => setCurrentPage(chapter.id)}
              className={`
                p-6 rounded-lg border cursor-pointer transition-all
                ${darkMode
                  ? 'bg-notion-bg-dark border-notion-border-dark hover:border-notion-accent'
                  : 'bg-white border-notion-border hover:border-notion-accent'
                }
                hover:shadow-lg
              `}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-notion-accent bg-opacity-10">
                  <Icon className="w-6 h-6 text-notion-accent" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
                    {chapter.title}
                  </h3>
                  <p className={`mb-3 ${darkMode ? 'text-notion-text-dark opacity-80' : 'text-notion-text-gray'}`}>
                    {chapter.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {chapter.topics.map((topic) => (
                      <span
                        key={topic}
                        className={`
                          px-3 py-1 rounded-full text-xs
                          ${darkMode
                            ? 'bg-notion-hover-dark text-notion-text-dark'
                            : 'bg-notion-hover text-notion-text'
                          }
                        `}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <Callout type="tip">
          <div className="flex items-start gap-3">
            <Book className="w-6 h-6 flex-shrink-0" />
            <div>
              <strong>How to Use This App:</strong>
              <ul className="list-disc ml-5 mt-2">
                <li>Use the sidebar to navigate between topics</li>
                <li>Try the interactive calculators to see concepts in action</li>
                <li>Expand toggle sections to see detailed examples</li>
                <li>Test your understanding with practice questions</li>
                <li>Switch to dark mode using the button in the top right</li>
              </ul>
            </div>
          </div>
        </Callout>
      </div>

      <div className={`mt-8 p-6 rounded-lg ${darkMode ? 'bg-notion-hover-dark' : 'bg-notion-hover'}`}>
        <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
          💡 Why This Matters
        </h3>
        <Paragraph>
          Financial literacy is a crucial life skill. Understanding how money works, how to save effectively,
          and how to manage debt will help you make better decisions now and in the future. These concepts
          apply whether you're saving for a new phone, planning for university, or managing your first job's salary.
        </Paragraph>
      </div>
    </div>
  );
}
