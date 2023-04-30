import React from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="App">
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
