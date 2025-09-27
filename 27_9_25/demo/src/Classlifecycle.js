import { Component } from 'react';
import ReactDOM from 'react-dom/client';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    // 1. Initialize State
    this.state = {
      count: 0
    };
    console.log('1. constructor() - Component initialized and state set.');
  }

  // 2. Used to derive state from props before every render
  static getDerivedStateFromProps(props, state) {
    console.log('2. static getDerivedStateFromProps() - Checking for state/prop changes.');
    return null; // Return null to indicate no state change is needed from props
  }

  // 3. Decide if the component should re-render (for performance)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('4. shouldComponentUpdate() - Checking if update is necessary.');
    // Only update if the count has changed
    return nextState.count !== this.state.count;
  }

  // 5. Called right before changes are committed to the DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('5. getSnapshotBeforeUpdate() - Capturing DOM info before update.');
    return null; // A value returned here is passed to componentDidUpdate
  }

  // 6. Called after the component's update has been reflected in the DOM
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`6. componentDidUpdate() - Count updated to ${this.state.count}.`);
    // Example side effect: check if count hit 5, then stop further updates
    if (this.state.count === 5) {
      console.log("Count reached 5. Now unmounting in 3 seconds...");
      setTimeout(() => {
        // Remove the component from the DOM to trigger unmounting
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.unmount();
      }, 5000);
    }
  }

  // 7. Called after the component has been rendered to the DOM for the first time
  componentDidMount() {
    console.log('3. componentDidMount() - Component is now in the DOM. Ready for API calls/subscriptions.');
    // Example side effect: Start an interval or fetch data
    this.timerID = setInterval(() => this.handleClick(), 5000); // Start auto-increment
  }
  
  // 8. Called immediately before the component is unmounted and destroyed
  componentWillUnmount() {
    console.log('7. componentWillUnmount() - Cleanup complete (timer cleared).');
    clearInterval(this.timerID); // Clear the interval to prevent memory leaks
  }

  // Handler to manually update state
  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // 4. The only required method, returns the element tree
  render() {
    console.log('...render() - Rendering component output...');
    return (
      <div>
        <h1>React Class Component Lifecycle Demo</h1>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.handleClick}>
          Manually Increment Count
        </button>
        <p>
          *Check your browser's console to see the lifecycle methods in action.*
        </p>
      </div>
    );
  }
}

export default LifecycleDemo