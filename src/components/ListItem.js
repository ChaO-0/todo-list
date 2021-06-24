import checkIcon from '../images/icon-check.svg';
import crossIcon from '../images/icon-cross.svg';

const ListItem = ({ item, setItems, handleDelete }) => {
  const handleClick = () => {
    setItems((prev) => {
      const elementsIndex = prev.findIndex((elm) => elm.id === item.id);
      let newArray = [...prev];
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        completed: !newArray[elementsIndex].completed,
      };
      return newArray;
    });
  };

  return (
    <li className="border-b-2 py-4 relative list-item">
      <span
        className={`absolute border-2 rounded-full w-6 h-6 bottom-5 left-5 cursor-pointer ${
          item.completed
            ? 'bg-gradient-to-br from-blueCheck to-purpleCheck'
            : 'bg-white'
        } `}
        onClick={handleClick}
      >
        <img
          src={checkIcon}
          alt="check icon"
          className="object-none object-center w-5 h-5"
        />
      </span>
      <div
        className={`pl-14 ${item.completed && 'line-through text-completed'}`}
      >
        {item.text}
      </div>
      <span
        className="absolute cursor-pointer w-6 h-6 bottom-3.5 right-5 hidden remove-icon"
        onClick={() => handleDelete(item.id)}
      >
        <img
          src={crossIcon}
          alt="cross icon"
          className="object-none object-center w-5 h-5"
        />
      </span>
    </li>
  );
};

export default ListItem;
