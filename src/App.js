import { useState } from "react";

function App() {

  let [message, setMessage] = useState(
    "java script yada yada"
  );

  function handleClick() {
    setMessage("somethig else");
  }
  
  // let message = "hello world"
  return (
  <div>
    <h1>{message}</h1>;)
    <button onCLick ={handleClick}>Update the message </button>
  </div>
);
}

export default App;
