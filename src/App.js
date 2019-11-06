import React from 'react';
import './App.css';
import WordDisplay from './Components/WordDisplay';

function App() {

  const word = 'hello';
  const form = document.querySelector('form');
  //is this properly declare? why not use const? arrow function for 'this' weirdness?
  //tried to use this but didnt work
  // is .val() jquery?
  
  const handleSubmit = e => {
    e.preventDefault();
    const input = document.getElementById('guess').value.toLowerCase();
    testLetter(input, word);
  }

  function testLetter(guess, word) {
    word.search(guess) >= 0 ? console.log('yes') : console.log('wrong')
  }

  return (
		<main className="App">
			<header className="App-header">
				<h2>Hang-Man!</h2>
			</header>
			<div className="game-view">

        {/* maybe a form component? */}
        <form className="letter-select" onSubmit={handleSubmit}>
          <input id="guess" type="text" name="letter" placeholder="pick a letter" />
          <input type="submit" />
        </form>

        <div className="word-box"><WordDisplay wordArr={word.split('')} word={word} /></div>
      </div>
		</main>
  );
}

export default App;
