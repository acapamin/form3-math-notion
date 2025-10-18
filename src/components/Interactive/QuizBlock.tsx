import { CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '../../store/useStore';
import type { QuizQuestion } from '../../types/index';

interface QuizBlockProps {
  question: QuizQuestion;
}

export default function QuizBlock({ question }: QuizBlockProps) {
  const { darkMode } = useStore();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div
      className={`
        p-6 rounded-lg border my-4
        ${darkMode ? 'bg-notion-bg-dark border-notion-border-dark' : 'bg-white border-notion-border'}
      `}
    >
      <div className={`text-lg font-medium mb-4 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
        {question.question}
      </div>

      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`
              w-full text-left p-3 rounded border transition-all
              ${
                selectedAnswer === null
                  ? darkMode
                    ? 'border-notion-border-dark hover:bg-notion-hover-dark'
                    : 'border-notion-border hover:bg-notion-hover'
                  : selectedAnswer === index
                  ? index === question.correctAnswer
                    ? darkMode
                      ? 'border-green-700 bg-green-950'
                      : 'border-green-500 bg-green-50'
                    : darkMode
                    ? 'border-red-700 bg-red-950'
                    : 'border-red-500 bg-red-50'
                  : index === question.correctAnswer && selectedAnswer !== null
                  ? darkMode
                    ? 'border-green-700 bg-green-950'
                    : 'border-green-500 bg-green-50'
                  : darkMode
                  ? 'border-notion-border-dark'
                  : 'border-notion-border'
              }
              ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <div className="flex items-center gap-3">
              {selectedAnswer !== null && (
                <>
                  {index === question.correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : selectedAnswer === index ? (
                    <XCircle className="w-5 h-5 text-red-600" />
                  ) : null}
                </>
              )}
              <span className={darkMode ? 'text-notion-text-dark' : 'text-notion-text'}>
                {option}
              </span>
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div
          className={`
            mt-4 p-4 rounded
            ${
              isCorrect
                ? darkMode
                  ? 'bg-green-950'
                  : 'bg-green-50'
                : darkMode
                ? 'bg-red-950'
                : 'bg-red-50'
            }
          `}
        >
          <div className={`font-semibold mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </div>
          <div className={darkMode ? 'text-notion-text-dark' : 'text-notion-text'}>
            {question.explanation}
          </div>
        </div>
      )}
    </div>
  );
}
