import { createSignal } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="p-8 w-screen flex items-center justify-center">
      <button onClick={() => setCount((count) => count + 1)}>Count is {count()}</button>
    </div>
  );
}

export default App;
