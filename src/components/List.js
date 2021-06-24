import { useState } from 'react';
import ListItem from './ListItem';

const List = ({ items, setItems }) => {
  const handleDelete = (elm) => {
    setItems((prev) => prev.filter((item) => item.id !== elm));
  };

  const activeItems = items.filter((item) => !item.completed);

  const completedItems = items.filter((item) => item.completed);

  const handleClick = (type) => {
    setFilterType(type);
    if (type === 'active') {
    }
  };

  const [filterType, setFilterType] = useState('all');

  return (
    <>
      <ul className="mt-5 rounded-t-md bg-white text-light cursor-pointer">
        {filterType === 'all' &&
          items.map((item, idx) => (
            <ListItem
              item={item}
              setItems={setItems}
              key={idx}
              handleDelete={handleDelete}
            />
          ))}

        {filterType === 'active' &&
          activeItems.map((item, idx) => (
            <ListItem
              item={item}
              setItems={setItems}
              key={idx}
              handleDelete={handleDelete}
            />
          ))}

        {filterType === 'completed' &&
          completedItems.map((item, idx) => (
            <ListItem
              item={item}
              setItems={setItems}
              key={idx}
              handleDelete={handleDelete}
            />
          ))}
      </ul>

      <div className="flex justify-between text-lightGray text-xs px-6 py-4 bg-white rounded-b-md">
        <div>{items.length} items left</div>
        <div className="flex justify-between gap-7">
          <div
            className={`cursor-pointer hover:text-light ${
              filterType === 'all' && 'text-blueFilter hover:text-blueFilter'
            }`}
            onClick={() => handleClick('all')}
          >
            All
          </div>
          <div
            className={`cursor-pointer hover:text-light ${
              filterType === 'active' && 'text-blueFilter hover:text-blueFilter'
            }`}
            onClick={() => handleClick('active')}
          >
            Active
          </div>
          <div
            className={`cursor-pointer hover:text-light ${
              filterType === 'completed' &&
              'text-blueFilter hover:text-blueFilter'
            }`}
            onClick={() => handleClick('completed')}
          >
            Completed
          </div>
        </div>
        <div className="cursor-pointer hover:text-light">Clear completed</div>
      </div>
    </>
  );
};

export default List;
