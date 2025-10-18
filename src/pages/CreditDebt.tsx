import Heading from '../components/Blocks/Heading';
import Paragraph from '../components/Blocks/Paragraph';
import Callout from '../components/Blocks/Callout';
import Toggle from '../components/Blocks/Toggle';
import CreditCardCalculator from '../components/Interactive/CreditCardCalculator';
import QuizBlock from '../components/Interactive/QuizBlock';
import type { QuizQuestion } from '../types/index';

const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is APR in credit card terms?',
    options: [
      'Annual Payment Rate',
      'Annual Percentage Rate',
      'Annual Principal Rate',
      'Average Payment Requirement'
    ],
    correctAnswer: 1,
    explanation: 'APR stands for Annual Percentage Rate. It represents the yearly interest rate charged on borrowed money, expressed as a percentage.'
  },
  {
    id: 'q2',
    question: 'Amir has a credit card balance of RM 3,000 with 15% APR. If he only pays the minimum (3% of balance), what is his first payment?',
    options: ['RM 30', 'RM 45', 'RM 90', 'RM 150'],
    correctAnswer: 2,
    explanation: 'Minimum payment = 3% of RM 3,000 = 0.03 × 3,000 = RM 90'
  },
  {
    id: 'q3',
    question: 'Which strategy is BEST for managing credit card debt?',
    options: [
      'Pay only the minimum amount each month',
      'Use one credit card to pay another',
      'Pay more than the minimum and avoid new charges',
      'Ignore the debt until it goes away'
    ],
    correctAnswer: 2,
    explanation: 'Paying more than the minimum reduces the principal faster, decreasing total interest paid. Avoiding new charges prevents the debt from growing.'
  },
  {
    id: 'q4',
    question: 'What happens if you make a late payment on your credit card?',
    options: [
      'Nothing, as long as you pay eventually',
      'Late fees and possible increase in interest rate',
      'The bank gives you a warning first',
      'Your balance is automatically reduced'
    ],
    correctAnswer: 1,
    explanation: 'Late payments typically result in late fees (usually RM 50-100 in Malaysia) and may lead to an increased interest rate. They also negatively affect your credit score.'
  }
];

export default function CreditDebt() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="mb-2 text-sm text-notion-text-gray">Chapter 3: Consumer Mathematics</div>
      <Heading level={1}>3.2 Credit & Debt Management</Heading>

      <Paragraph>
        Understanding credit and debt is essential for maintaining healthy financial habits. This section
        will help you understand how credit works, the costs of borrowing, and strategies for managing debt.
      </Paragraph>

      <Callout type="warning">
        <strong>Important:</strong> Credit can be a useful financial tool when managed responsibly,
        but poor credit management can lead to serious financial problems. Always borrow within your means!
      </Callout>

      <Heading level={2}>Understanding Credit</Heading>

      <Paragraph>
        Credit is money borrowed from a lender (like a bank) that must be paid back with interest.
        Common forms of credit include credit cards, personal loans, and mortgages.
      </Paragraph>

      <Toggle title="Key Credit Terms">
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>Principal:</strong> The original amount borrowed</li>
          <li><strong>Interest Rate (APR):</strong> The cost of borrowing money, expressed as a yearly percentage</li>
          <li><strong>Credit Limit:</strong> The maximum amount you can borrow</li>
          <li><strong>Minimum Payment:</strong> The smallest amount you must pay each month</li>
          <li><strong>Balance:</strong> The total amount you currently owe</li>
          <li><strong>Grace Period:</strong> Time to pay without incurring interest (typically 20-25 days)</li>
        </ul>
      </Toggle>

      <Heading level={2}>Credit Cards</Heading>

      <Paragraph>
        Credit cards allow you to borrow money up to a certain limit. While convenient, they often have
        high interest rates (typically 15-18% APR in Malaysia).
      </Paragraph>

      <Callout type="info">
        <strong>How Credit Card Interest Works:</strong>
        <div className="mt-2">
          If you don't pay your full balance by the due date, interest is charged on the remaining amount.
          This interest is calculated daily and compounds, meaning you pay interest on interest.
        </div>
      </Callout>

      <Toggle title="Example: Credit Card Interest Calculation">
        <Paragraph>
          <strong>Problem:</strong> Siti has a credit card balance of RM 2,000 with an APR of 18%.
          If she pays RM 100 per month, how long will it take to pay off the debt, and how much
          interest will she pay?
        </Paragraph>
        <Paragraph>
          <strong>Solution:</strong><br />
          Monthly interest rate = 18% / 12 = 1.5% = 0.015<br /><br />

          Month 1:<br />
          - Interest charge = RM 2,000 × 0.015 = RM 30<br />
          - New balance = RM 2,000 + RM 30 - RM 100 = RM 1,930<br /><br />

          Month 2:<br />
          - Interest charge = RM 1,930 × 0.015 = RM 28.95<br />
          - New balance = RM 1,930 + RM 28.95 - RM 100 = RM 1,858.95<br /><br />

          This pattern continues until the balance reaches zero.
          Using the calculator below, you can see the full payoff schedule.
        </Paragraph>
      </Toggle>

      <CreditCardCalculator />

      <Heading level={2}>The Danger of Minimum Payments</Heading>

      <Callout type="warning">
        <strong>Warning:</strong> Paying only the minimum amount can keep you in debt for years!
        <div className="mt-2">
          Example: A RM 5,000 balance at 18% APR with minimum payments (3% of balance) would take
          over 20 years to pay off and cost more than RM 6,000 in interest!
        </div>
      </Callout>

      <Paragraph>
        Always try to pay more than the minimum payment. Even an extra RM 50 per month can save
        thousands in interest and years of payments.
      </Paragraph>

      <Heading level={2}>Types of Debt</Heading>

      <Toggle title="1. Good Debt vs Bad Debt">
        <Paragraph>
          <strong>Good Debt:</strong> Debt that can potentially increase your wealth or income over time.
          Examples include education loans (increases earning potential) and home mortgages (builds equity).
        </Paragraph>
        <Paragraph>
          <strong>Bad Debt:</strong> Debt used to purchase depreciating assets or unnecessary items.
          Examples include credit card debt for luxury items, payday loans, and car loans for expensive vehicles.
        </Paragraph>
      </Toggle>

      <Toggle title="2. Personal Loans">
        <Paragraph>
          Fixed loans with set repayment terms. Usually have lower interest rates than credit cards
          (typically 6-12% in Malaysia). Good for debt consolidation or major purchases.
        </Paragraph>
      </Toggle>

      <Toggle title="3. Hire Purchase">
        <Paragraph>
          Common for buying vehicles. You pay in installments and own the item after the final payment.
          Interest is calculated on the original principal for the entire loan period.
        </Paragraph>
      </Toggle>

      <Heading level={2}>Debt Management Strategies</Heading>

      <Callout type="tip">
        <strong>Smart Debt Management Tips:</strong>
        <ol className="list-decimal ml-5 mt-2 space-y-1">
          <li>Always pay more than the minimum payment</li>
          <li>Pay off high-interest debt first (debt avalanche method)</li>
          <li>Avoid taking on new debt while paying off existing debt</li>
          <li>Create and stick to a budget</li>
          <li>Build an emergency fund to avoid future debt</li>
          <li>Consider debt consolidation for multiple high-interest debts</li>
          <li>Never use one credit card to pay another</li>
        </ol>
      </Callout>

      <Toggle title="Debt Snowball vs Debt Avalanche">
        <Paragraph>
          <strong>Debt Snowball:</strong> Pay off smallest debts first for psychological wins.
          Make minimum payments on all debts, then put extra money toward the smallest balance.
          Once paid off, move to the next smallest.
        </Paragraph>
        <Paragraph>
          <strong>Debt Avalanche:</strong> Pay off highest interest rate debts first to save the most money.
          Make minimum payments on all debts, then put extra money toward the highest interest rate debt.
          Mathematically optimal but requires discipline.
        </Paragraph>
      </Toggle>

      <Heading level={2}>Credit Score</Heading>

      <Paragraph>
        Your credit score is a numerical representation of your creditworthiness (typically 300-850).
        In Malaysia, CTOS and CCRIS track your credit history.
      </Paragraph>

      <Toggle title="Factors Affecting Credit Score">
        <ul className="list-disc ml-5 space-y-2">
          <li>Payment history (35%) - Pay on time!</li>
          <li>Credit utilization (30%) - Keep balances low</li>
          <li>Length of credit history (15%)</li>
          <li>Types of credit (10%)</li>
          <li>New credit inquiries (10%)</li>
        </ul>
      </Toggle>

      <Callout type="info">
        <strong>Why Credit Score Matters:</strong>
        <ul className="list-disc ml-5 mt-2">
          <li>Affects loan approval and interest rates</li>
          <li>Impacts ability to rent property</li>
          <li>Can affect job opportunities in some fields</li>
          <li>Influences insurance premiums</li>
        </ul>
      </Callout>

      <Heading level={2}>Budgeting for Debt Repayment</Heading>

      <Paragraph>
        The 50/30/20 rule is a simple budgeting guideline:
      </Paragraph>

      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">50%</div>
          <div className="text-sm text-blue-800 dark:text-blue-200">Needs</div>
          <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">
            Housing, food, utilities, transport
          </div>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950">
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">30%</div>
          <div className="text-sm text-green-800 dark:text-green-200">Wants</div>
          <div className="text-xs text-green-700 dark:text-green-300 mt-1">
            Entertainment, dining, hobbies
          </div>
        </div>
        <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950">
          <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">20%</div>
          <div className="text-sm text-orange-800 dark:text-orange-200">Savings & Debt</div>
          <div className="text-xs text-orange-700 dark:text-orange-300 mt-1">
            Emergency fund, investments, debt repayment
          </div>
        </div>
      </div>

      <Heading level={2}>Practice Questions</Heading>

      {quizQuestions.map((question) => (
        <QuizBlock key={question.id} question={question} />
      ))}

      <Callout type="tip">
        <strong>Final Tips:</strong>
        <ul className="list-disc ml-5 mt-2">
          <li>Avoid impulse purchases - wait 24-48 hours before buying</li>
          <li>Use cash or debit cards instead of credit when possible</li>
          <li>Read all terms and conditions before signing credit agreements</li>
          <li>Seek help early if you're struggling with debt - contact AKPK (Credit Counselling and Debt Management Agency)</li>
        </ul>
      </Callout>
    </div>
  );
}
