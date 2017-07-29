const defaultState = {
  inputValue: '',
  todos: []
}

const count = (state = defaultState, action) => {
  switch(action.type) {
    case 'CHANGE_INPUT':
      return Object.assign({}, state, {inputValue: action.val});
    case 'ADD_TODO':
      return Object.assign({}, state, {todos: [...state.todos, action.todo]});
    case 'COMPLETE':
      return Object.assign({}, state, {todos: state.todos.map( item => 
        (item.id === action.id) ? {...item, completed: !item.completed} : item
      )});
    default:
      return state;
  }
}

export default count;