//React
import React from 'react';

//Import Components
import Hangman from './Components/Hangman';

//Styles
import './App.css';

function App() {

  return (
    <div className="App">
      
      <header className="App-header">
        <Hangman />
      </header>
    </div>
  );
}

export default App;
