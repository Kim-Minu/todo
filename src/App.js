import './App.css';
import Todo from './Todo';
import React, {useState, useEffect} from 'react';
import {Container, List, Paper} from "@mui/material"
import AddTodo from './AddTodo';
import {call} from './ApiService';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      call("/todo", "GET", null)
      .then((response) => setItems(response.data));
  }, []);

  const addItem = (item) => {
    call("/todo", "POST", item)
    .then((response) => setItems(response.data));
  };

  const deletItem = (item) => {
    call("/todo", "DELETE", item)
    .then((response) => {
      const newItmes = items.filter(e => e.id !== item.id);
      setItems([...newItmes]);
    });

  };

  const editItem = (item) => {
    call("/todo", "PUT", item)
    .then((response) => setItems(response.data));
  };

  /*const addItem = (item) => {
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
  }*/

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
