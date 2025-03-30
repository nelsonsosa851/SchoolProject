import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
