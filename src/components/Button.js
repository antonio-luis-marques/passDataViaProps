// Button component (Button.js) - this is the child component


export default function Button({ toggleName }) {
  return (
    <>
      {/* 
        This button receives the function handleChangeName as a prop and 
        triggers a change in the 'name' state
      */}

      <button onClick={toggleName}>
        toggle Name
      </button>

    </>

  );
}
