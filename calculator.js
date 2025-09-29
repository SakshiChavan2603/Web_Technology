function Calculator({ num1, num2 }) {
    const [number1, setNumber1] = React.useState(num1 || '');
    const [number2, setNumber2] = React.useState(num2 || '');
    const [result, setResult] = React.useState(null);
    const [operation, setOperation] = React.useState('');
    const [error, setError] = React.useState('');

    const performOperation = (op) => {
        const n1 = parseFloat(number1);
        const n2 = parseFloat(number2);

        if (isNaN(n1) || isNaN(n2)) {
            setError('Please enter valid numbers');
            setResult(null);
            setOperation('');
            return;
        }

        setError('');
        setOperation(op);

        switch (op) {
            case 'addition':
                setResult(n1 + n2);
                break;
            case 'subtraction':
                setResult(n1 - n2);
                break;
            case 'multiplication':
                setResult(n1 * n2);
                break;
            case 'division':
                if (n2 === 0) {
                    setError('Cannot divide by zero');
                    setResult(null);
                } else {
                    setResult(n1 / n2);
                }
                break;
            default:
                setResult(null);
        }
    };

    const handleNumber1Change = (e) => {
        setNumber1(e.target.value);
        setResult(null);
        setOperation('');
        setError('');
    };

    const handleNumber2Change = (e) => {
        setNumber2(e.target.value);
        setResult(null);
        setOperation('');
        setError('');
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-2xl font-bold text-center mb-4">Basic Calculator</h1>
            <div className="mb-4">
                <label htmlFor="number1Input" className="block text-sm font-medium text-gray-700">
                    First Number:
                </label>
                <input
                    id="number1Input"
                    type="number"
                    value={number1}
                    onChange={handleNumber1Change}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter first number"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="number2Input" className="block text-sm font-medium text-gray-700">
                    Second Number:
                </label>
                <input
                    id="number2Input"
                    type="number"
                    value={number2}
                    onChange={handleNumber2Change}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter second number"
                />
            </div>
            <div className="flex justify-between mb-4">
                <button
                    onClick={() => performOperation('addition')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Add
                </button>
                <button
                    onClick={() => performOperation('subtraction')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Subtract
                </button>
                <button
                    onClick={() => performOperation('multiplication')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Multiply
                </button>
                <button
                    onClick={() => performOperation('division')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Divide
                </button>
            </div>
            {error && (
                <p className="text-red-500 text-center">{error}</p>
            )}
            {result !== null && !error && (
                <p className="text-green-600 text-center">
                    {operation.charAt(0).toUpperCase() + operation.slice(1)} of {number1} and {number2} is: {result}
                </p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <Calculator />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);