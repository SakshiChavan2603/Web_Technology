import { useState } from 'react';

const TextTransformerFunction = () => {
  // Use useState hook to manage component state
  const [inputText, setInputText] = useState('');
  const [transformType, setTransformType] = useState('none');

  // Logic to apply the selected text transformation
  const getTransformedText = () => {
    switch (transformType) {
      case 'uppercase':
        return inputText.toUpperCase();
      case 'lowercase':
        return inputText.toLowerCase();
      case 'titlecase':
        // Title Case logic: capitalize the first letter of each word
        return inputText
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      default:
        return inputText;
    }
  };

  const transformedText = getTransformedText();

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Functional Component Text Transformer (with Hooks)</h2>

      {/* Input Text Field */}
      <label htmlFor="text-input-func">Enter Text:</label>
      <input
        id="text-input-func"
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)} // Direct state update
        placeholder="Type something here..."
        style={{ width: '100%', padding: '8px', margin: '10px 0' }}
      />

      {/* Radio Buttons for Transformation */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '15px' }}>
          <input
            type="radio"
            value="uppercase"
            checked={transformType === 'uppercase'}
            onChange={e => setTransformType(e.target.value)} // Direct state update
          />
          Uppercase
        </label>
        <label style={{ marginRight: '15px' }}>
          <input
            type="radio"
            value="lowercase"
            checked={transformType === 'lowercase'}
            onChange={e => setTransformType(e.target.value)}
          />
          Lowercase
        </label>
        <label style={{ marginRight: '15px' }}>
          <input
            type="radio"
            value="titlecase"
            checked={transformType === 'titlecase'}
            onChange={e => setTransformType(e.target.value)}
          />
          Title Case
        </label>
      </div>

      {/* Display Output */}
      <div style={{ border: '1px solid blue', padding: '10px', backgroundColor: '#e6f7ff' }}>
        <strong>Transformed Output:</strong>
        <p>{transformedText}</p>
      </div>
    </div>
  );
};

export default TextTransformerFunction; // Uncomment in a real project