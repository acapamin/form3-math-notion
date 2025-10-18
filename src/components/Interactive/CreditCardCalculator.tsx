import { useState } from 'react';
import { useStore } from '../../store/useStore';

export default function CreditCardCalculator() {
  const { darkMode } = useStore();
  const [balance, setBalance] = useState<number>(5000);
  const [apr, setApr] = useState<number>(18);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(200);

  const monthlyRate = apr / 100 / 12;
  let remainingBalance = balance;
  let totalInterest = 0;
  let months = 0;

  // Calculate payoff time
  while (remainingBalance > 0 && months < 360) {
    const interestCharge = remainingBalance * monthlyRate;
    totalInterest += interestCharge;
    remainingBalance = remainingBalance + interestCharge - monthlyPayment;
    months++;

    if (remainingBalance < 0) {
      remainingBalance = 0;
    }

    // Prevent infinite loop if payment is too small
    if (monthlyPayment <= remainingBalance * monthlyRate) {
      months = -1;
      break;
    }
  }

  return (
    <div
      className={`
        p-6 rounded-lg border my-4
        ${darkMode ? 'bg-notion-bg-dark border-notion-border-dark' : 'bg-white border-notion-border'}
      `}
    >
      <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
        Credit Card Payment Calculator
      </h3>

      <div className="space-y-4">
        <div>
          <label className={`block text-sm mb-2 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
            Current Balance (RM)
          </label>
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(Number(e.target.value))}
            className={`
              w-full px-3 py-2 rounded border
              ${darkMode
                ? 'bg-notion-bg-dark border-notion-border-dark text-notion-text-dark'
                : 'bg-white border-notion-border text-notion-text'
              }
            `}
          />
        </div>

        <div>
          <label className={`block text-sm mb-2 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
            Annual Interest Rate (APR %)
          </label>
          <input
            type="number"
            value={apr}
            step="0.1"
            onChange={(e) => setApr(Number(e.target.value))}
            className={`
              w-full px-3 py-2 rounded border
              ${darkMode
                ? 'bg-notion-bg-dark border-notion-border-dark text-notion-text-dark'
                : 'bg-white border-notion-border text-notion-text'
              }
            `}
          />
        </div>

        <div>
          <label className={`block text-sm mb-2 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
            Monthly Payment (RM)
          </label>
          <input
            type="number"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(Number(e.target.value))}
            className={`
              w-full px-3 py-2 rounded border
              ${darkMode
                ? 'bg-notion-bg-dark border-notion-border-dark text-notion-text-dark'
                : 'bg-white border-notion-border text-notion-text'
              }
            `}
          />
        </div>

        <div className={`p-4 rounded mt-4 ${darkMode ? 'bg-orange-950' : 'bg-orange-50'}`}>
          {months === -1 ? (
            <div className={`text-lg font-semibold ${darkMode ? 'text-orange-200' : 'text-orange-900'}`}>
              ⚠️ Warning: Monthly payment is too low to pay off the debt!
              <div className="text-sm mt-2">
                Minimum payment needed: RM {(balance * monthlyRate + 10).toFixed(2)}
              </div>
            </div>
          ) : (
            <>
              <div className={`text-lg font-semibold ${darkMode ? 'text-orange-100' : 'text-orange-900'}`}>
                Time to Pay Off: {Math.floor(months / 12)} years {months % 12} months
              </div>
              <div className={`text-lg font-semibold ${darkMode ? 'text-orange-100' : 'text-orange-900'}`}>
                Total Interest Paid: RM {totalInterest.toFixed(2)}
              </div>
              <div className={`text-lg font-semibold ${darkMode ? 'text-orange-100' : 'text-orange-900'}`}>
                Total Amount Paid: RM {(balance + totalInterest).toFixed(2)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
