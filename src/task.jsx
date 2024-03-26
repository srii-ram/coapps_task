import React, { useState, useEffect } from 'react';
import './task.css';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data.value))
      .catch(error => console.error('Error fetching Chuck Norris joke:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokes</h1>
        <button onClick={fetchJoke}>Get Another Joke</button>
        <p>{joke}</p>
      </header>
    </div>
  );
}

export default App;
