import './App.css';
import React, { useState } from 'react';
import MoleContainer from './components/MoleContainer';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
         <MoleContainer
          key={i}
          setScore={setScore}
          score={score}/>
      )
    }

    return (
      <div>
        {hills}
      </div>
    )
  }
  
  return (
    <div className="App">
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;