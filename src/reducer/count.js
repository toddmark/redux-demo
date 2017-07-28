const count = (state = {count: 0}, action) => {
  switch(action.type) {
    case 'ADD':
      return Object.assign({}, state, {count: action.val});
    case 'MINUS':
      return Object.assign({}, state, {count: action.val});
    default:
      return state;
  }
}

export default count;