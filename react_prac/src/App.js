import Game from "./tic-tac-toe";
import GroceryForm from "./GroceryForm";
import GroceryList from "./GroceryList";
import { useState } from "react";
function App() {
  const [groceries,setGroceries]=useState([]);


  const addGroceries = (item) => {
    setGroceries([...groceries, item]); 
  };

  return (
    <>
    
 <Game />
    <GroceryForm addGroceries={addGroceries}/>
    <GroceryList groceries={groceries}/>
    </>
  );
}


export default App;
