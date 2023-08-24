import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../constans/types.js';

export const addTodo = (task) => ({
  type: ADD_TODO,
  payload: task,
});

export const deleteTodo = (taskId) => ({
  type: DELETE_TODO,
  payload: taskId,
});

export const toggleTodo = (taskId) => ({
  type: TOGGLE_TODO,
  payload: taskId,
});
