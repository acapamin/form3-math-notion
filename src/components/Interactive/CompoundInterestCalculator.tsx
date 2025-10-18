import { useState } from 'react';
import { useStore } from '../../store/useStore';

export default function CompoundInterestCalculator() {
  const { darkMode } = useStore();
  const [principal, setPrincipal] = useState<number>(1000);
  const [rate, setRate] = useState<number>(5);
  const [time, setTime] = useState<number>(3);
  const [frequency, setFrequency] = useState<number>(12); // monthly

  const totalAmount = principal * Math.pow(1 + rate / (100 * frequency), frequency * time);
  const interest = totalAmount - principal;

  return (
    <div
      className={`
        p-6 rounded-lg border my-4
        ${darkMode ? 'bg-notion-bg-dark border-notion-border-dark' : 'bg-white border-notion-border'}
      `}
    >
      <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
        Compound Interest Calculator
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
            Annual Interest Rate (%)
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

        <div>
          <label className={`block text-sm mb-2 ${darkMode ? 'text-notion-text-dark' : 'text-notion-text'}`}>
            Compounding Frequency
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            className={`
              w-full px-3 py-2 rounded border
              ${darkMode
                ? 'bg-notion-bg-dark border-notion-border-dark text-notion-text-dark'
                : 'bg-white border-notion-border text-notion-text'
              }
            `}
          >
            <option value={1}>Annually</option>
            <option value={2}>Semi-annually</option>
            <option value={4}>Quarterly</option>
            <option value={12}>Monthly</option>
            <option value={365}>Daily</option>
          </select>
        </div>

        <div className={`p-4 rounded mt-4 ${darkMode ? 'bg-green-950' : 'bg-green-50'}`}>
          <div className={`text-sm mb-2 ${darkMode ? 'text-green-200' : 'text-green-900'}`}>
            Formula: A = P(1 + r/n)^(nt)
          </div>
          <div className={`text-lg font-semibold ${darkMode ? 'text-green-100' : 'text-green-900'}`}>
            Interest Earned: RM {interest.toFixed(2)}
          </div>
          <div className={`text-lg font-semibold ${darkMode ? 'text-green-100' : 'text-green-900'}`}>
            Total Amount: RM {totalAmount.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
