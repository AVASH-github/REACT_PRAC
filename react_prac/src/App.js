import Game from "./tic-tac-toe";
import GroceryForm from "./GroceryForm";
import GroceryList from "./GroceryList";
import Card from "./Card";


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

    <hr/><hr/>

    <div style={{display:'flex',gap:'20px'}}>
      <Card 
        title="Card 1"
        content="This is the content of the first card"
        image="https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Frabbit.jpg?cs=srgb&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=dc17004d89dc8f66cb2d8df31719d3a6"    / >

<Card 
        title="Card 2"
        content="This is the content of the 2nd card"
        image="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?fit=crop&w=300&h=300"    / >
  
 
  <Card 
        title="Card 3"
        content="This is the content of the Third card"
        image="https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243"    / >
  
    </div>

    </>

  
  );
}


export default App;
