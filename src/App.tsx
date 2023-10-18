import { useState } from 'react';

import './App.css';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  const hanldeRemove = (id: number) => {
    const filterPeople = people.filter((item) => item.id !== id);
    setPeople(filterPeople);
  };
  return (
    <main>
      <section className='container'>
        <h3>{people.length} brithday today</h3>
        <List people={people} hanldeRemove={hanldeRemove} />
        <button className='btn' onClick={() => setPeople([])} type='button'>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
