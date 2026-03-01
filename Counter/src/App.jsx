import React, { useState } from "react";
import FetchAPI from "./FetchAPI";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-80 text-center">
        <h1 className="text-5xl font-bold text-indigo-600 mb-6">
          {count}
        </h1>

        <div className="flex justify-between gap-3">
          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
          >
            +
          </button>

          <button
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
            className="flex-1 bg-red-500 hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-lg transition"
          >
            -
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className="mt-4 w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 rounded-lg transition"
        >
          Reset
        </button>
      </div>
      <FetchAPI/>
    </div>
    
  );
};

export default App;
