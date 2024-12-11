import Game from "./tic-tac-toe";
import GroceryForm from "./GroceryForm";
import GroceryList from "./GroceryList";
import Card from "./Card";
import Input from "./Input";
import Form from "./Form";

import { useState } from "react";
function App() {
  const [groceries,setGroceries]=useState([]);

  const addGroceries = (item) => {
    setGroceries([...groceries, item]); 
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact,setContact]=useState("");
  const [gender,setGender]=useState("");
  const[submittedData,setSubmittedData]=useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = { name: name, email: email, password: password, contact: contact, gender: gender, };

    console.log(inputData);
    setSubmittedData(inputData)

    setName("");
    setEmail("");
    setPassword("");
    setContact("");
    setGender("");
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
        title="Card 2"
        content="This is the content of the 2nd card"
        image="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?fit=crop&w=300&h=300"    / >
          <Card 
        title="Card 2"
        content="This is the content of the 2nd card"
        image="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?fit=crop&w=300&h=300"    / >
          <Card 
        title="Card 2"
        content="This is the content of the 2nd card"
        image="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?fit=crop&w=300&h=300"    / >
  
 
  <Card 
        title="Card 3"
        content="This is the content of the Third card"
        image="https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243"    / >
  
    </div>


    <hr/>

    <div style={{ textAlign: "center" }}>
      <h1>Reusable Form and Input Components</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"
        />
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <Input
          label="Contact"
          type="number"
          value={contact}
          onChange={(e)=>setContact(e.target.value)}
          placeholder="Enter your Mobile No."
        />
        <Input
          label="Gender"
          type="radio"
          value={gender}
          options={[
            {label:"Male",value:"male"},
            {label:"Female",value:"female"},
            {label:"Other",value:"other"},
          ]}
          onChange={(e)=>setGender(e.target.value)}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </Form>
      {submittedData && ( <div style={{ marginTop: "20px" }}> 
        <h2>Submitted Data</h2> 
        <p><strong>Name:</strong> {submittedData.name}</p> 
        <p><strong>Email:</strong> {submittedData.email}</p> 
        <p><strong>Password:</strong> {submittedData.password}</p> 
        <p><strong>Contact:</strong> {submittedData.contact}</p> 
        <p><strong>Gender:</strong> {submittedData.gender}</p> 
        </div> )}
    </div>
    </>

  
  );
}


export default App;
