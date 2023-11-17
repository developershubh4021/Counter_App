import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Count, setCount] = useState(0);
  // let Count = 0;
  // Negative value is not allowed

  if (Count < 0) {
    setCount(0);
  }
  // To Increase Count Value
  const Increase_value = () => {
    setCount(Count + 1);
  };
  // To Decrease Count Value

  const Decrease_value = () => {
    setCount(Count - 1);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Counter App</h1>
      <h3 className='text-2xl m-4'>Count : [{Count}]</h3>
      <div className=' flex auto-rows-max justify-between	 gap-10	'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 	' onClick={Increase_value}>Increase Value</button>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 	' onClick={Decrease_value}>Decrease Value</button>
      </div>
    </div>
  );
}

export default App;