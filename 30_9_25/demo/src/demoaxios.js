import axios from 'axios'
import { useState } from 'react';

// npm install axios    array   logic 
//  node js    RestAPI    url 
// data  display 
// map()/// iterate data 100  predefined 

// lifecycle useEffect []

export default function DemoAjax() {
    // State to hold the fetched data (an empty array initially
    let [jsonData, setJsonData] = useState([]);
    //state to manage loading
    let [isLoading,setLoading] = useState(false);
    //state to manage Errors
    const [error,setError] = useState(null);

    const loadData = ()=>{
        setLoading(true);
        setError(null);
        setJsonData([]);

        axios.get("https://jsonplaceholder.typicode.com//posts")
            .then((response)=>{
                setJsonData(response.data);
                setLoading(false);
            })
            .catch((err)=>{
                setError("Error fecting data...");
                setLoading(false);
            })

    }

    return (
        <>
        <button onClick={loadData} disabled={isLoading}>
            {isLoading?"Loading.....":"Load the data from API"}
        </button>

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {isLoading && !error && <p>Data is loading...</p>}

        <h2>Data in Table</h2>
        {jsonData.length>0?(
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {jsonData.map((user)=>(
                        <tr>
                            <td style={{textAlign:'center'}}>{user.id}</td>
                            <td style={{textAlign:'center'}}>{user.userId}</td>
                            <td style={{ maxWidth: '400px', textAlign: 'left' }}>{user.title}</td>
                            <td style={{ maxWidth: '500px', textAlign: 'left' }}>{user.body}</td>
                        
                        </tr>
                    ))}
                </tbody>
            </table>
            ):(!isLoading && !error && <p>Click the button to load the data.</p>
        )}
        </>
    )
}