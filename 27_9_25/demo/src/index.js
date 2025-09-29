import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Factorial from './Factorial';
import Calculator1 from './Calculator1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Factorial />
    {/* <Calculator1 num1="2" num2="5" op="addd"/> */}
  </React.StrictMode>
);
reportWebVitals();
