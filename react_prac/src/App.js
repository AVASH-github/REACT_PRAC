import ButtonClick from "./buttonClick";
import { useState } from "react";
function App() {
  const [count,setCount]=useState(0);

  function HandleClick(){
      setCount(count+1);
  }

  return (
    <>
    <h1>Counters that works together </h1>
    <ButtonClick count={count} onClick={HandleClick} />
    <ButtonClick count={count} onClick={HandleClick} />
    
    </>
  );
}


export default App;
