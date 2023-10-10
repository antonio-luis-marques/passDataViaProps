// Button component (Button.js) - this is the child component

export default function Button({ handleChangeName }) {
  return (
    /* 
      This button receives the function handleChangeName as a prop and 
      triggers a change in the 'name' state
    */
    
    <button onClick={handleChangeName}>
      Change Name
    </button>
  );
}
