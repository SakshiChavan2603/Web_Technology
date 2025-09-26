import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Factorial from './Factorial';
import Calculator from './Calculator';
import Calculator1 from './Calculator1';
import Myfunction, { Myfunction2 } from './MultipleFun';
import Case from './Case';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Factorial num1="4"/>
    <Calculator num1="2" num2="5"/>
    <Calculator1 num1="2" num2="5" op="addd"/>
    <Myfunction />
    <Myfunction2 />
    <Case />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
