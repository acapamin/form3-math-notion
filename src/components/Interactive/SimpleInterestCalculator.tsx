import { useState } from 'react';
import { useStore } from '../../store/useStore';

export default function SimpleInterestCalculator() {
  const { darkMode } = useStore();
  const [principal, setPrincipal] = useState<number>(1000);
  const [rate, setRate] = useState<number>(5);
  const [time, setTime] = useState<number>(3);

  const interest = (principal * rate * time) / 100;
  const totalAmount = principal + interest;

  return (
    <div
      className={`
        p-6 rounded-lg border my-4
        ${darkMode ? 'bg-notion-bg-dark border-notion-border-dark' : 'bg-white border-notion-border'}
      `}
    >
      <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
        Simple Interest Calculator
      </h3>

      <div className="space-y-4">
        <div>
          <label className={`block text-sm mb-2 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
            Principal Amount (RM)
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
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
            Interest Rate (% per year)
          </label>
          <input
            type="number"
            value={rate}
            step="0.1"
            onChange={(e) => setRate(Number(e.target.value))}
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
            Time Period (years)
          </label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className={`
              w-full px-3 py-2 rounded border
              ${darkMode
                ? 'bg-notion-bg-dark border-notion-border-dark text-notion-text-dark'
                : 'bg-white border-notion-border text-notion-text'
              }
            `}
          />
        </div>

        <div className={`p-4 rounded mt-4 ${darkMode ? 'bg-blue-950' : 'bg-blue-50'}`}>
          <div className={`text-sm mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-900'}`}>
            Formula: I = P × R × T / 100
          </div>
          <div className={`text-lg font-semibold ${darkMode ? 'text-blue-100' : 'text-blue-900'}`}>
            Interest: RM {interest.toFixed(2)}
          </div>
          <div className={`text-lg font-semibold ${darkMode ? 'text-blue-100' : 'text-blue-900'}`}>
            Total Amount: RM {totalAmount.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
