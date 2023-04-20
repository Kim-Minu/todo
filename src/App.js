import './App.css';
import Todo from './Todo';
import React, {useState} from 'react';
import {Container, List, Paper} from "@mui/material"
import AddTodo from './AddTodo';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    item.id = "ID-" + items.length;
    item.done = false;
    setItems([...items, item]);

    console.log("items: ", items);

  };

  const deletItem = (item) => {
    const newItmes = items.filter(e => e.id !== item.id);
    setItems([...newItmes]);
  };

  const editItem = (item) => {
    setItems([...items]);
  }

  let todoItems = items.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item) => (
          <Todo 
            item={item} 
            key={item.id} 
            deletItem={deletItem}
            editItem={editItem}
            />
        ))}
      </List>
    </Paper>

  );
  

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">
          {todoItems}
        </div>
      </Container>
    </div>
  );
}

export default App;
