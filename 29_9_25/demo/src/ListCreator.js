
import React, { useState } from 'react';

/**
 * ListCreator Functional Component
 * Accepts text input and displays it as an ordered list on the onBlur event.
 */
function ListCreator() {
    // State to hold the raw text currently in the text field
    const [rawText, setRawText] = useState('');
    
    // State to hold the processed list items (the array for the <ol>)
    const [listItems, setListItems] = useState([]);

    // Handler for text input changes (stores raw text in state)
    const handleTextChange = (e) => {
        setRawText(e.target.value);
    };

    /**
     * Handler for the onBlur event. This is where the magic happens!
     * It processes the raw text and updates the listItems state.
     */
    const handleBlur = () => {
        if (rawText.trim() === '') {
            setListItems([]);
            return;
        }

        // 1. Process the raw text:
        // We split the string by commas (,) and/or newlines (\n), then filter out any empty strings (whitespace).
        const itemsArray = rawText
            .split(/[\n,]/) // Split by newline or comma
            .map(item => item.trim()) // Trim whitespace from each item
            .filter(item => item.length > 0); // Remove any empty strings (e.g., from double commas)

        // 2. Update the state:
        // When this state is updated, the component re-renders and displays the new list.
        setListItems(itemsArray);
    };

    // The component's JSX output
    return (
        <div style={{ padding: '30px', border: '3px solid #f8d7da', borderRadius: '10px', maxWidth: '500px', margin: '30px auto', backgroundColor: '#fff3f3' }}>
            
            <h2>📝 List Creator (onBlur Event)</h2>

            <p>Enter items separated by **commas** or press **Enter** for new lines.</p>

            {/* The Textarea Input Field */}
            <textarea
                value={rawText}
                onChange={handleTextChange}  //{(e)=>setRawText(e.target.value)}
                onBlur={handleBlur} // <--- The target event!
                placeholder="E.g., Apple, Banana, Cherry"
                rows="5"
                style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #dc3545', boxSizing: 'border-box', marginBottom: '20px' }}
            />

            <hr style={{ borderColor: '#dc3545' }} />

            <h3>Processed Ordered List:</h3>
            
            {/* Conditional Rendering: Only show the list if there are items */}
            {listItems.length > 0 ? (
                // Display the list, mapping the state array to <li> elements
                <ol style={{ textAlign: 'left', margin: '0 0 0 20px', padding: 0, fontSize: '1.1em' }}>
                    {listItems.map((item, index) => (
                        // Key prop is essential for performance in lists
                        <li key={index} style={{ marginBottom: '5px' }}>
                            {item}
                        </li>
                    ))}
                </ol>
            ) : (
                <p style={{ color: '#888' }}>Start typing and click outside the box to generate the list.</p>
            )}

        </div>
    );
}

export default ListCreator;