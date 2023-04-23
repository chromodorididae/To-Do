import React, { useState } from 'react';
//input useState is imported here

import './App.css';

function App() {

  // useState is an empty string
  // state hook - useState
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  //helper function

  function addItem () {
    console.log(newItem);

    if (!newItem) {
    alert('Please enter an item');
    return;
    }

    const item = {
      // id: Math.floor(Math.random() * 1000),
      id: Date.now(),
      value: newItem,
    }

    setItems(oldList => [...oldList, item])

    setNewItem('');

    console.log(items);

  }
  
  function deleteItem(id) {
    const newArray = items.filter(item => item.id!== id);
    // "everything excluding selected item"
    setItems(newArray);

  }

  return (
  <div className="App">
    <header className="App-header">
      <h1>Header</h1>
    </header>

    <input
    type="text"
    placeholder='Add an item...'
    value={newItem}
    onChange={(e) => setNewItem(e.target.value)}
    />
    {/* useState is called as value and entered item is stored */}
    <button onClick={() => addItem()}>Add</button>

    <div className="container">
    {/* unordered list */}
    <ul style={{listStyle: 'none'}}>
      {items.map( item => {
        return (
          <li key={item.id}>{item.value}
          <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        )
      })}
    </ul>
    </div>

  </div>
  );
}

export default App;
