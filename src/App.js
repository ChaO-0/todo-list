import { useState } from 'react';
import bgLight from './images/bg-desktop-light.jpg';
import moonIcon from './images/icon-moon.svg';
import List from './components/List';

const App = () => {
  // const [items, setItems] = useState([
  //   'Complete online javascript course',
  //   'Jog around the park 3x',
  //   '10 minutes meditation',
  //   'Read for 1 hour',
  // ]);

  const [items, setItems] = useState([
    {
      id: 0,
      text: 'Complete online javascript course',
      completed: false,
    },
    {
      id: 1,
      text: 'Jog around the park 3x',
      completed: false,
    },
    {
      id: 2,
      text: '10 minutes meditation',
      completed: false,
    },
    {
      id: 3,
      text: 'Read for 1 hour',
      completed: false,
    },
  ]);

  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prev) => [
      ...prev,
      { id: prev.length, text: item, completed: false },
    ]);
    setItem('');
  };

  const handleChange = (e) => setItem(e.target.value);

  return (
    <div
      className="bg-scroll font-body h-72"
      style={{ backgroundImage: `url(${bgLight})` }}
    >
      <div className="container mx-auto md:max-w-xl max-w-sm pt-16 text-white font-bold">
        <div className="flex justify-between text-4xl tracking-widest">
          <div>T O D O</div>
          <img src={moonIcon} className="w-10 cursor-pointer" alt="icon" />
        </div>
        <div className="pt-12 text-light relative">
          <span className="absolute border-2 rounded-full w-6 h-6 bottom-5 left-5 cursor-pointer"></span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="rounded-md px-3 pl-14 py-4 focus:outline-none w-full text-lg"
              value={item}
              onChange={handleChange}
            />
          </form>
        </div>

        <List items={items} setItems={setItems} />

        <div className="text-light text-center py-14 text-sm">
          Drag and drop to reorder list
        </div>
      </div>
    </div>
  );
};

export default App;
