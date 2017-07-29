import uuidv1 from 'uuid/v1';

export const changeInput = val => ({type: 'CHANGE_INPUT', val});
export const addTodo = val => ({type: 'ADD_TODO', todo: {id: uuidv1(), text: val, completed: false}});
export const complete = id => ({type: 'COMPLETE', id});