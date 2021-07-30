import { reorder } from '../utils/reorder';
import {
  ADD_TODO,
  CLEAR_COMPLETED_TODO,
  DELETE_TODO,
  SET_FILTER,
  SORT_TODO,
  TOGGLE_TODO,
} from './actionTypes';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const clearCompletedTodo = () => ({
  type: CLEAR_COMPLETED_TODO,
});

export const sortTodo = (list, start, end) => ({
  type: SORT_TODO,
  payload: reorder(list, start, end),
});

export const setFilter = (filterType) => ({
  type: SET_FILTER,
  payload: filterType,
});
