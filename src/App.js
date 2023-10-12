// App.js component - this is the parent component
import React, { useState } from 'react';

// Importing the Button component
import Button from './components/Button'; 

function App() {
  const [name, setName] = useState('Antonio Marques'); // Define the state for 'name'

  // This function will change the state of 'name' based on its current value
  const toggleName = () => setName(
    name === 'Antonio Marques' ? 'Mario Pollo' : 'Antonio Marques'
  );

  return (
    <div>

      {/* Interpolation to display the 'name' */}
      <p>Hello: {name}</p>

       {/* Render the Button component and pass the 'toggleName' function as a prop */}
      <Button toggleName={toggleName} name={name}/>

    </div>
  );
}

export default App;
