import { useEffect } from 'react';
import { useStore } from './store/useStore';
import Sidebar from './components/Layout/Sidebar';
import Topbar from './components/Layout/Topbar';
import Home from './pages/Home';
import SavingsInvestments from './pages/SavingsInvestments';
import CreditDebt from './pages/CreditDebt';
import ExamQuiz from './pages/ExamQuiz';

function App() {
  const { currentPageId, darkMode } = useStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderPage = () => {
    switch (currentPageId) {
      case 'home':
        return <Home />;
      case 'savings-investments':
        return <SavingsInvestments />;
      case 'credit-debt':
        return <CreditDebt />;
      case 'exam-quiz':
        return <ExamQuiz />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'dark bg-notion-bg-dark' : 'bg-notion-bg'}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
