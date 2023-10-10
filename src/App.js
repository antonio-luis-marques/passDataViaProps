// App.js component - this is the parent component
import React, { useState } from 'react';

// Importing the Button component
import Button from './components/Button'; 

function App() {
  const [name, setName] = useState('Antonio Marques'); // Define the state for 'name'

  // This function will change the state of 'name' based on its current value
  const handleChangeName = () => setName(
    name === 'Antonio Marques' ? 'Mario Pollo' : 'Antonio Marques'
  );

  return (
    <div>
      <p>Hello: {name}</p> {/* Interpolation to display the 'name' */}

       {/* Render the Button component and pass the 'handleChangeName' function as a prop */}
      <Button handleChangeName={handleChangeName} />
    </div>
  );
}

export default App;
