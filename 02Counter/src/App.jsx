import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if(counter < 20){
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }

    
  }

const reduceValue = () => {
  if(counter>0){
    setCounter((prevCounter) => prevCounter - 1);
  }
  // console.log(counter);

}
  return (
  <>
   <h1>hello</h1>
   <h2>Counter value: {counter}</h2>
   <button onClick={addValue}>Add Value {counter}</button>
   <br/>
   <button onClick={reduceValue}>Reduce Value {counter}</button>
   </>
  )
}

export default App
