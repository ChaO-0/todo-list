import ListItem from './ListItem';

const List = ({ items, setItems }) => {
  const handleDelete = (elm) => {
    setItems((prev) => prev.filter((item) => item !== elm));
  };

  return (
    <>
      <ul className="mt-5 rounded-t-md bg-white text-light cursor-pointer">
        {items.map((item, idx) => (
          <ListItem item={item} key={idx} handleDelete={handleDelete} />
        ))}
      </ul>

      <div className="flex justify-between text-light text-xs px-6 py-4 bg-white rounded-b-md">
        <div>{items.length} items left</div>
        <div className="flex justify-between gap-7">
          <div className="cursor-pointer">All</div>
          <div className="cursor-pointer">Active</div>
          <div className="cursor-pointer">Completed</div>
        </div>
        <div className="cursor-pointer">Clear completed</div>
      </div>
    </>
  );
};

export default List;
