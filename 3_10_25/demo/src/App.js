import logo from './logo.svg';
import './App.css';
import WithoutCallback from './DemoWithoutCallback';
import WithCallback from './DemoWithCallback';
import ErrorBoundary from './ErrorBoundry';
import Counter from './Counter';
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    <>
    {/* <WithoutCallback></WithoutCallback>
    <WithCallback></WithCallback> */}
    {/* <ErrorBoundary>
      <Counter></Counter>
    </ErrorBoundary> */}

    <PasswordGenerator></PasswordGenerator>
    </>
    
  );
}

export default App;
