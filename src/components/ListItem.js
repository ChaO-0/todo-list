import checkIcon from '../images/icon-check.svg';
import crossIcon from '../images/icon-cross.svg';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';

const ListItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span
        className={`absolute border dark:border-veryDarkGrayishBlue duration-500 rounded-full w-6 h-6 bottom-5 left-5 cursor-pointer ${
          item.completed
            ? 'bg-gradient-to-br from-blueCheck to-purpleCheck'
            : 'bg-white dark:bg-desaturatedDarkBlue'
        } `}
        onClick={() => dispatch(toggleTodo(item.id))}
      >
        <img
          src={checkIcon}
          alt="check icon"
          className={`object-none object-center w-5 h-5 ${
            !item.completed && 'hidden'
          }`}
        />
      </span>
      <div
        className={`pl-14 duration-500 dark:text-lightGrayishBlue ${
          item.completed && 'line-through text-completed'
        }`}
      >
        {item.text}
      </div>
      <span
        className="absolute cursor-pointer w-6 h-6 bottom-3.5 right-5 hidden remove-icon"
        onClick={() => dispatch(deleteTodo(item.id))}
      >
        <img
          src={crossIcon}
          alt="cross icon"
          className="object-none object-center w-5 h-5"
        />
      </span>
    </>
  );
};

export default ListItem;
