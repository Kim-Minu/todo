import './App.css';
import Todo from './Todo';
import React, {useState} from 'react';
import {List, Paper} from "@mui/material"

function App() {
  const [item, setItem] = useState(
    [{
      id: "0",
      title: "hello World 1",
      done: true
    },
    {
      id: "1",
      title: "hello World 2",
      done: true
    }]

  );

  let todoItems = item.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {item.map((item) => (
          <Todo item = {item} key={item.id} />
        ))}
      </List>
    </Paper>

  );
  

  return (
    <div className="App">
      {todoItems}
    </div>
  );
}

export default App;
