import {
  ADD_TODO,
  CLEAR_COMPLETED_TODO,
  DELETE_TODO,
  SET_FILTER,
  SORT_TODO,
  TOGGLE_TODO,
} from './actionTypes';
import { ACTIVE, ALL, COMPLETED } from './filterTypes';

let id = 4;

const defaultItems = [
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
];

const initState = {
  items: defaultItems,
  activeItems: defaultItems,
  completedItems: [],
  filterType: ALL,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: id++,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_TODO:
      const elementsIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      let newArray = [...state.items];
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        completed: !newArray[elementsIndex].completed,
      };
      return {
        ...state,
        items: newArray,
        activeItems: newArray.filter((item) => !item.completed),
        completedItems: newArray.filter((item) => item.completed),
      };
    case CLEAR_COMPLETED_TODO:
      return {
        ...state,
        items: state.items.filter((item) => !item.completed),
        completedItems: [],
      };
    case SORT_TODO:
      return {
        ...state,
        items: state.filterType === ALL ? action.payload : [...state.items],
        activeItems:
          state.filterType === ACTIVE ? action.payload : [...state.activeItems],
        completedItems:
          state.filterType === COMPLETED
            ? action.payload
            : [...state.completedItems],
      };
    case SET_FILTER:
      return {
        ...state,
        filterType: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
