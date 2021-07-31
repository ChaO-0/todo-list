import { useDispatch, useSelector } from 'react-redux';
import { setFilter, clearCompletedTodo } from '../../redux/actions';
import { ACTIVE, ALL, COMPLETED } from '../../redux/filterTypes';

const Footer = () => {
  const reduxItems = useSelector((state) => state.items);
  const reduxActiveItems = useSelector((state) => state.activeItems);
  const reduxCompletedItems = useSelector((state) => state.completedItems);
  const reduxFilterType = useSelector((state) => state.filterType);
  const dispatch = useDispatch();

  const filterTypes = [
    {
      type: ALL,
      text: 'All',
    },
    {
      type: ACTIVE,
      text: 'Active',
    },
    {
      type: COMPLETED,
      text: 'Completed',
    },
  ];

  const itemsLength = () => {
    if (reduxFilterType === ACTIVE) return reduxActiveItems.length;
    if (reduxFilterType === COMPLETED) return reduxCompletedItems.length;

    return reduxItems.length;
  };

  return (
    <div className="flex justify-between text-lightGray text-xs px-6 py-4 bg-white dark:bg-desaturatedDarkBlue rounded-b-md duration-500">
      <div>{itemsLength()} items left</div>
      <div className="flex justify-between gap-7">
        {filterTypes.map((filter) => (
          <div
            className={`cursor-pointer hover:text-light ${
              filter.type === reduxFilterType &&
              'text-blueFilter hover:text-blueFilter'
            }`}
            onClick={() => dispatch(setFilter(filter.type))}
            key={filter.type}
          >
            {filter.text}
          </div>
        ))}
      </div>
      <div
        className="cursor-pointer hover:text-light"
        onClick={() => dispatch(clearCompletedTodo())}
      >
        Clear completed
      </div>
    </div>
  );
};

export default Footer;
