import Heading from '../components/Blocks/Heading';
import Paragraph from '../components/Blocks/Paragraph';
import Callout from '../components/Blocks/Callout';
import Toggle from '../components/Blocks/Toggle';
import SimpleInterestCalculator from '../components/Interactive/SimpleInterestCalculator';
import CompoundInterestCalculator from '../components/Interactive/CompoundInterestCalculator';
import QuizBlock from '../components/Interactive/QuizBlock';
import type { QuizQuestion } from '../types/index';

const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Sarah deposits RM 5,000 in a savings account with a simple interest rate of 3% per year. How much interest will she earn after 2 years?',
    options: ['RM 150', 'RM 300', 'RM 450', 'RM 600'],
    correctAnswer: 1,
    explanation: 'Using the formula I = P × R × T / 100: I = 5000 × 3 × 2 / 100 = RM 300'
  },
  {
    id: 'q2',
    question: 'Which type of interest typically yields higher returns over the long term?',
    options: ['Simple Interest', 'Compound Interest', 'Both are the same', 'Neither'],
    correctAnswer: 1,
    explanation: 'Compound interest yields higher returns because interest is calculated on both the principal and previously earned interest, leading to exponential growth over time.'
  },
  {
    id: 'q3',
    question: 'Ahmad invests RM 10,000 at 4% compound interest, compounded annually. What will be the total amount after 3 years?',
    options: ['RM 11,200', 'RM 11,248.64', 'RM 11,500', 'RM 12,000'],
    correctAnswer: 1,
    explanation: 'Using A = P(1 + r/n)^(nt): A = 10000(1 + 0.04/1)^(1×3) = 10000(1.04)³ ≈ RM 11,248.64'
  }
];

export default function SavingsInvestments() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-2 text-sm text-notion-text-gray">Chapter 3: Consumer Mathematics</div>
      <Heading level={1}>3.1 Savings & Investments</Heading>

      <Paragraph>
        Understanding how savings and investments work is crucial for making smart financial decisions.
        In this section, we'll explore different methods of calculating interest and learn how your money
        can grow over time.
      </Paragraph>

      <Callout type="info">
        <strong>Learning Objectives:</strong>
        <ul className="list-disc ml-5 mt-2">
          <li>Understand the difference between simple and compound interest</li>
          <li>Calculate interest using appropriate formulas</li>
          <li>Make informed decisions about savings and investment options</li>
          <li>Apply mathematical concepts to real-world financial scenarios</li>
        </ul>
      </Callout>

      <Heading level={2}>Simple Interest</Heading>

      <Paragraph>
        Simple interest is calculated only on the principal amount (the initial sum of money).
        It remains constant throughout the investment period.
      </Paragraph>

      <Callout type="tip">
        <strong>Simple Interest Formula:</strong>
        <div className="mt-2 font-mono">I = (P × R × T) / 100</div>
        <ul className="list-none mt-2">
          <li>I = Interest earned</li>
          <li>P = Principal amount</li>
          <li>R = Interest rate per year (%)</li>
          <li>T = Time period (years)</li>
        </ul>
      </Callout>

      <Toggle title="Example: Simple Interest Calculation">
        <Paragraph>
          <strong>Problem:</strong> Fatimah deposits RM 8,000 in a bank account that pays 2.5% simple interest
          per year. How much interest will she earn after 4 years?
        </Paragraph>
        <Paragraph>
          <strong>Solution:</strong><br />
          Given: P = RM 8,000, R = 2.5%, T = 4 years<br />
          I = (P × R × T) / 100<br />
          I = (8000 × 2.5 × 4) / 100<br />
          I = 80,000 / 100<br />
          I = RM 800
        </Paragraph>
        <Paragraph>
          <strong>Answer:</strong> Fatimah will earn RM 800 in interest after 4 years.
        </Paragraph>
      </Toggle>

      <SimpleInterestCalculator />

      <Heading level={2}>Compound Interest</Heading>

      <Paragraph>
        Compound interest is calculated on the principal amount AND the accumulated interest from previous
        periods. This means your money grows faster over time because you earn "interest on interest."
      </Paragraph>

      <Callout type="tip">
        <strong>Compound Interest Formula:</strong>
        <div className="mt-2 font-mono">A = P(1 + r/n)^(nt)</div>
        <ul className="list-none mt-2">
          <li>A = Final amount</li>
          <li>P = Principal amount</li>
          <li>r = Annual interest rate (as decimal)</li>
          <li>n = Number of times interest is compounded per year</li>
          <li>t = Time period (years)</li>
        </ul>
      </Callout>

      <Toggle title="Example: Compound Interest Calculation">
        <Paragraph>
          <strong>Problem:</strong> Kumar invests RM 15,000 in a fixed deposit account with 3.5% annual
          interest, compounded quarterly. What will be the total amount after 5 years?
        </Paragraph>
        <Paragraph>
          <strong>Solution:</strong><br />
          Given: P = RM 15,000, r = 3.5% = 0.035, n = 4 (quarterly), t = 5 years<br />
          A = P(1 + r/n)^(nt)<br />
          A = 15000(1 + 0.035/4)^(4×5)<br />
          A = 15000(1.00875)^20<br />
          A = 15000 × 1.1887<br />
          A ≈ RM 17,830.50
        </Paragraph>
        <Paragraph>
          <strong>Answer:</strong> The total amount after 5 years will be approximately RM 17,830.50.
          Interest earned = RM 17,830.50 - RM 15,000 = RM 2,830.50
        </Paragraph>
      </Toggle>

      <CompoundInterestCalculator />

      <Heading level={2}>Comparing Simple vs Compound Interest</Heading>

      <Callout type="info">
        <strong>Key Differences:</strong>
        <ul className="list-disc ml-5 mt-2">
          <li><strong>Simple Interest:</strong> Linear growth, same amount of interest each period</li>
          <li><strong>Compound Interest:</strong> Exponential growth, increasing interest each period</li>
          <li>Over long periods, compound interest yields significantly higher returns</li>
          <li>The frequency of compounding (monthly, quarterly, annually) affects the total return</li>
        </ul>
      </Callout>

      <Heading level={2}>Types of Investments</Heading>

      <Toggle title="1. Savings Accounts">
        <Paragraph>
          Low-risk option offered by banks. Money is accessible anytime, but interest rates are typically
          lower. Good for emergency funds and short-term savings.
        </Paragraph>
      </Toggle>

      <Toggle title="2. Fixed Deposit Accounts">
        <Paragraph>
          Money is locked for a fixed period (e.g., 6 months, 1 year, 3 years). Higher interest rates than
          regular savings accounts. Early withdrawal may result in penalties.
        </Paragraph>
      </Toggle>

      <Toggle title="3. Unit Trusts">
        <Paragraph>
          Investment funds managed by professionals who pool money from many investors to invest in stocks,
          bonds, or other assets. Higher potential returns but also higher risk.
        </Paragraph>
      </Toggle>

      <Toggle title="4. Shares (Stocks)">
        <Paragraph>
          Ownership in a company. Value can increase or decrease based on company performance and market
          conditions. Potential for high returns but also higher risk.
        </Paragraph>
      </Toggle>

      <Heading level={2}>Practice Questions</Heading>

      {quizQuestions.map((question) => (
        <QuizBlock key={question.id} question={question} />
      ))}

      <Callout type="warning">
        <strong>Remember:</strong> All investments carry some level of risk. Higher potential returns
        usually come with higher risk. It's important to understand your financial goals and risk
        tolerance before investing.
      </Callout>
    </div>
  );
}
