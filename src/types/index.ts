export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ExamQuestionOption {
  text: string;
  rationale: string;
}

export interface ExamQuestion {
  id: number;
  question: string;
  hint: string;
  correctAnswer: string;
  options: ExamQuestionOption[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ExamAnswer {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
}

export type BlockType =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'paragraph'
  | 'callout'
  | 'toggle'
  | 'calculator'
  | 'quiz'
  | 'table'
  | 'divider'
  | 'equation';

export interface Block {
  id: string;
  type: BlockType;
  content: string;
  metadata?: Record<string, any>;
  children?: Block[];
}

export interface CalculatorProps {
  type: 'simple-interest' | 'compound-interest' | 'credit-card' | 'debt-management';
}
