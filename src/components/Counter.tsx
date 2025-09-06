import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
  title?: string;
}

export default function Counter({ initialValue = 0, title = "Counter" }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <span className="text-2xl font-bold text-gray-900 min-w-[3rem] text-center">
          {count}
        </span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}
