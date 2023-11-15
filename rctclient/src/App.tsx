import React  , { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiData, setApiData] = useState('nothing received.. Server down?');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hostIP = process.env.HOST_IP || 'localhost';
        const apiURL = 'http://' + hostIP + ':8080/api/hello'
        const response = await fetch(apiURL); // Replace with your actual API endpoint
        const data = await response.text();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hallo ik ben de testcode, de volgende string komt van de back-end:<br/><br/>

          {loading ? (
              <i>Loading...</i>
          ) : (
              <pre>{apiData}</pre>
              // Use {apiData} if the response is plain text
          // {JSON.stringify(apiData, null, 2)}
          )}

          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
