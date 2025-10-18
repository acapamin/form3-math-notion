import React, { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import type { ExamQuestion as ExamQuestionType } from '../../types';

interface ExamQuestionProps {
  question: ExamQuestionType;
  onAnswer: (questionId: number, selectedOption: number, isCorrect: boolean) => void;
  initialAnswer?: number;
}

const ExamQuestion: React.FC<ExamQuestionProps> = ({ question, onAnswer, initialAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(initialAnswer ?? null);
  const [showHint, setShowHint] = useState(false);
  const [submitted, setSubmitted] = useState(initialAnswer !== undefined);
  const [showExplanation, setShowExplanation] = useState(false);

  // Function to render text with LaTeX
  const renderMathText = (text: string) => {
    const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g);
    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const math = part.slice(2, -2);
        return <BlockMath key={index} math={math} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1);
        return <InlineMath key={index} math={math} />;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handleOptionSelect = (index: number) => {
    if (!submitted) {
      setSelectedOption(index);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;

    const correctOptionIndex = question.options.findIndex(
      opt => opt.text === question.correctAnswer
    );
    const isCorrect = selectedOption === correctOptionIndex;

    setSubmitted(true);
    setShowExplanation(true);
    onAnswer(question.id, selectedOption, isCorrect);
  };

  const correctOptionIndex = question.options.findIndex(
    opt => opt.text === question.correctAnswer
  );

  const getDifficultyColor = () => {
    switch (question.difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    }
  };

  return (
    <div className="bg-white dark:bg-notion-bg-dark rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Question Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-notion-text dark:text-notion-text-dark">
            Q{question.id}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor()}`}>
            {question.difficulty.toUpperCase()}
          </span>
        </div>
        <button
          onClick={() => setShowHint(!showHint)}
          className="px-3 py-1 text-sm bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-md transition-colors"
        >
          {showHint ? '🙈 Hide Hint' : '💡 Show Hint'}
        </button>
      </div>

      {/* Question Text */}
      <div className="mb-4 text-lg text-notion-text dark:text-notion-text-dark leading-relaxed">
        {renderMathText(question.question)}
      </div>

      {/* Hint Section */}
      {showHint && (
        <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded-r">
          <div className="flex items-start gap-2">
            <span className="text-blue-500 dark:text-blue-400 font-semibold">💡 Hint:</span>
            <div className="text-notion-text dark:text-notion-text-dark flex-1">
              {renderMathText(question.hint)}
            </div>
          </div>
        </div>
      )}

      {/* Options */}
      <div className="space-y-3 mb-4">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = index === correctOptionIndex;

          let optionStyle = 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700';

          if (submitted) {
            if (isCorrect) {
              optionStyle = 'bg-green-50 dark:bg-green-900/30 border-green-500 dark:border-green-500';
            } else if (isSelected && !isCorrect) {
              optionStyle = 'bg-red-50 dark:bg-red-900/30 border-red-500 dark:border-red-500';
            }
          } else if (isSelected) {
            optionStyle = 'bg-blue-50 dark:bg-blue-900/30 border-blue-500 dark:border-blue-500';
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              disabled={submitted}
              className={`w-full text-left p-4 border-2 rounded-lg transition-all ${optionStyle} ${
                submitted ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="font-semibold text-notion-text dark:text-notion-text-dark min-w-[24px]">
                  {String.fromCharCode(65 + index)}.
                </span>
                <div className="flex-1 text-notion-text dark:text-notion-text-dark">
                  {renderMathText(option.text)}
                </div>
                {submitted && isCorrect && (
                  <span className="text-green-600 dark:text-green-400">✓</span>
                )}
                {submitted && isSelected && !isCorrect && (
                  <span className="text-red-600 dark:text-red-400">✗</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Submit Button */}
      {!submitted && selectedOption !== null && (
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          Submit Answer
        </button>
      )}

      {/* Explanation Section */}
      {submitted && (
        <div className="mt-4">
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="w-full flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="font-semibold text-notion-text dark:text-notion-text-dark">
              📖 View Detailed Explanation
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              {showExplanation ? '▲' : '▼'}
            </span>
          </button>

          {showExplanation && (
            <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="mb-4">
                <div className="font-semibold text-green-700 dark:text-green-400 mb-2">
                  ✓ Correct Answer: {question.correctAnswer}
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-semibold text-notion-text dark:text-notion-text-dark mb-2">
                  Explanation for each option:
                </div>
                {question.options.map((option, index) => {
                  const isCorrect = index === correctOptionIndex;
                  return (
                    <div
                      key={index}
                      className={`p-3 rounded border-l-4 ${
                        isCorrect
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                          : 'bg-gray-50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      <div className="font-semibold text-notion-text dark:text-notion-text-dark mb-1">
                        {String.fromCharCode(65 + index)}. {renderMathText(option.text)}
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 ml-4">
                        {option.rationale}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExamQuestion;
