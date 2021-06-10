import logo from './logo.svg';
import { useState } from 'react';

import List from './List/List.js';
import data from './data.js';
import './App.css';

let App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <div className="circle1"></div>
        <h3 className="title">{people.length} birthdays today</h3>
        <List people={people} setPeople={setPeople}></List>
        <button className="btn clear-all" onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
