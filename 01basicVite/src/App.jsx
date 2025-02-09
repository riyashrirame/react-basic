import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  
  const addValue = () => {
    setCounter((prevcounter) => prevcounter +1) // callback
    setCounter((prevcounter) => prevcounter +1)
  };
  const removeValue = () => {
    
    setCounter(counter -1);
  };
  return (
    <>
      <h1> Hi from riya {counter} times!!</h1>
      <h2>its only {counter} Hi .. </h2>
      <button onClick={addValue}>HI +2</button>
      {"  "}
      <button onClick={removeValue}>remove value</button>
      <p>just stop it! you have clicked {counter} times .</p>
    </>
  );
}

export default App;
