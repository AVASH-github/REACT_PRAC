function GroceryList({ groceries }) {
    return (
      <ul>
        {groceries.map((item, index) => (
          <li key={index}>{item}</li> // Display each grocery item
        ))}
      </ul>
    );
  }
  
  export default GroceryList;
  