import { useSelector } from 'react-redux';
import { ACTIVE, COMPLETED } from '../redux/filterTypes';
import Footer from './Footer';
import FilteredList from './FilteredList';

const List = () => {
  const reduxItems = useSelector((state) => state.items);
  const reduxActiveItems = useSelector((state) => state.activeItems);
  const reduxFilterType = useSelector((state) => state.filterType);
  const reduxCompletedItems = useSelector((state) => state.completedItems);

  const Filterable = () => {
    if (reduxFilterType === COMPLETED)
      return <FilteredList items={reduxCompletedItems} />;
    if (reduxFilterType === ACTIVE)
      return <FilteredList items={reduxActiveItems} />;

    return <FilteredList items={reduxItems} />;
  };

  return (
    <>
      <ul className="mt-5 rounded-t-md bg-white text-light cursor-pointer dark:bg-desaturatedDarkBlue duration-500">
        {Filterable()}
      </ul>
      <Footer />
    </>
  );
};

export default List;
