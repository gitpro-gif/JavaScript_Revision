import { useState } from 'react';
import './App.css'

function App() {

  const[counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1); // will update in UI
  }

  const removeValue = () => {
    if(counter <= 0) {
      return 0;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Counter value: {counter}</p>

      <button
        onClick={addValue}
      >add value</button>
      <br />
      <button
        onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
