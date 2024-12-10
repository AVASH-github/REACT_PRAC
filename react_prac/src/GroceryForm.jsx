import { useState } from "react";

function GroceryForm({addGroceries}){

    const [item,setItem]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(item.trim()===""){
            alert("Please enter the Grocery Item");
            return;
        }
      addGroceries(item);
       setItem("");
    }
    return (
<>

        <h1>GROCERY ITEMS</h1>


        <form onSubmit={handleSubmit}> 
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} placeholder="Enter the Grocery Item......"/>
            <button type="submit">ADD ITEM </button>
        </form>
</>


    );
}

export default GroceryForm;