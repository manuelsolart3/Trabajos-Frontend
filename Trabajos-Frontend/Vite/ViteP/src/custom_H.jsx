import { useState } from 'react';

export const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 5);
  };

  const decrement = () => {
    setCount(count - 10);
  };

  return { count, increment, decrement };
};
export const CounterComponent = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button  onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement - </button>
    </div>
  );
};









