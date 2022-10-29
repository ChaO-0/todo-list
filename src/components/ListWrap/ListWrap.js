import { useState } from 'react';
import bgLight from '../../images/bg-desktop-light.jpg';
import bgDark from '../../images/bg-desktop-dark.jpg';
import moonIcon from '../../images/icon-moon.svg';
import sunIcon from '../../images/icon-sun.svg';
import List from '../List/List';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/actions';
import { TOGGLE_THEME } from '../../redux/actionTypes';

const ListCard = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.dark);

  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: { text: item } });
    setItem('');
  };

  const handleChange = (e) => setItem(e.target.value);

  return (
    <div className={`transition ${darkTheme && 'dark'}`}>
      <div className="wrapper duration-500">
        <div
          className="bg-scroll font-body h-72 bg-no-repeat bg-center lg:bg-cover lg:bg-top"
          style={{ backgroundImage: `url(${darkTheme ? bgDark : bgLight})` }}
        >
          <div className="header-wrapper">
            <div className="header-flex">
              <div className="">T O D O</div>
              <img
                src={darkTheme ? sunIcon : moonIcon}
                className="w-10 cursor-pointer"
                alt="icon"
                onClick={() => dispatch(toggleTheme(TOGGLE_THEME))}
              />
            </div>
            <div className="pt-12 text-light relative">
              <span className="check-outline"></span>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input-form duration-500"
                  value={item}
                  onChange={handleChange}
                  placeholder="Create a new todo..."
                />
              </form>
            </div>

            <List />

            <div className="text-light text-center py-14 text-sm">
              Drag and drop to reorder list
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
