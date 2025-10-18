import React, { useState } from 'react';
import ExamQuestion from '../components/Interactive/ExamQuestion';
import { examQuestions } from '../data/examQuestions';
import type { ExamAnswer } from '../types';

const ExamQuiz: React.FC = () => {
  const [answers, setAnswers] = useState<ExamAnswer[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');

  const handleAnswer = (questionId: number, selectedOption: number, isCorrect: boolean) => {
    setAnswers(prev => {
      const existing = prev.find(a => a.questionId === questionId);
      if (existing) {
        return prev.map(a =>
          a.questionId === questionId
            ? { questionId, selectedOption, isCorrect }
            : a
        );
      }
      return [...prev, { questionId, selectedOption, isCorrect }];
    });
  };

  const filteredQuestions = examQuestions.filter(q => {
    if (selectedDifficulty === 'all') return true;
    return q.difficulty === selectedDifficulty;
  });

  const calculateScore = () => {
    const totalAnswered = answers.length;
    const correctAnswers = answers.filter(a => a.isCorrect).length;
    return { totalAnswered, correctAnswers };
  };

  const { totalAnswered, correctAnswers } = calculateScore();
  const scorePercentage = totalAnswered > 0 ? (correctAnswers / totalAnswered) * 100 : 0;

  const getDifficultyStats = (difficulty: 'easy' | 'medium' | 'hard') => {
    const difficultyQuestions = examQuestions.filter(q => q.difficulty === difficulty);
    const difficultyAnswers = answers.filter(a =>
      difficultyQuestions.some(q => q.id === a.questionId)
    );
    const correct = difficultyAnswers.filter(a => a.isCorrect).length;
    return { total: difficultyQuestions.length, answered: difficultyAnswers.length, correct };
  };

  const resetQuiz = () => {
    if (window.confirm('Are you sure you want to reset all your answers?')) {
      setAnswers([]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-notion-text dark:text-notion-text-dark mb-2">
          📝 Consumer Mathematics Exam
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Test your knowledge with 30 comprehensive questions covering Chapter 3: Consumer Mathematics (KSSM Form 3)
        </p>
      </div>

      {/* Score Dashboard */}
      <div className="bg-white dark:bg-notion-bg-dark rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-notion-text dark:text-notion-text-dark">
            📊 Your Progress
          </h2>
          <button
            onClick={resetQuiz}
            className="px-4 py-2 bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800 text-red-700 dark:text-red-200 rounded-lg transition-colors text-sm font-semibold"
          >
            🔄 Reset Quiz
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-700 dark:text-blue-300 font-semibold mb-1">Questions Answered</div>
            <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">
              {totalAnswered} / 30
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <div className="text-sm text-green-700 dark:text-green-300 font-semibold mb-1">Correct Answers</div>
            <div className="text-3xl font-bold text-green-900 dark:text-green-100">
              {correctAnswers}
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <div className="text-sm text-purple-700 dark:text-purple-300 font-semibold mb-1">Score</div>
            <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">
              {scorePercentage.toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(totalAnswered / 30) * 100}%` }}
          />
        </div>

        {/* Difficulty Breakdown */}
        <div className="grid grid-cols-3 gap-3 text-sm">
          {(['easy', 'medium', 'hard'] as const).map(difficulty => {
            const stats = getDifficultyStats(difficulty);
            return (
              <div key={difficulty} className="text-center">
                <div className="font-semibold text-notion-text dark:text-notion-text-dark capitalize mb-1">
                  {difficulty}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stats.correct}/{stats.answered} of {stats.total}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="bg-white dark:bg-notion-bg-dark rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-notion-text dark:text-notion-text-dark">Filter by Difficulty:</span>
          <div className="flex gap-2">
            {['all', 'easy', 'medium', 'hard'].map(level => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level as any)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedDifficulty === level
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
                {level !== 'all' && ` (${examQuestions.filter(q => q.difficulty === level).length})`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded-r p-4 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">ℹ️</span>
          <div>
            <h3 className="font-semibold text-notion-text dark:text-notion-text-dark mb-2">Instructions</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Read each question carefully and use the hints when needed</li>
              <li>• Select one answer option and click "Submit Answer"</li>
              <li>• View detailed explanations for all options after submitting</li>
              <li>• Your progress is tracked automatically as you answer questions</li>
              <li>• You can filter questions by difficulty level using the buttons above</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {filteredQuestions.map(question => {
          const existingAnswer = answers.find(a => a.questionId === question.id);
          return (
            <ExamQuestion
              key={question.id}
              question={question}
              onAnswer={handleAnswer}
              initialAnswer={existingAnswer?.selectedOption}
            />
          );
        })}
      </div>

      {/* Final Results Summary */}
      {totalAnswered === 30 && (
        <div className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-8 text-white shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🎉 Quiz Completed!</h2>
            <div className="text-5xl font-bold mb-4">{scorePercentage.toFixed(1)}%</div>
            <p className="text-xl mb-6">
              You answered {correctAnswers} out of 30 questions correctly
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              {(['easy', 'medium', 'hard'] as const).map(difficulty => {
                const stats = getDifficultyStats(difficulty);
                const percentage = stats.answered > 0 ? (stats.correct / stats.answered) * 100 : 0;
                return (
                  <div key={difficulty} className="bg-white/20 rounded-lg p-4">
                    <div className="font-semibold capitalize mb-1">{difficulty}</div>
                    <div className="text-2xl font-bold">{percentage.toFixed(0)}%</div>
                    <div className="text-sm opacity-90">{stats.correct}/{stats.answered}</div>
                  </div>
                );
              })}
            </div>
            <div className="text-lg">
              {scorePercentage >= 90 && '🌟 Excellent! You have mastered Consumer Mathematics!'}
              {scorePercentage >= 70 && scorePercentage < 90 && '👏 Good job! Keep practicing to improve further.'}
              {scorePercentage >= 50 && scorePercentage < 70 && '📚 Fair! Review the topics and try again.'}
              {scorePercentage < 50 && '💪 Keep learning! Review the material and practice more.'}
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {filteredQuestions.length > 5 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
          title="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ExamQuiz;
