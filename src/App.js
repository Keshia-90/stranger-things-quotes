import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const[strangerThingsQuote, setStrangerThingsQuote] = useState([]);
  const[error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch (
          'https://strangerthings-quotes.vercel.app/api/quotes/5'
        );
        if (!response.ok) {
          throw new Error (response.statusText)
        }
        const data = await response.json();
        setStrangerThingsQuote(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError('Could Not Fetch The Data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className = 'App'>
      <h1>Quotes From Stranger Things</h1>
      {error && <p>{error}</p>}
      {strangerThingsQuote.map((quotes) => (
        <div className = 'quotes' key = {quotes.quote}>
          <h3> {quotes.author} </h3>
          <p> "{quotes.quote}" </p>
          </div>
      ))}
                <button onClick={() => window.location.reload(false)}>Refresh Quotes</button>
    </div>
  )
      };





export default App;
