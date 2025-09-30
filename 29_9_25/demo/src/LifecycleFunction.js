import React, { useState, useEffect } from 'react';

/**
 * Functional Component Lifecycle Demonstration
 * It displays user inputs and logs lifecycle events (Mount, Update, Unmount)
 * to the browser console using useEffect.
 */
function LifecycleDemo({ initialNum1, initialNum2 }) {
  // State to track the inputs, which triggers the 'Update' phase
  const [num1, setNum1] = useState(initialNum1 || 0);
  const [num2, setNum2] = useState(initialNum2 || 0);
  
  // A helper state to see the component re-render count
  const [renderCount, setRenderCount] = useState(0);

  // 1. MOUNTING Phase: Runs ONLY ONCE after the initial render.
  // This mimics componentDidMount.
  useEffect(() => {
    console.log('*** MOUNTING PHASE: Component has been rendered to the DOM. ***');
    
    // Set up initial render count
    setRenderCount(1);
    
    // 3. UNMOUNTING Phase: Runs when the component is removed from the DOM.
    // This is the cleanup function and mimics componentWillUnmount.
    return () => {
      console.log('--- UNMOUNTING PHASE: Component is being cleaned up and removed. ---');
    };
  }, []); // Empty dependency array: run once at mount, clean up at unmount

  // 2. UPDATING Phase: Runs on every re-render (after the initial mount).
  // This mimics componentDidUpdate.
  useEffect(() => {
    // We check renderCount > 1 to skip the initial mount log, focusing only on updates.
    if (renderCount > 1) {
      console.log(`--- UPDATING PHASE: num1 or num2 changed. Renders: ${renderCount}`);
    }
    // Increment the render count, which itself will trigger another update, 
    // but the console log condition ensures we don't spam the console.
    setRenderCount(prevCount => prevCount + 1);
    
  }, [num1, num2]); // Dependencies: runs whenever num1 or num2 state changes.


  // --- Event Handlers ---
  const handleNum1Change = (e) => {
    setNum1(parseFloat(e.target.value) || 0);
  };
  const handleNum2Change = (e) => {
    setNum2(parseFloat(e.target.value) || 0);
  };


  // The component's JSX output
  return (
    <div style={{ padding: '30px', border: '3px solid #7952b3', borderRadius: '10px', maxWidth: '450px', margin: 'auto', backgroundColor: '#f5f0ff' }}>
      <h3>⚛️ Component Lifecycle Check (Check Console)</h3>
      
      {/* Input Field 1 */}
      <div style={{ marginBottom: '10px' }}>
        <label>Number 1:</label>
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          style={{ padding: '8px', width: '60%', marginLeft: '10px' }}
        />
      </div>

      {/* Input Field 2 */}
      <div style={{ marginBottom: '20px' }}>
        <label>Number 2:</label>
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          style={{ padding: '8px', width: '60%', marginLeft: '10px' }}
        />
      </div>

      <p style={{ fontWeight: 'bold' }}>Current Sum: {num1 + num2}</p>
      <p>Render Count (State): {renderCount}</p>
      <p style={{ color: 'red' }}>* Open your browser console (F12) to see lifecycle messages.</p>
    </div>
  );
}

export default LifecycleDemo;