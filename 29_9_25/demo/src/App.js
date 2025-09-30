import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LifecycleDemo from './LifecycleFunction';
import Counter from './Counter';
import CounterUseEffect from './CounterUseEffect';
import ListCreator from './ListCreator';

function App() {
  const [isMounted, setIsMounted] = useState(true);
  return (
    <>
      {/* <button onClick={()=>setIsMounted(!isMounted)}>
    
      {isMounted ? 'Unmount Component (Trigger Clean up)' : 'Mount Component'}

      {isMounted && <LifecycleDemo initialNum1={10} initialNum2={5} />}
      </button> */}

      {/* <Counter /> */}
      {/* <CounterUseEffect /> */}
      <ListCreator />
    </>
  );
}

export default App;
